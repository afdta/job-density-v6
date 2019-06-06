library(base64enc)

css64 <- function(file, type="svg"){
  f64 <- base64encode(file)
  css <- paste0("background: url('data:image/svg+xml;base64,", f64, "');")
  return(css)
}

css64("/home/alec/Projects/Brookings/job-density/build/design/actual_expected_legend.svg")
