import on_resize from './on_resize.js';
import {county_trend} from './data.js';

import pal from './pal.js';

function seq6(container, i){

    var wrap_ = d3.select(container).attr("id", "sequence-0").append("div");

    var titles = {
        TOTAL:"ALL 94",
        UC:"Urban core",
        MS:"Mature suburbs",
        ES:"Emergins suburbs",
        EX:"Exurbia!"
    }

    //what lines to show when a given view code is selected

    var sequence = {
        TOTAL: {TOTAL:1, UC:0.25, MS: 0.25, ES:0.25, EX:0.25},
        UC:{TOTAL:1, UC:1, MS: 0.25, ES:0.25, EX:0.25},
        MS:{TOTAL:1, UC:1, MS: 1, ES:0.25, EX:0.25},
        ES:{TOTAL:1, UC:1, MS: 1, ES:1, EX:0.25},
        EX:{TOTAL:1, UC:1, MS: 1, ES:1, EX:1},
    }

    //one time setup
    var types = ["UC", "TOTAL", "MS", "ES", "EX"];
    var names = {TOTAL: "Total", UC: "Urban core", MS: "Mature suburb", ES: "Emerging suburb", EX: "Exurban"};
    var pchanges = {TOTAL: 0.295310915, UC: 0.327477276, MS: 0.138150200, ES: 0.055588711, EX: -0.182804719};

    var cols = pal(types);

    var wrap = wrap_.append("div").classed("chart-view",true);
    var title = wrap.append("div").classed("sticky-chart-title",true).append("p").html("TITLE"); 
    
    var svg = wrap.append("div").style("max-width","900px").append("svg").attr("viewBox", "0 0 320 240");

    var g_y_axis = svg.append("g").classed("axis-group",true);
    var g_x_axis = svg.append("g").classed("axis-group",true);
    var g_back = svg.append("g");
    var g_trend = svg.append("g");
    var g_anno = svg.append("g");

    var t_ = g_anno.selectAll("text").data(["TOTAL", "UC", "MS", "ES", "EX"]).enter().append("text").style("opacity","0")
                                                .text(function(d){return names[d]}).style("font-size","15px").attr("dy","8")


    var lines = g_trend.selectAll("path").data(types)
                       .enter().append("path")
                       .attr("stroke-width","2px")
                       .style("opacity","0")
                       .attr("fill","none")
                       .attr("stroke", function(d,i){return cols(d)})
                        ;

    var great_recession = g_back.append("rect").attr("fill","#dddddd").style("opacity","1");
    
    var years = d3.range(2004, 2016)
    
    var scale_y = d3.scaleLinear().domain([-0.2, 0.4]).nice();
    var scale_x = d3.scaleLinear().domain([2004, 2015]);

    var line = d3.line().x(function(d){return scale_x(d.year)})
                        .y(function(d){return scale_y(d.value)})
                        ;

    var axis_y = d3.axisLeft(scale_y).ticks(4, "+,.0%");
    var axis_x = d3.axisBottom(scale_x).tickValues([2005, 2007, 2009, 2011, 2013, 2015]).tickFormat(function(v){return v});

    var aspect = 2/3;
    var padding = {top:20, right:120, bottom: 40, left: 60 }

    function redraw(){
        var w = this.vw < 320 ? 320 : (this.vw > 900 ? 900 : this.vw);
        var h = this.gh - 250;
        if(h < 200){h = 200};
        w = w - 30;

        svg.attr("viewBox", "0 0 " + w + " " + h);
        
        g_x_axis.attr("transform", "translate(0," + (h-padding.bottom) + ")");
        g_y_axis.attr("transform", "translate(" + (padding.left) + ",0)");

        scale_x.range([padding.left, w - padding.right]);
        scale_y.range([h - padding.bottom, 0 + padding.top]);

        t_.attr("y", function(d){
            return scale_y(pchanges[d]);
        })
        .attr("x", function(d){
            return scale_x(2015);
        });
        ;

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

        lines.attr("d", function(d){return line(county_trend[d])});

    }

    var current_view = null;

    function step(vn, s, c){

        if(c != "exit" && vn!== current_view){
            wrap.style("opacity",1);

            var seq = sequence[vn];

            lines.style("opacity", function(d,i){return seq[d]});
            t_.style("opacity", function(d,i){return seq[d]});
            
            title.text(titles[vn])
            
            current_view = vn;
        }
    }

    var views = [
        {
            text:["All 94"],
            step:function(s, c){step("TOTAL", s, c)},
            exit:function(){
                lines.style("opacity","0");
                t_.style("opacity","0")
                current_view = null;
                wrap.style("opacity",null);
            }
        },
        {
            text:["Urban core"],
            step:function(s, c){step("UC", s, c)}
        },

        {
            text:["Mature suburbs"],
            step:function(s, c){step("MS", s, c)}
        },

        {
            text:["Emerging suburbs"],
            step:function(s, c){step("ES", s, c)}
        },

        {
            text:["Exurbia!"],
            step:function(s, c){step("EX", s, c)}
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

    return {views:views, resize:redraw};

}

seq6.nviews = 5;

export default seq6;