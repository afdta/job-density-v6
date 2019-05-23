import on_resize from './on_resize.js';
import {seq0data, sector_data, sector_names} from './data.js';
import palette from '../../../js-modules/palette.js';

function setup_sectors(wrap_){
    var wrap = wrap_.append("div").classed("chart-view",true).style("position","absolute").style("top","0px").style("visibility","hidden");
    
    var title = wrap.append("div").classed("sticky-chart-title",true).append("p").html("Most sectors saw job density increase and exceeded expectations"); 

    var data = sector_data["99999"].slice(0).sort(function(a,b){return d3.descending(a.actual, b.actual)});

    var svg = wrap.append("div").style("max-width","800px").append("svg").attr("viewBox", "0 0 320 240");

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

    var scale_x = d3.scaleLinear().domain([-0.4, 0.6]).nice();
    var axis_x = d3.axisTop(scale_x).ticks(5, "+,.0%");

    var aspect = 2/3;
    var padding = {top:50, right:25, bottom: 5, left: 15 }

    var gridlines = g_back.selectAll("path").data(scale_x.ticks(5)).enter().append("path")
                        .attr("stroke", function(d){return d==0 ? "#aaaaaa" : "#dddddd"})
                        .style("shape-rendering","crispEdges");

    var group_labels = groups.append("text").text(function(d){return sector_names[d.naics]})
                              .attr("x", padding.left)
                              .attr("dx","-10")
                              .attr("dy","5").attr("text-anchor","end")
                              ;

    function redraw(){
        var w = this.w < 320 ? 320 : (this.w > 800 ? 800 : this.w);
        var h = this.h - 300;
        //var h = w * aspect;
        if(h < 400){h = 400};
        
        var group_h = Math.floor((h-padding.top-padding.bottom)/data.length);
        var group_h2 = Math.floor(group_h/2) + 0.5;
        groups.attr("transform", function(d,i){return "translate(0," + (i*group_h) + ")"});

        svg.attr("viewBox", "0 0 " + w + " " + h);
        
        g_x_axis.attr("transform", "translate(0," + padding.top + ")");
        g_trend.attr("transform", "translate(0," + padding.top + ")");

        scale_x.range([padding.left, w - padding.right]);

        gridlines.attr("d", function(d){
            var x = Math.floor(scale_x(d))+0.5;
            return "M" + x + "," + padding.top + " l0," + (h - padding.top - padding.bottom);
        })

        axis_x(g_x_axis);

        //[expected, actual]
        group_circles.attr("cx", function(d,i){return i==0 ? scale_x(d) : scale_x(d)}).attr("cy", group_h2);
        group_connectors.attr("y1", group_h2).attr("y2", group_h2)
                        .attr("x1", function(d){return scale_x(d.expected)})
                        .attr("x2", function(d){return scale_x(d.actual)})
                        ;

        group_labels.attr("y", group_h2)
                    .attr("x", function(d){
                        var min = Math.min(d.expected, d.actual);
                        return scale_x(min);
                    });
        
    }

    //register resize callback. initialize
    var redraw_ = on_resize(redraw, true);


    function step(n, s){
        wrap.style("opacity",1);
        if(n==0){
            groups.style("opacity", function(d){return d.naics == "31" || d.naics == "42" ? "1" : "0.15"});
        }
        else if(n==1){
            groups.style("opacity", function(d){return d.naics == "31" || d.naics == "48" ? "1" : "0.15"});
        }
        else if(n==2){
            groups.style("opacity", function(d){ return d.actual > d.expected ? "1" : "0.15"});
        }
        else if(n==3){
            groups.style("opacity", function(d){ return d.actual < d.expected ? "1" : "0.15"});
        }
    }


    return {
        step: step,
        enter: function(){
            redraw_();
            wrap.style("position","relative").style("visibility","visible");
        },
        exit: function(){
            wrap.style("position","absolute").style("visibility","hidden").style("top","0px");
        }
    };


}


