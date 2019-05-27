library(tidyverse)
library(readxl)
library(here)
library(jsonlite)

file <- here("Job_density_data_extract_20190521.xlsx")
data <- read_xlsx(file) %>% rename(cbsa_old = cbsa) %>% mutate(cbsa = ifelse(cbsa_old == 19430, 19380, cbsa_old))
dayton <- filter(data, cbsa != cbsa_old)

#totals
tots <- data %>% filter(cbsa > 90000, type=="TOTAL", naics=="00") %>% select("cbsa", "year","measure","density","pchange")
            
tots_change <- tots %>% select(-density) %>% spread(key=measure, value=pchange) %>% split(.$cbsa)
tots_density <- tots %>% select(-pchange) %>% spread(key=measure, value=density) %>% split(.$cbsa)
            
seq0data <- toJSON(list(changes=tots_change, levels=tots_density), pretty=TRUE, digits=5, na="null")

sector15_ <- data %>% filter(type=="TOTAL", year==2015, !(cbsa %in% c(99997, 99998)), !(naics %in% c("11", "21"))) %>% 
                select(cbsa, naics, measure, pchange) %>% 
                spread(measure, pchange)

sector15counts <- sector15_ %>% mutate(p_=ifelse(actual>0,1,0), ge_=ifelse(actual > expected, 1, 0)) %>% filter(cbsa < 90000) %>% group_by(naics) %>% summarise(p=sum(p_), ge=sum(ge_))

countycounts <- data %>% filter(cbsa < 90000, naics=="00", year==2015, cntyfips=="00000") %>% select("cbsa", "year", "type", "measure","pchange") %>% spread(measure, pchange) %>%
                        mutate(p_=ifelse(actual>0,1,0), ge_=ifelse(actual > expected, 1, 0))

#check on intermediate outputs
#table(sector15counts$p_, sector15counts$naics)
#table(sector15counts$ge_, sector15counts$naics)



sector15 <- sector15_ %>% split(.$cbsa)

tots15 <- data %>% filter(type=="TOTAL", year==2015, !(cbsa %in% c(99997, 99998)), naics=="00") %>% 
  select(cbsa, naics, measure, pchange) %>% 
  spread(measure, pchange) %>% 
  split(.$cbsa) %>% lapply(function(d){return(d %>% select("actual", "expected") %>% unbox() )})
                

sector_names <- unique(data[c("naics", "sector")]) %>% spread(naics, sector) %>% unbox()

sector_json <- toJSON(sector15, digits=5, na="null", pretty=TRUE)
sector_names_json <- toJSON(sector_names, pretty=TRUE)
tots_json <- toJSON(tots15, digits=5, na="null", pretty=TRUE)
names_json <- unique(data[c("cbsa", "cbsaname")]) %>% spread(key=cbsa, value=cbsaname) %>% unbox() %>% toJSON(pretty=TRUE)
sector_counts_json <- toJSON(sector15counts, digits=5, pretty=TRUE)

counts <- as.data.frame(table(sector15_$cbsa))

writeLines(c(
             "var seq0data = ", seq0data, ";",
             "var sector_data = ", sector_json, ";",
             "var sector_counts = ", sector_counts_json, ";",
             "var sector_names = ", sector_names_json, ";",
             "var naics00 = ", tots_json, ";",
             "var metro_names = ", names_json, ";",
             "export {seq0data, sector_data, sector_counts, sector_names, naics00, metro_names}", ";"
             ),
            here("../js/data.js"))

           