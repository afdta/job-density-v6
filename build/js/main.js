import degradation from "../../../js-modules/degradation.js";

import scrolly from "../../../js-modules/d3-scrolly.js";

//main function
function main(){

  var container = document.getElementById("job-density-scrolly");
  var wrap = d3.select(container);
  var compat = degradation(container);

  var sticky = wrap.append("div").style("min-height","400px").style("border","1px solid pink");
  sticky.append("p").text("FIXED").style("text-align","center");

  var texts = wrap.selectAll("p.text-overlay").data(d3.range(0,25)).enter().append("p")
                  .text(Math.random()).style("min-height","100vh");

  //browser degradation
  if(compat.browser()){
    var scr = scrolly(sticky.node(), 140);

    if(scr.supported()){
      texts.each(function(){
        var thiz = d3.select(this).style("color", d3.interpolateRainbow(0)).style("font-size","18px");
        
        var fns = {
          enter: function(){
            thiz.transition().style("font-weight","bold").duration(1000);
          },
          step: function(s){
            var op = s + 0.25;
            thiz.style("color", d3.interpolateRainbow(s)).text(Math.round(s * 1000)/10 + "%");
          },
          exit: function(){
            thiz.transition().style("font-weight","normal").duration(1000);
          }
        }

        scr.marker(this, fns, 0.25)
      })
    }


  }


} //close main()


document.addEventListener("DOMContentLoaded", main);
