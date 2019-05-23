import on_resize from './on_resize.js';
import {sector_counts, sector_names} from './data.js';
import palette from '../../../js-modules/palette.js';

export default function seq5(container, i){

    var data = sector_counts.slice(0).filter(function(d){return d.naics != "00"}).sort(function(a,b){return d3.descending(a.p, b.p)});

    //one time setup
    var wrap = d3.select(container).classed("chart-view",true);
    wrap.append("p").classed("meta-header meta-header-2", true).html("<span>Job density across metro America</span>")

    var panel_number = wrap.append("p").classed("panel-number",true).text("Panel " + (i+1)).style("display","none");
    wrap.append("div").classed("sticky-chart-title",true).append("p").html("Several sectors of the economy saw widespread increases in job density");

    var svg = wrap.append("div").style("max-width","800px").style("margin","0px auto").append("svg").attr("viewBox", "0 0 320 240");

    var g_x_axis = svg.append("g").classed("axis-group",true);
    var g_back = svg.append("g");
    var g_trend = svg.append("g");

    var groups = g_trend.selectAll("g").data(data).enter().append("g");

    var group_connectors = groups.append("line").style("shape-rendering","crispEdges")
                                                .attr("stroke", function(d){return d.ge < d.p ? palette.secondary.orange : palette.secondary.blue})
                                                .attr("stroke-width","1px")
                                                ;

    var group_circles = groups.selectAll("circle").data(function(d){return [d]})
                                .enter().append("circle").attr("r",4.5).attr("cx","0").attr("cy","0")
                                .attr("fill",function(d,i){return i==0 ? palette.primary.blue : palette.primary.blue})
                                .attr("stroke",function(d,i){return  i==0 ? palette.primary.blue : palette.primary.blue})
                                .attr("stroke-width","1.5px")
                                ;

    var scale_x = d3.scaleLinear().domain([0, 94]);
    var axis_x = d3.axisTop(scale_x).ticks(5).tickFormat(function(v){return v});

    var aspect = 2/3;
    var padding = {top:50, right:25, bottom: 5, left: 105 }
    var axis_title = svg.append("text").attr("y",20).attr("x",padding.left-5);
    axis_title.append("tspan").text("Number of metro areas");
    //axis_title.append("tspan").text(" where job density growth exceeded expectations");


    var gridlines = g_back.selectAll("path").data(scale_x.ticks(5)).enter().append("path")
                        .attr("stroke", function(d){return d==0 ? "#aaaaaa" : "#dddddd"})
                        .style("shape-rendering","crispEdges");

    var group_labels = groups.append("text").text(function(d){return sector_names[d.naics]})
                              .attr("x", "0")
                              .attr("dx","-10")
                              .attr("dy","5").attr("text-anchor","end")
                              ;

    var current_value_prop = "p";
    var group_h;
    var translate = function(d,i){
        var v = d[current_value_prop];
        var x = scale_x(v);
        var y = (i*group_h) + (group_h/2);
        return "translate(" + x + "," + y + ")";
    }

    function redraw(){
        var w = this.w < 320 ? 320 : (this.w > 800 ? 800 : this.w);
        var h = w * aspect;
        if(h < 400){h = 400};

        scale_x.range([padding.left, w - padding.right]);
        
        group_h = Math.floor((h-padding.top-padding.bottom)/data.length);

        groups.interrupt().transition().duration(0).attr("transform", translate);

        svg.attr("viewBox", "0 0 " + w + " " + h);
        
        g_x_axis.attr("transform", "translate(0," + padding.top + ")");
        g_trend.attr("transform", "translate(0," + padding.top + ")");

        gridlines.attr("d", function(d){
            var x = Math.floor(scale_x(d))+0.5;
            return "M" + x + "," + padding.top + " l0," + (h - padding.top - padding.bottom);
        })

        axis_x(g_x_axis);

        //[expected, actual]
        //group_circles.attr("cx", function(d,i){return i==0 ? scale_x(d) : scale_x(d)}).attr("cy", group_h2);
        
        group_connectors.attr("y1", 0).attr("y2", 0)
                        .attr("x1", "0")
                        .attr("x2", "0")
                        ;

        //group_labels.attr("y", group_h2)
        //            .attr("x", label_x);
        
    }

    //register resize callback. initialize
    on_resize(redraw, true);

    //set extent

    //redraw

    function show_p(){
        current_value_prop = "p";
        groups.interrupt().transition().duration(1200).attr("transform", translate);
        group_connectors.interrupt()
                        .transition().duration(1200)
                        .attr("x2","0");
    }

    function show_ge(){
        current_value_prop = "ge";
        groups.interrupt().transition().duration(1200).attr("transform", translate);
        group_connectors.interrupt()
                        .attr("x1", "0").attr("x2", "0").style("opacity","1")
                        .transition().duration(1200)
                        .attr("x2", function(d){return (scale_x(d.p) - scale_x(d.ge))})
                        .on("end", function(d){d3.select(this).style("opacity","0")})                        
                        ;
    }


    var views = [
        {
            text:["Across the 94 large metro areas, six sectors of the economy saw widespread increases in perceived job density from 2004 to 2015. Health care led the way with increases in 72 metro areas while professional jobs rounded out the group with increases in 58."],
            enter:function(){
                wrap.style("opacity",1);
                groups.style("opacity", function(d,i){return i < 6 ? 1 : 0.25});
                show_p();  
            },
            step: function(s){
                if(s > 0 && current_value_prop != "p"){
                    show_p();
                    groups.style("opacity", function(d,i){return i < 6 ? 1 : 0.25});
                }
            },
            exit:function(){
                wrap.style("opacity",0.25);
            }
        },
        {
            text:["Gains in job density were least widespread in manufacturing, local services, and information—less than 20 metro areas saw increases in density in these sectors."],
            enter:function(){
                groups.style("opacity", function(d,i){return i > 12 ? 1 : 0.25});
                show_p();  
            },
            step: function(s){
                if(s > 0 && current_value_prop != "p"){
                    show_p();
                    groups.style("opacity", function(d,i){return i > 12 ? 1 : 0.25});
                }
            },
            exit:function(){
            }
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