function setup_lines(wrap_){
    var data = seq0data.changes;

    var wrap = wrap_.append("div").classed("chart-view",true);
    var title = wrap.append("div").classed("sticky-chart-title",true).append("p").html("Metropolitan America saw a large increase in job density from 2004 to 2015"); 
    
    var svg = wrap.append("div").style("max-width","800px").append("svg").attr("viewBox", "0 0 320 240");

    var g_y_axis = svg.append("g").classed("axis-group",true);
    var g_x_axis = svg.append("g").classed("axis-group",true);
    var g_back = svg.append("g");
    var g_trend = svg.append("g");
    var g_anno = svg.append("g");

    var t_ = g_anno.selectAll("g.text-group").data([["94 metro areas"], ["New York", "Chicago", "San Francisco", "Seattle"], ["Other 90"], ["Expected:","94 metro areas"]])
                                             .enter().append("g").classed("text-group",true).style("opacity","0");
    var ts_ = t_.selectAll("text").data(function(d){return d}).enter().append("text").attr("y", function(d,i){return i*16}).text(function(d){return d}).style("font-size","15px").attr("dy","8");

    function dmap(key_){
        var key = arguments.length == 0 || key_ == null ? "actual" : key_;
        return function(d){
            return {cbsa:d.cbsa, year:d.year, value:d[key]}
        }
    }
    var values = [
        data["99999"].map(dmap()),
        data["99998"].map(dmap()),
        data["99997"].map(dmap()),
        data["99999"].map(dmap("expected")),
    ]

    var lines = g_trend.selectAll("path").data(values)
                       .enter().append("path")
                       .attr("stroke-width","2px")
                       .style("opacity","0")
                       .attr("fill","none")
                       .attr("stroke", function(d,i){
                           return i==0 || i==3 ? palette.primary.blue : i==1 ? palette.primary.yellow : palette.primary.green
                        })
                        .attr("stroke-dasharray", function(d,i){return i==3 ? "2,2" : null})
                        ;

    var great_recession = g_back.append("rect").attr("fill","#dddddd").style("opacity","0");
    
    var years = d3.range(2004, 2016)
    
    var scale_y = d3.scaleLinear().domain([0, 0.4]).nice();
    var scale_x = d3.scaleLinear().domain([2004, 2015]);

    var line = d3.line().x(function(d){return scale_x(d.year)})
                        .y(function(d){return scale_y(d.value)})
                        ;

    var axis_y = d3.axisLeft(scale_y).ticks(4, "+,.0%");
    var axis_x = d3.axisBottom(scale_x).tickValues([2005, 2010, 2015]).tickFormat(function(v){return v});

    var aspect = 2/3;
    var padding = {top:20, right:125, bottom: 40, left: 60 }

    function redraw(){
        var w = this.w < 320 ? 320 : (this.w > 800 ? 800 : this.w);
        var h = this.h - 300;
        //var h = w * aspect;
        if(h < 400){h = 400};

        svg.attr("viewBox", "0 0 " + w + " " + h);
        
        g_x_axis.attr("transform", "translate(0," + (h-padding.bottom) + ")");
        g_y_axis.attr("transform", "translate(" + (padding.left) + ",0)");

        scale_x.range([padding.left, w - padding.right]);
        scale_y.range([h - padding.bottom, 0 + padding.top]);

        t_.attr("transform", function(d,i){
            var v;
            if(i == 0){v = 0.3}
            else if(i == 1){v = 0.4}
            else if(i == 2){v = 0.1}
            else if(i == 3){v = 0.2};

            var y = scale_y(v);
            return "translate(" + (w-padding.right+3) + ", " + y + ")";
        });

        var grid_lines_ = g_back.selectAll("line").data(scale_y.ticks(4));
        grid_lines_.exit().remove();
        var grid_lines = grid_lines_.enter().append("line").merge(grid_lines_).attr("stroke","#bbbbbb")
                                            .attr("x1", scale_x(2004)-4).attr("x2", scale_x(2015))
                                            .attr("y1", function(d){return Math.floor(scale_y(d))+0.5})
                                            .attr("y2", function(d){return Math.floor(scale_y(d))+0.5})
                                            .style("shape-rendering","crispEdges")
                                            ;

        great_recession.attr("x", scale_x(2007)).attr("y", padding.top)
                       .attr("width", scale_x(2009) - scale_x(2007))
                       .attr("height", h - padding.top - padding.bottom);

        axis_x(g_x_axis);
        axis_y(g_y_axis);

        lines.attr("d", function(d){return line(d)});

    }

    //register resize callback. initialize
    var redraw_ = on_resize(redraw, true);

    function step(n, s){
        console.log("step " + n);
        wrap.style("opacity",1);
        lines.style("opacity", function(d,i){
            if(n !== 3){
                return i <= n ? "1" : "0";
            }
            else{
                return i == n ? "1" : "0.25";
            }
        });
        t_.style("opacity", function(d,i){
            if(n !== 3){
                return i <= n ? "1" : "0";
            }
            else{
                return i == n ? "1" : "0.25";
            }
        });
        great_recession.style("opacity", function(d,i){
            return n > 0 ? "1" : "0";
        })

        if(n == 0){title.text("Metropolitan America saw a large increase in job density from 2004 to 2015")}
        else if(n == 0.5){title.text("Great Recession headline ...")}
        else if(n == 1){title.text("Very dense places headline")}
        else if(n == 2){title.text("Other places headline")}
        else if(n == 3){title.text("Actual density increased greater than expected in the 94 metro areas [headline tk]")}
    }


    return {
        step: step,
        enter: function(){
            redraw_();
            wrap.style("opacity","1");
        },
        exit: function(){
            lines.style("opacity","0");
            t_.style("opacity","0");
            wrap.style("opacity",null);
        },
        show: function(){
            wrap.style("position","relative").style("visibility","visible");
        },
        hide: function(){
            wrap.style("position","absolute").style("visibility","hidden").style("top","0px");
        }
    };
}

