import degradation from "../../../js-modules/degradation.js";

import sequence from "./sequence.js";
import seq0 from "./seq0.js";

//main function
function main(){

  var container = document.getElementById("job-density-scrolly");
  var wrap = d3.select(container);
  var compat = degradation(container);

  var dims = {w:0, h:0}
  
  function get_dims(){
    dims.w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    dims.h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  }
  get_dims();

  window.addEventListener("resize", get_dims);

  //browser degradation
  if(compat.browser()){

    sequence(container, seq0, 4);
    sequence(container, seq0, 4);

  }


} //close main()


document.addEventListener("DOMContentLoaded", main);
