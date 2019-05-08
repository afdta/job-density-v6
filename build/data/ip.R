library(tidyverse)
library(readxl)
library(here)
library(jsonlite)

file <- here("Job density data extract 20190503.xlsx")
data <- read_xlsx(file)


#totals
tots <- data %>% filter(cbsa > 90000, type=="TOTAL", naics=="00") %>% select("cbsa","year","measure","density","pchange")
            
tots_change <- tots %>% select(-density) %>% spread(key=measure, value=pchange) %>% split(.$cbsa)
tots_density <- tots %>% select(-pchange) %>% spread(key=measure, value=density) %>% split(.$cbsa)
            
seq0data <- toJSON(list(changes=tots_change, levels=tots_density), pretty=TRUE, digits=5, na="null")

sector15 <- data %>% filter(type=="TOTAL", year==2015, !(cbsa %in% c(99997, 99998)), !(naics %in% c("11", "21"))) %>% select(cbsa, naics, measure, pchange) %>% spread(measure, pchange) %>% split(.$cbsa)
sector_names <- unique(data[c("naics", "sector")]) %>% spread(naics, sector) %>% unbox()

sector_json <- toJSON(sector15, digits=5, na="null", pretty=TRUE)
sector_names_json <- toJSON(sector_names, pretty=TRUE)

counts <- as.data.frame(table(sector15$cbsa))

writeLines(c(
             "var seq0data = ", seq0data, ";",
             "var sector_data = ", sector_json, ";",
             "var sector_names = ", sector_names_json, ";",
             "export {seq0data, sector_data, sector_names}", ";"
             ),
            here("../js/data.js"))

           