export default function seq0(container, i){

    var wrap = d3.select(container).attr("id", "sequence-0").append("div").style("position","relative");
    wrap.append("p").classed("meta-header meta-header-1", true).html("<span>Average changes in job density</span>")

    //one time setup
    var lines = setup_lines(wrap);
    var sectors = setup_sectors(wrap);


    var current_view = null;
    function show_view(n, s, step_code){
        if(step_code != "exit" && n !== current_view){
            
        
            if(current_view < 4){
                lines.step(n, s);
            }
            else{
                sectors.step(n-4, s);
            }


            current_view = n;

        }
    }


    var views = [
        {
            text:["The perceived job density of all 94 large metro areas taken together increased nearly 30 percent, indicating job growth was highly concentrated in dense urban areas from 2004 to 2015."],
            step:function(s, c){show_view(0, s, c)},
            enter: function(){
                lines.enter();
            },
            exit:function(){
                lines.exit();
                current_view = null;
            }
        },

        {
            text:["During the Great Recession from 2007 to 2009, the average perceived job density increased more than 10 percent as suburban and exurban areas shed their jobs faster than denser urban areas. Perceived job density has steadily increased since 2009."],
            step:function(s, c){show_view(0.5, s, c)},
        },

        {
            text:["These overall trends in job density however were greatly influenced by a set of four extremely dense metro areas – New York, Chicago, San Francisco, and Seattle."],
            step:function(s, c){show_view(1, s, c)}
        },

        {
            text:["In contrast, job density in the other 90 large metro areas increased only 9 percent on average. However, these metro areas also show considerable variation in the direction and extent of changes in job density during this period."],
            step:function(s, c){show_view(2, s, c)}
        },

        {
            text:["This is the expected change in job density—what we would have expected to see if each office and factory added jobs at its industry-wide average rate"],
            step:function(s, c){show_view(3, s, c)}
        },

        {
            text:['Only manufacturing and wholesale were expected to decline in density from 2004 to 2015'],
            enter:function(){
                lines.hide();
                lines.exit();
                sectors.enter();
            },
            step:function(s, c){show_view(4, s, c)},
            exit:function(){
                lines.show();
                lines.enter();
                sectors.exit();
            }
        },
        {
            text:["In the end, it was manufacturing and logistics which became less dense"],
            step:function(s, c){show_view(5, s, c)},
        },
        {
            text: ["12 of 16 major sectors of the economy actually saw greater-than-expected increases in job density"],
            step:function(s, c){show_view(6, s, c)},
        },
        {
            text: ["While four saw perceived job density change by less than expected."],
            step:function(s, c){show_view(7, s, c)},
        }

    ]

    //static, non-scrollytelling
    if(arguments.length > 1){
        //panel_number.style("display","block");
        //var p = wrap.append("p").classed("chart-view-caption",true).html(views[i].text).node();
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