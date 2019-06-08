library(tidyverse)
library(readxl)
library(here)
library(jsonlite)

#to do: revise with latest data
# check counts against increase/greater_inc variables

file <- here("geog_jobs_data_final2.xlsx")
data <- read_xlsx(file) %>% rename(cbsa_old = cbsa) %>% mutate(cbsa = ifelse(cbsa_old == 19430, 19380, cbsa_old)) %>% filter(cntyfips=="00000")
dayton <- filter(data, cbsa != cbsa_old)

#totals
tots <- data %>% filter(cbsa > 90000, type=="TOTAL", naics=="00") %>% select("cbsa", "year","measure","pchange")
types <- data %>% filter(cbsa == 99999, naics=="00", measure=="actual") %>% select("type", "year", "value"="pchange") %>% split(.$type)

#trends
trend_data <- data %>% filter(type=="TOTAL", naics=="00") %>% select("year", "measure", "pchange", "cbsa") %>% spread("measure", "pchange") %>% split(.$cbsa) %>% lapply(function(e){return(e %>% select(-cbsa))})
            
tots_change <- tots %>% spread(key="measure", value="pchange") %>% split(.$cbsa)
            
seq0data <- toJSON(list(changes=tots_change), pretty=TRUE, digits=5, na="null")

sector15_ <- data %>% filter(type=="TOTAL", year==2015, !(cbsa %in% c(99997, 99998)), !(naics %in% c("11", "21"))) %>% 
                select(cbsa, naics, measure, pchange) %>% 
                spread(measure, pchange)

sector15counts <- sector15_ %>% mutate(p_=ifelse(actual>0,1,0), ge_=ifelse(actual > expected, 1, 0)) %>% filter(cbsa < 90000) %>% group_by(naics) %>% summarise(p=sum(p_), ge=sum(ge_), n=n())

#test against data in sheet
sector15_test <- data %>% filter(type=="TOTAL", year==2015, !(cbsa %in% c(99997, 99998)), !(naics %in% c("11", "21"))) %>% 
  select(cbsa, naics, measure, pchange) %>% 
  spread(measure, pchange) %>% 
  mutate(p_=ifelse(actual>0,1,0), ge_=ifelse(actual > expected, 1, 0)) %>%
  inner_join(data %>% filter(type=="TOTAL", year==2015, measure=="actual"), by=c("cbsa","naics")) 

sector15_test %>% filter(p_ != increase | is.na(p_) | is.na(increase))

county_ <- data %>% filter(cbsa < 90000, naics=="00", year==2015) %>% select("cbsa", "type", "measure","pchange") %>% spread(measure, pchange) 
table(county_$type)

countycounts <- county_ %>% mutate(p_=ifelse(actual>0,1,0), ge_=ifelse(actual > expected, 1, 0)) %>% group_by(type) %>% summarise(p=sum(p_), ge=sum(ge_), n=n())

#check on intermediate outputs
#table(sector15counts$p_, sector15counts$naics)
#table(sector15counts$ge_, sector15counts$naics)

sector15 <- sector15_ %>% split(.$cbsa)
county <- county_ %>% split(.$cbsa)

tots15 <- data %>% filter(type=="TOTAL", year==2015, !(cbsa %in% c(99997, 99998)), naics=="00") %>% 
  select(cbsa, naics, measure, pchange) %>% 
  spread(measure, pchange) %>% 
  split(.$cbsa) %>% lapply(function(d){return(d %>% select("actual", "expected") %>% unbox() )})
                

sector_names <- unique(data[c("naics", "sector")]) %>% spread(naics, sector) %>% unbox()

sector_json <- toJSON(sector15, digits=5, na="null", pretty=TRUE)
sector_names_json <- toJSON(sector_names, pretty=TRUE)
county_json <- toJSON(county, digits=5, na="null", pretty=TRUE)
tots_json <- toJSON(tots15, digits=5, na="null", pretty=TRUE)
names_json <- unique(data[c("cbsa", "cbsaname")]) %>% spread(key=cbsa, value=cbsaname) %>% unbox() %>% toJSON(pretty=TRUE)
sector_counts_json <- toJSON(sector15counts, digits=5, pretty=TRUE)
county_counts_json <- toJSON(countycounts, digits=5, pretty=TRUE)
types_json <- toJSON(types, digits=5, pretty=TRUE)
trend_json <- toJSON(trend_data, digits=5, pretty=TRUE)

counts <- as.data.frame(table(sector15_$cbsa))

writeLines(c(
             "var seq0data = ", seq0data, ";",
             "var sector_data = ", sector_json, ";",
             "var sector_counts = ", sector_counts_json, ";",
             "var sector_names = ", sector_names_json, ";",
             "var county_data = ", county_json, ";",
             "var county_counts = ", county_counts_json, ";",
             "var county_trend = ", types_json, ";",
             "var naics00 = ", tots_json, ";",
             "var metro_names = ", names_json, ";",
             "var trend_data = ", trend_json, ";",
             "export {seq0data, sector_data, sector_counts, sector_names, county_data, county_counts, county_trend, naics00, metro_names, trend_data}", ";"
             ),
            here("../js/data.js"))

           