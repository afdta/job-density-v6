import on_resize from './on_resize.js';
//import {county_counts} from './data.js';
import palette from '../../../js-modules/palette.js';

function seq6(container, i){

    //var data = county_counts.slice(0).filter(function(d){return d.naics != "00"}).sort(function(a,b){return d3.descending(a.p, b.p)});

    //one time setup
    var wrap = d3.select(container).classed("chart-view",true).style("background","#dddddd");

    wrap.append("div").classed("sticky-chart-title",true).append("p").html("Changes by county type");


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

seq6.nviews = 3;

export default seq6;