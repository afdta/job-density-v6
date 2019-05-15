import on_resize from './on_resize.js';
import {sector_data, sector_names} from './data.js';
import palette from '../../../js-modules/palette.js';

export default function seq1(container, i){

    //one time setup
    var wrap = d3.select(container).classed("chart-view",true).style("background-color","#dddddd");

    var panel_number = wrap.append("p").classed("panel-number",true).text("Panel " + (i+1)).style("display","none");
    wrap.append("div").classed("sticky-chart-title",true).append("p").html("Actual versus expected perceived job density [shift share graphic]");


    function redraw(){

        
    }

    //register resize callback. initialize
    on_resize(redraw, true);

    //set extent

    //redraw


    var views = [
        {
            text:["What we mean by expected job density"],
            enter:function(){
                wrap.style("opacity","1");
            },
            exit:function(){
                wrap.style("opacity",null);
            }
        },
        {
            text:["What this means intuitively: when expected density outpaces actual density change, the geographic distribution of jobs has shifted toward lower density areas."]
        },
        {
            text:["Example?"]
        }
    ]

    //static, non-scrollytelling
    if(arguments.length > 1){
        panel_number.style("display","block");
        var p = wrap.append("p").classed("chart-view-caption",true).html(views[i].text).node();
        var j = -1;
        while(++j <= i){
            if(views[j].hasOwnProperty("enter")){
                views[j].enter.call(p);
            }
            if(views[j].hasOwnProperty("step")){
                views[j].step.call(p, 1);
            }
        }
    }

    return views;

}