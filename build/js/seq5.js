import on_resize from './on_resize.js';
import {sector_counts, sector_names} from './data.js';
import palette from '../../../js-modules/palette.js';

function seq5(container, i){

    var data = sector_counts.slice(0).filter(function(d){return d.naics != "00"}).sort(function(a,b){return d3.descending(a.p, b.p)});

    //one time setup
    var wrap = d3.select(container).classed("chart-view",true);

    wrap.append("div").classed("sticky-chart-title",true).append("p").html("Several sectors of the economy saw widespread increases in job density");

    var svg = wrap.append("div").style("margin","0px auto").append("svg").attr("viewBox", "0 0 320 240");

    var aspect = 2/3;
    var padding = {top:50, right:25, bottom: 5, left: 150 }

    var g_main = svg.append("g").attr("transform", "translate(" + padding.left + ", " + padding.top + ")")

    var g_x_axis = g_main.append("g").classed("axis-group",true);
    var g_back = g_main.append("g");
    var g_trend = g_main.append("g");
    
    var groups = g_trend.selectAll("g").data(data).enter().append("g");

    var rects = groups.selectAll("rect").data(function(d){return [d]})
                                .enter().append("rect").attr("height",10).attr("x","0").attr("y","0")
                                .attr("fill", palette.primary.blue).style("shape-rendering","crispEdges")
                                ;

    var scale_x = d3.scaleLinear().domain([0, 1]);
    var axis_x = d3.axisTop(scale_x).ticks(5).tickFormat(function(v){return Math.round(v*100)+"%"});


    var axis_title = svg.append("text").attr("y",20).attr("x", padding.left - 5);
    axis_title.append("tspan").text("% of metro areas where job density increased");

    var gridlines = g_back.selectAll("path").data(scale_x.ticks(5)).enter().append("path")
                        .attr("stroke", function(d){return d==0 ? "#aaaaaa" : "#dddddd"})
                        .style("shape-rendering","crispEdges");

    var group_labels = groups.append("text").text(function(d){return sector_names[d.naics]})
                              .attr("x", "0")
                              .attr("dx","-5")
                              .attr("dy","5").attr("text-anchor","end")
                              ;

    var group_h;

    function redraw(){
        var w = this.w < 320 ? 320 : (this.w > 800 ? 800 : this.w);
        var h = w * aspect;
        if(h < 400){h = 400};

        scale_x.range([0, w - padding.right - padding.left]);
        
        group_h = Math.floor((h-padding.top-padding.bottom)/data.length);
        var group_h2 = Math.floor(group_h/2) + 0.5;

        groups.interrupt().transition().duration(0).attr("transform", function(d,i){return "translate(0," + ((i*group_h)+group_h2) + ")"});

        svg.attr("viewBox", "0 0 " + w + " " + h);

        gridlines.attr("d", function(d){
            var x = Math.floor(scale_x(d))+0.5;
            return "M" + x + "," + "0" + " l0," + (h - padding.bottom);
        })

        axis_x(g_x_axis);

        var half_height = Math.floor(group_h/2);

        rects.attr("height", half_height).attr("width", function(d){return scale_x(d.p / d.n)});
        group_labels.attr("dy", half_height-2);
        
    }

    //register resize callback. initialize
    on_resize(redraw, true);

    //set extent

    //redraw


    var views = [
        {
            text:["Across the 94 large metro areas, six sectors of the economy saw widespread increases in perceived job density from 2004 to 2015. Health care led the way with increases in 72 metro areas while professional jobs rounded out the group with increases in 58."],
            enter:function(){
                wrap.style("opacity",1);
                groups.style("opacity", function(d,i){return i < 6 ? 1 : 0.25}); 
            },
            step: function(s){
                if(s > 0){
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
            },
            step: function(s){
                if(s > 0){
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

seq5.nviews = 2;

export default seq5;