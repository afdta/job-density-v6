import on_resize from './on_resize.js';
import {seq0data} from './data.js';
import palette from '../../../js-modules/palette.js';

export default function seq0(container, i){

    var data = seq0data.changes["99999"];

    //one time setup
    var wrap = d3.select(container).classed("chart-view",true);

    wrap.append("div").classed("sticky-chart-title",true).append("p").html("Jobs in metropolitan America grew denser than expected from 2004 to 2015");

    var svg = wrap.append("div").style("max-width","800px").style("margin","0px auto").append("svg").attr("viewBox", "0 0 320 240");

    var g_y_axis = svg.append("g").classed("axis-group",true);
    var g_x_axis = svg.append("g").classed("axis-group",true);
    var g_back = svg.append("g");
    var g_trend = svg.append("g");

    var lines = g_trend.selectAll("path").data([data.map(function(d){return {year:d.year, change:d.expected} }), 
                                                data.map(function(d){return {year:d.year, change:d.actual  } })])
                                        .enter().append("path")
                                        .attr("stroke-width","2px")
                                        .style("opacity","0")
                                        .attr("fill","none")
                                        .attr("stroke", function(d,i){return i==0 ? palette.secondary.blue : palette.primary.blue})
                                        .attr("stroke-dasharray", function(d,i){return i==0 ? "3,3" : null});

    var line_expected = lines.filter(function(d,i){return i==0});
    var line_actual = lines.filter(function(d,i){return i==1});

    var great_recession = g_back.append("rect").attr("fill","#cccccc").style("opacity","0");
    
    var years = d3.range(2004, 2016)
    
    var min = d3.min(data.map(function(d){return Math.min(d.actual, d.expected)}));
    var max = d3.max(data.map(function(d){return Math.max(d.actual, d.expected)}));

    var scale_y = d3.scaleLinear().domain([min, max]).nice();
    var scale_x = d3.scaleLinear().domain([2004, 2015]);

    var line = d3.line().x(function(d){return scale_x(d.year)}).y(function(d){return scale_y(d.change)});

    var axis_y = d3.axisLeft(scale_y).ticks(4, "+,.0%");
    var axis_x = d3.axisBottom(scale_x).tickValues([2005, 2010, 2015]).tickFormat(function(v){return v});

    var aspect = 1/2;
    var padding = {top:20, right:25, bottom: 40, left: 60 }

    function redraw(){
        var w = this.w < 320 ? 320 : (this.w > 750 ? 750 : this.w);
        var h = w < 480 ? w : w * aspect;

        svg.attr("viewBox", "0 0 " + w + " " + h);
        
        g_x_axis.attr("transform", "translate(0," + (h-padding.bottom+5) + ")");
        g_y_axis.attr("transform", "translate(" + (padding.left-5) + ",0)");

        scale_x.range([padding.left, w - padding.right]);
        scale_y.range([h - padding.bottom, 0 + padding.top]);

        var grid_lines_ = g_back.selectAll("line").data(scale_y.ticks());
        grid_lines_.exit().remove();
        var grid_lines = grid_lines_.enter().append("line").merge(grid_lines_).attr("stroke-dasharray","2,4").attr("stroke","#ffffff")
                                            .attr("x1", scale_x(2004)-4).attr("x2", scale_x(2015))
                                            .attr("y1", function(d){return Math.floor(scale_y(d))+0.5})
                                            .attr("y2", function(d){return Math.floor(scale_y(d))+0.5})
                                            ;

        great_recession.attr("x", scale_x(2007)).attr("y", padding.top)
                       .attr("width", scale_x(2009) - scale_x(2007))
                       .attr("height", h - padding.top - padding.bottom + 5);

        axis_x(g_x_axis);
        axis_y(g_y_axis);

        lines.attr("d", function(d){return line(d)});

    }

    //register resize callback. initialize
    on_resize(redraw, true);

    //set extent

    //redraw


    var views = [
        {
            text:["[This is the change in job density we would have expected to see if each office and factory added jobs at its industry-wide average rate -- <em>trying for something plainspoken</em>]"],
            enter:function(){
                wrap.style("opacity",1);
                line_expected.style("opacity", 1);
                //console.log("enter blue");
            },
            exit:function(){
                line_expected.style("opacity", 0);
                //console.log("exit blue");
            }
        },

        {
            text:["[This is what we actually saw, indicating that new and existing jobs shifted to more dense locations within metro areas -- <em>again, plainspoken</em>]"],
            enter:function(){
                wrap.style("opacity",1);
                line_actual.style("opacity",1);
            },
            exit:function(){
                line_actual.style("opacity", 0);
            }
        }
    ]

    //static, non-scrollytelling
    if(arguments.length > 1){
        views[i].enter.call(wrap.append("p").html(views[i].text).node());
    }

    return views;

}