import degradation from "../../../js-modules/degradation.js";
import on_resize from './on_resize.js';

import sequence from "./sequence2.js";

import intro0 from "./intro0.js";

import seq0 from "./seq0.js";
import seq1 from "./seq1.js";

import seq4 from "./seq4.js";
import seq5 from "./seq5.js";
import seq6 from "./seq6.js";
import seq7 from "./seq7.js";

import dashboard from "./dashboard.js";

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

  on_resize(get_dims, true);

  //browser degradation
  if(compat.browser()){
    sequence(container, [intro0], '<p class="meta-header meta-header-i"><span>Data and measures</span></p>');

    sequence(container, [seq0, seq1], '<p id="group-seqs-1" class="meta-header meta-header-0"><span>Job density increased in metropolitan America</span></p>');
    
    sequence(container, [seq4, seq5], '<p id="group-seqs-2" class="meta-header meta-header-1"><span>Job density trends varied among metropolitan areas</span></p>');
  
    sequence(container, [seq6, seq7], '<p id="group-seqs-3" class="meta-header meta-header-2"><span>Job density trends varied within metropolitan areas</span></p>');

    wrap.append("div").classed("sequence-wrap",true).append("div").classed("center-col",true).html("<p>This analysis helps leaders understand how economic activity has been clustering and dispersing across and within metropolitan areas—and where new land use and placemaking solutions may be most needed, and most ripe. When coupled with good design and programming driven by the vision and values of local stakeholders, efforts to advance density can not only promote economic and social benefits but also help address urgent fiscal and environmental challenges facing many U.S. cities and metropolitan regions today.</p><p>Read more about our findings. (Jump link to PDF, page 12)</p>");

    dashboard(d3.select("#metro-dashboard").append("div").node());
  
  }


} //close main()


document.addEventListener("DOMContentLoaded", main);
