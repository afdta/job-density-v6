import on_resize from './on_resize.js';
import {sector_data, sector_names} from './data.js';
import palette from '../../../js-modules/palette.js';

export default function seq3(container, i){

    var data = sector_data["99999"].slice().sort(function(a,b){return d3.descending(a.actual, b.actual)});

    //one time setup
    var wrap = d3.select(container).classed("chart-view",true);

    wrap.append("div").classed("sticky-chart-title",true).append("p").html("Most sectors saw job density increase and exceeded expectations");

    var svg = wrap.append("div").style("max-width","800px").style("margin","0px auto").append("svg").attr("viewBox", "0 0 320 240");

    var g_x_axis = svg.append("g").classed("axis-group",true);
    var g_back = svg.append("g");
    var g_trend = svg.append("g");

    var groups = g_trend.selectAll("g").data(data).enter().append("g");

    var group_connectors = groups.append("line").style("shape-rendering","crispEdges")
                                                .attr("stroke", function(d){return d.actual < d.expected ? palette.secondary.orange : palette.secondary.blue})
                                                .attr("stroke-width","1px");
    var group_circles = groups.selectAll("circle").data(function(d){return [d.expected, d.actual]})
                                .enter().append("circle").attr("r",4.5)
                                .attr("fill",function(d,i){return i==0 ? "#ffffff" : palette.primary.blue})
                                .attr("stroke",function(d,i){return  i==0 ? palette.primary.blue : palette.primary.blue})
                                .attr("stroke-width","1.5px")
                                ;
    
    var min = d3.min(data.map(function(d){return Math.min(d.actual, d.expected)}));
    var max = d3.max(data.map(function(d){return Math.max(d.actual, d.expected)}));

    console.log(data);

    var scale_x = d3.scaleLinear().domain([min, max]).nice();
    var axis_x = d3.axisTop(scale_x).ticks(5, "+,.0%");

    var aspect = 2/3;
    var padding = {top:50, right:25, bottom: 5, left: 5 }

    function redraw(){
        var w = this.w < 320 ? 320 : (this.w > 800 ? 800 : this.w);
        var h = w * aspect;
        if(h < 400){h = 400};
        
        var group_h = Math.floor((h-padding.top-padding.bottom)/data.length);
        var group_h2 = Math.floor(group_h/2) + 0.5;
        groups.attr("transform", function(d,i){return "translate(0," + (i*group_h) + ")"});

        svg.attr("viewBox", "0 0 " + w + " " + h);
        
        g_x_axis.attr("transform", "translate(0," + padding.top + ")");
        g_trend.attr("transform", "translate(0," + padding.top + ")");

        scale_x.range([padding.left, w - padding.right]);

        axis_x(g_x_axis);

        //[expected, actual]
        group_circles.attr("cx", function(d,i){return i==0 ? scale_x(d) : scale_x(d)}).attr("cy", group_h2);
        group_connectors.attr("y1", group_h2).attr("y2", group_h2)
                        .attr("x1", function(d){return scale_x(d.expected)})
                        .attr("x2", function(d){return scale_x(d.actual)})
                        ;
    }

    //register resize callback. initialize
    on_resize(redraw, true);

    //set extent

    //redraw


    var views = [
        {
            text:["Only manufacturing and wholesale were expected to decline in density from 2004 to 2015"],
            enter:function(){
                console.log("step 1 enter");
                wrap.style("opacity","1");
                groups.style("opacity", function(d){return d.naics == "31" || d.naics == "42" ? "1" : "0.15"});
            },
            exit:function(){
                console.log("step 1 exit");
                groups.style("opacity","1");
            }
        },
        {
            text:["In the end, it was manufacturing and logistics which became less dense"],
            enter:function(){
                console.log("step 2 enter");
                wrap.style("opacity","1");
                groups.style("opacity", function(d){return d.naics == "31" || d.naics == "48" ? "1" : "0.15"});
            },
            exit:function(){
                console.log("step 2 exit");
                groups.style("opacity", function(d){return d.naics == "31" || d.naics == "42" ? "1" : "0.15"});
            }
        }
    ]

    //static, non-scrollytelling
    if(arguments.length > 1){
        views[i].enter.call(wrap.append("p").html(views[i].text).node());
    }

    return views;

}