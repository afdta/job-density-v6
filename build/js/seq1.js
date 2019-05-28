import on_resize from './on_resize.js';
import {sector_data, sector_names} from './data.js';
import palette from '../../../js-modules/palette.js';


function seq1(container, i){

    var wrap_ = d3.select(container).attr("id", "sequence-1").append("div");

    //one time setup
    var wrap = wrap_.append("div").classed("chart-view",true);
    
    var title = wrap.append("div").classed("sticky-chart-title",true).append("p").html("Most sectors saw job density increase from 2004 to 2015"); 

    var data = sector_data["99999"].slice(0).sort(function(a,b){return d3.descending(a.expected, b.expected)});

    var svg = wrap.append("div").append("svg").attr("viewBox", "0 0 320 240");

    var aspect = 2/3;
    var padding = {top:50, right:25, bottom: 5, left: 150}

    var g_main = svg.append("g").attr("transform","translate("+ padding.left + "," +padding.top + ")");
    var g_x_axis = g_main.append("g").classed("axis-group",true);
    var g_back = g_main.append("g");
    var g_trend = g_main.append("g");

    var groups = g_trend.selectAll("g").data(data).enter().append("g");

    var group_connectors = groups.append("line").style("shape-rendering","crispEdges")
                                .attr("stroke", function(d){return d.expected > d.actual ? palette.secondary.orange : palette.secondary.blue})
                                .attr("stroke-width","1px")
                                ;

    var group_circles = groups.selectAll("circle").data(function(d){return [d, d]})
                .enter().append("circle").attr("r",4.5).attr("cx","0").attr("cy","0")
                .attr("fill", function(d,i){return i==1 ? "#ffffff" : palette.primary.blue})
                .attr("stroke", function(d,i){return i==1 ? palette.primary.blue : palette.primary.blue})
                .attr("stroke-width","1.5px")
                ;
    
    var min = d3.min(data.map(function(d){return Math.min(d.actual, d.expected)}));
    var max = d3.max(data.map(function(d){return Math.max(d.actual, d.expected)}));

    var scale_x = d3.scaleLinear().domain([-0.4, 0.6]).nice();
    var axis_x = d3.axisTop(scale_x).ticks(5, "+,.0%");

    var gridlines = g_back.selectAll("path").data(scale_x.ticks(5)).enter().append("path")
                        .attr("stroke", function(d){return d==0 ? "#aaaaaa" : "#dddddd"})
                        .style("shape-rendering","crispEdges");

    var group_labels = groups.append("text").text(function(d){return sector_names[d.naics]})
                              .attr("x","0").attr("y","0")
                              .attr("dx","-5")
                              .attr("dy","5").attr("text-anchor","end")
                              ;

    var group_h = 20;


    var group_shown = "expected";

    function show_just_expected(){
        group_shown = "expected";
        group_circles.interrupt().transition().duration(1000)
                    .attr("cx", function(d,i){return scale_x(d.expected)})
                    .style("opacity", function(d,i){return i==1 ? "1" : "0"})
                    ;

        group_connectors.interrupt().transition().duration(1000)
                    .attr("x1", function(d){return scale_x(d.expected)})
                    .attr("x2", function(d){return scale_x(d.expected)})
    }

    function show_actual(){
        group_shown = "actual";
        group_circles.style("opacity", "1")
                    .interrupt().transition().duration(1000)
                    .attr("cx", function(d,i){return i==1 ? scale_x(d.expected) : scale_x(d.actual)})
                    ;

        group_connectors.interrupt().transition().duration(1000)
                    .attr("x1", function(d){return scale_x(d.actual)})
                    .attr("x2", function(d){return scale_x(d.expected)})
    }


    /*function translate(d,i){
        var v = d[current_value_prop];
        var x = scale_x(v);
        var y = (i*group_h) + (group_h/2);
        return "translate(" + x + "," + y + ")";
    }

    function show_actual(){
        current_value_prop = "actual";
        groups.interrupt().transition().duration(1200).attr("transform", translate);
        group_connectors.interrupt()
                        .transition().duration(1200)
                        .attr("x2","0");
    }

    function show_expected(){
        current_value_prop = "expected";
        groups.interrupt().transition().duration(1200).attr("transform", translate);
        group_connectors.interrupt()
                        .attr("x1", "0").attr("x2", "0").style("opacity","1")
                        .transition().duration(1200)
                        .attr("x2", function(d){return (scale_x(d.actual) - scale_x(d.expected))})
                        //.on("end", function(d){d3.select(this).style("opacity","0")})                        
                        ;
    }
    */

    function redraw(){
        var w = this.w < 320 ? 320 : (this.w > 900 ? 900 : this.w);
        var h = this.h - 300;
        //var h = w * aspect;
        if(h < 400){h = 400};

        scale_x.range([0, w - padding.right - padding.left]);
        
        group_h = Math.floor((h-padding.top-padding.bottom)/data.length);
        var group_h2 = Math.floor(group_h/2);

        groups.interrupt().transition().duration(0).attr("transform", function(d,i){return "translate(0," + ((i*group_h)+group_h2) + ")"});

        svg.attr("viewBox", "0 0 " + w + " " + h);

        gridlines.attr("d", function(d){
            var x = Math.floor(scale_x(d))+0.5;
            return "M" + x + ",0 l0," + (h - padding.top - padding.bottom);
        })

        axis_x(g_x_axis);
        
        group_connectors.attr("y1", 0).attr("y2", 0)
                        .attr("x1", "0")
                        .attr("x2", "0")
                        ;

        if(group_shown == "expected"){
            show_just_expected();
        }
        else{
            show_actual();
        }
        
    }    

    //register resize callback. initialize
    var redraw_ = on_resize(redraw, true);

    var current_view = null;

    function step(n, s, c){
        if(c != "exit" && n!== current_view){
            wrap.style("opacity",1);
            if(n==0){
                title.html("Most sectors saw job density increase from 2004 to 2015"); 
                groups.style("opacity","1");
                show_just_expected();
            }
            else if(n==1){
                title.html("Most sectors saw job density increase from 2004 to 2015"); 
                show_just_expected();
                groups.style("opacity", function(d){return d.actual > 0.4 ? "1" : "0.15"});
            }
            else if(n==2){
                title.html("Expected job density change from 2004 to 2015"); 
                show_actual();
                groups.style("opacity", "1");
            }
            else if(n==3){
                //groups.style("opacity", function(d){ return d.actual < d.expected ? "1" : "0.15"});
            }

            current_view = n;
        }
    }




    var views = [
        {
            text:["All but two sectors saw job density increas... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a maximus quam. Integer suscipit tempor justo. Nullam a metus augue. Phasellus sit amet turpis ac."],
            step:function(s, c){step(0, s, c)},
            exit:function(){
                current_view = null;
                wrap.style("opacity",null);
            }
        },
        {
            text:["Four sectors ..."],
            step:function(s, c){step(1, s, c)},
        },
        {
            text:["In most sectors, the expected change in job density was less than the actual change."],
            step:function(s, c){step(2, s, c)},
        }
    ]

    //static, non-scrollytelling
    if(arguments.length > 1){
        //panel_number.style("display","block");
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

seq1.nviews = 3;

export default seq1;