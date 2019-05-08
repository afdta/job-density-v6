import on_resize from './on_resize.js';
import {seq0data} from './data.js';
import palette from '../../../js-modules/palette.js';

export default function seq0(container, i){

    var data = seq0data.changes;

    //one time setup
    var wrap = d3.select(container).classed("chart-view",true);

    wrap.append("div").classed("sticky-chart-title",true).append("p").html("Metropolitan America saw a large increase in job density from 2004 to 2015");

    var svg = wrap.append("div").style("max-width","800px").style("margin","0px auto").append("svg").attr("viewBox", "0 0 320 240");

    var g_y_axis = svg.append("g").classed("axis-group",true);
    var g_x_axis = svg.append("g").classed("axis-group",true);
    var g_back = svg.append("g");
    var g_trend = svg.append("g");

    var lines = g_trend.selectAll("path").data(["99999", "99998", "99997"])
                       .enter().append("path")
                       .attr("stroke-width","2px")
                       .style("opacity","0")
                       .attr("fill","none")
                       .attr("stroke", function(d,i){return i==0 ? palette.primary.blue : i==1 ? palette.primary.yellow : palette.primary.green});

    var line_all = lines.filter(function(d,i){return i==0});
    var line_4 = lines.filter(function(d,i){return i==1});
    var line_other = lines.filter(function(d,i){return i==2});

    var great_recession = g_back.append("rect").attr("fill","#dddddd").style("opacity","0");
    
    var years = d3.range(2004, 2016)
    var all_data_extent = d3.extent(data["99999"].concat(data["99998"], data["99997"]), function(d){return d.actual});
    
    var scale_y = d3.scaleLinear().domain(all_data_extent).nice();
    var scale_x = d3.scaleLinear().domain([2004, 2015]);

    var line = d3.line().x(function(d){return scale_x(d.year)})
                        .y(function(d){return scale_y(d.actual)})
                        ;

    var axis_y = d3.axisLeft(scale_y).ticks(4, "+,.0%");
    var axis_x = d3.axisBottom(scale_x).tickValues([2005, 2010, 2015]).tickFormat(function(v){return v});

    var aspect = 1/2;
    var padding = {top:20, right:25, bottom: 40, left: 60 }

    function redraw(){
        var w = this.w < 320 ? 320 : (this.w > 750 ? 750 : this.w);
        var h = w < 480 ? w : w * aspect;

        svg.attr("viewBox", "0 0 " + w + " " + h);
        
        g_x_axis.attr("transform", "translate(0," + (h-padding.bottom) + ")");
        g_y_axis.attr("transform", "translate(" + (padding.left) + ",0)");

        scale_x.range([padding.left, w - padding.right]);
        scale_y.range([h - padding.bottom, 0 + padding.top]);

        console.log(scale_y.ticks(4));

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
                       .attr("height", h - padding.top - padding.bottom + 5);

        axis_x(g_x_axis);
        axis_y(g_y_axis);

        lines.attr("d", function(d){return line(data[d])});

    }

    //register resize callback. initialize
    on_resize(redraw, true);

    //set extent

    //redraw


    var views = [
        {
            text:["The perceived job density of all 94 large metro areas taken together increased nearly 30 percent, indicating job growth was highly concentrated in dense urban areas from 2004 to 2015."],
            enter:function(){
                wrap.style("opacity",1);
                line_all.style("opacity", 1);
                console.log("enter blue");
            },
            exit:function(){
                line_all.style("opacity", 0);
                console.log("exit blue");
            }
        },

        {
            text:["During the Great Recession from 2007 to 2009, the average perceived job density increased more than 10 percent as suburban and exurban areas shed their jobs faster than denser urban areas. Perceived job density has steadily increased since 2009."],
            enter:function(){
                wrap.style("opacity",1);
                great_recession.style("opacity",1);
                console.log("enter recession highlight");
            },
            exit:function(){
                great_recession.style("opacity",0);
                console.log("exit recession highlight");
            }
        },

        {
            text:["These overall trends in job density however were greatly influenced by a set of four extremely dense metro areas – New York, Chicago, San Francisco, and Seattle. These four metro areas saw an even greater increase in job density, accounting for about 90 percent of the increase in job density seen among all 94 large metro areas during this period."],
            enter:function(){
                wrap.style("opacity",1);
                line_4.style("opacity", 1);
                console.log("enter yellow");
            },
            exit:function(){
                line_4.style("opacity", 0);
                console.log("exit yellow");
            }
        },

        {
            text:["In contrast to job density trends in the four extremely dense metro areas, job density in the other 90 large metro areas increased only 9 percent on average.","However, these metro areas also show considerable variation in the direction and extent of changes in job density during this period."],
            enter:function(){
                wrap.style("opacity",1);
                line_other.style("opacity", 1);
                console.log("enter green");
            },
            step:function(s){

            },
            exit:function(){
                line_other.style("opacity", 0);
                console.log("exit green");
            }
        }
    ]

    //static, non-scrollytelling
    if(arguments.length > 1){
        views[i].enter.call(wrap.append("p").html(views[i].text).node());
    }

    return views;

}