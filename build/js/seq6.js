import on_resize from './on_resize.js';
//import {county_counts} from './data.js';
import palette from '../../../js-modules/palette.js';

export default function seq6(container, i){

    //var data = county_counts.slice(0).filter(function(d){return d.naics != "00"}).sort(function(a,b){return d3.descending(a.p, b.p)});

    //one time setup
    var wrap = d3.select(container).classed("chart-view",true).style("background","#dddddd");

    var panel_number = wrap.append("p").classed("panel-number",true).text("Panel " + (i+1)).style("display","none");
    wrap.append("div").classed("sticky-chart-title",true).append("p").html("[variation within metro areas]");


    function redraw(){

        
    }

    //register resize callback. initialize
    on_resize(redraw, true);

    //set extent

    //redraw



    var views = [
        {
            text:["Looking within metro areas we see a similar pattern—that is, much of the job densification trends seemed to be driven by a small set of already-dense parts of metro areas. While 64 percent of metro areas with core urban counties saw an increase in perceived job density in such counties, just 25 percent of metro areas saw perceived job density increase in their exurban counties."],
            enter:function(){
                wrap.style("opacity",1);
            },
            step: function(s){

            },
            exit:function(){
                wrap.style("opacity",0.25);
            }
        },
        {
            text:["Need data for this [I don't have what I need to calculate the weighted averages]"]

        },
        {
            text: ["Increases in job density however were seldom as great as would be expected. For example, only 30 percent of metro areas with core urban counties saw greater-than-expected increases from 2004 to 2015, indicating that jobs tended to spread out to less-dense parts of these counties. "]
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