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
    sequence(container, [intro0], '<p>DEFINING TERMS</p>');


    sequence(container, [seq0, seq1], '<p id="group-seqs-1" class="meta-header meta-header-1"><span>Overall job density trends in metro America</span></p>');
    
    wrap.append("div").classed("sequence-wrap",true).append("div").classed("center-col",true)
        .append("p").html("Although metropolitan America as a whole saw a notable and greater-than-expected increase in job density, trends across individual metro areas varied considerably, and only a few saw greater-than-expected increases in job density.")

    
    sequence(container, [seq4, seq5, seq6, seq7], '<p id="group-seqs-2" class="meta-header meta-header-2"><span>Job density trends across metro America</span></p>');
  
    wrap.append("div").classed("sequence-wrap",true).append("div").classed("center-col",true).html("<p>This analysis sheds light on how the overall economy and different industry sectors are expressing a demand for place by tracking trends in density of jobs—one measure of economic activity—within and among America’s large metro areas from 2004 to 2015, a period of dramatic economic change.</p><p>Metropolitan America as a whole saw a large and greater-than-expected increase in the density of jobs, which strongly suggests that the overall demand for place—for density—rose over the period of our analysis. Yet this increase was driven in large part by a select group of sectors and by the core urban counties of a small set of especially large and dense metro areas. Indeed, our look within metros revealed that almost every large metro area exhibited both job densification and job sprawl across its counties, yielding a more polycentric pattern of development in most places than previous studies of the distribution job density have described.</p><p>In all, these findings reveal a growing demand for density in metropolitan America—but also that individual metro areas could be doing far better when it comes to embracing equitable and sustainable economic growth, and in turn setting the stage for the kind of transformative placemaking solutions to create places where more businesses and workers can thrive.</p>");

  
  }


} //close main()


document.addEventListener("DOMContentLoaded", main);
