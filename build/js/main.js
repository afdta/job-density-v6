import degradation from "../../../js-modules/degradation.js";

import sequence from "./sequence.js";
import seq0 from "./seq0.js";
import seq1 from "./seq1.js";
import seq2 from "./seq2.js";
import seq3 from "./seq3.js";
import seq4 from "./seq4.js";
import seq5 from "./seq5.js";
import seq6 from "./seq6.js";

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
    sequence(container, seq1, 2);
    sequence(container, seq2, 2);
    sequence(container, seq3, 4);
    sequence(container, seq4, 4);
    sequence(container, seq5, 3);
    sequence(container, seq6, 3);
  }


} //close main()


document.addEventListener("DOMContentLoaded", main);
