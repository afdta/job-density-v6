import special_dims from './special_dims.js';
import {sector_counts, sector_names} from './data.js';
import palette from '../../../js-modules/palette.js';

function seq5(container, i){

    var data = sector_counts.slice(0).filter(function(d){return d.naics != "00"}).sort(function(a,b){return d3.descending(a.p, b.p)});

    //one time setup
    var wrap = d3.select(container).append("div").classed("chart-view",true);

    var title = wrap.append("div").classed("sticky-chart-title",true).append("p").html("Most sectors’ job density increases were driven by a minority of metro areas ");

    var svg = wrap.append("div").style("margin","0px auto").append("svg").attr("viewBox", "0 0 320 240");

    var aspect = 2/3;
    var padding = {top:55, right:25, bottom: 5, left: 165 }

    var g_main = svg.append("g").attr("transform", "translate(" + padding.left + ", " + padding.top + ")")

    var g_x_axis = g_main.append("g").classed("axis-group",true);
    var g_back = g_main.append("g");
    var g_trend = g_main.append("g");
    
    var groups = g_trend.selectAll("g").data(data).enter().append("g");

    var rects = groups.selectAll("rect").data(function(d){return [d]})
                                .enter().append("rect").attr("height",10).attr("x","0").attr("y","0")
                                .attr("fill", palette.job_density.darkblue).style("shape-rendering","crispEdges")
                                ;

    var scale_x = d3.scaleLinear().domain([0, 1]);
    var axis_x = d3.axisTop(scale_x).ticks(5).tickFormat(function(v){return Math.round(v*100)+"%"});

    var axis_title = svg.append("text").attr("y",15).attr("text-anchor","end").style("font-size","15px").style("fill","#555555");
    axis_title.append("tspan").text("% of metro areas where job density increased");

    var group_labels = groups.append("text").text(function(d){return sector_names[d.naics]})
                              .attr("x", "0")
                              .attr("dx","-5")
                              .attr("dy","5").attr("text-anchor","end")
                              ;

    var group_h;

    function redraw(){
        var wh = special_dims(this);
        var w = wh.w;
        var h = wh.h;

        scale_x.range([0, w - padding.right - padding.left]);
        
        group_h = Math.floor((h-padding.top-padding.bottom)/data.length);
        var group_h2 = Math.floor(group_h/2) + 0.5;

        groups.interrupt().transition().duration(0).attr("transform", function(d,i){return "translate(0," + ((i*group_h)+group_h2) + ")"});

        svg.attr("viewBox", "0 0 " + w + " " + h);

        var nticks = w < 500 ? 3 : 5;

        var gridlines_ = g_back.selectAll("path").data(scale_x.ticks(nticks));
        gridlines_.exit().remove();
        
        gridlines_.enter().append("path").merge(gridlines_)
            .attr("stroke", function(d){return d==0 ? "#aaaaaa" : "#dddddd"})
            .style("shape-rendering","crispEdges")
            .attr("d", function(d){
                var x = Math.floor(scale_x(d))+0.5;
                return "M" + x + "," + "0" + " l0," + (h - padding.bottom);
            });

        axis_x.ticks(nticks);
        axis_x(g_x_axis);

        axis_title.attr("x", 150 + scale_x(1));

        rects.attr("height", group_h2).attr("width", function(d){return scale_x(d.p / d.n)});
        group_labels.attr("dy", group_h2-2);
        
    }

    var current_view = null;

    function step(vn, s, c){

        if(c != "exit" && vn!== current_view){
            wrap.style("opacity",1);
            groups.style("opacity", function(d,i){
                var o = "1"
                if(vn == 0){o = "1"}
                else if(vn == 1){
                    return d.p >= 50 ? 1 : 0.25;
                }
                else if(vn == 2){
                    return d.naics == 51 || d.naics == 31 || d.naics == 48 ? 1 : 0.25;
                }
            });

            current_view = vn;
        }
    }


    var views = [
        {
            text:["In most sectors, the job density increases seen across metropolitan America as a whole were driven by a rather narrow set of metro areas."],
            step:function(s, c){step(0, s, c)},
            exit:function(){
                wrap.style("opacity",null);
                current_view = null;
            }
        },
        {
            text:["Across the 94 large metro areas, only two sectors of the economy saw widespread increases in perceived job density from 2004 to 2015. The density of jobs in the arts and entertainment and corporate headquarters sectors increased in 56 (or 60%) and 50 (53% of) metro areas, respectively."],
            step:function(s, c){step(1, s, c)}  
        },
        {
            text:["The 60% overall increase in the information sector’s job density across the 94 metro areas was driven largely by the increasing concentration of information jobs in a small number of large and dense metro areas, such as San Francisco, New York, and Seattle. Gains in job density were least widespread in the manufacturing and logistics sectors—less than 30 (or 30% of) metro areas saw job density increase in these sectors. "],
            step:function(s, c){step(2, s, c)}
        }
    ]

    return {views:views, resize:redraw};

}

export default seq5;