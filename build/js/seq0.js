import on_resize from './on_resize.js';
import {seq0data} from './data.js';
import palette from '../../../js-modules/palette.js';
import pal from './pal.js';


function seq0(container, i){

    var wrap_ = d3.select(container).attr("id", "sequence-0").append("div");

    //one time setup
    var data = seq0data.changes;

    var wrap = wrap_.append("div").classed("chart-view",true);
    var title = wrap.append("div").classed("sticky-chart-title",true).append("p").html("Metropolitan America saw a large increase in job density from 2004 to 2015"); 
    
    var svg = wrap.append("div").style("max-width","900px").append("svg").attr("viewBox", "0 0 320 240");

    var g_y_axis = svg.append("g").classed("axis-group",true);
    var g_x_axis = svg.append("g").classed("axis-group",true);
    var g_back = svg.append("g");
    var g_trend = svg.append("g");
    var g_anno = svg.append("g");

    var names = {
        all:["94 metro areas"],
        all_expected:["Expected:","94 metro areas"],
        big4: ["New York", "Chicago", "San Francisco", "Seattle"],
        other: ["Other 90"]
    }

    var label_pos = {
        all:[2015, 0.3],
        all_expected:[2015, 0.2],
        big4:[2015, 0.4],
        other:[2015, 0.1]
    }

    var titles = {
        all:"Metropolitan America actually saw an even greater increase in job density from 2004 to 2015",
        all_expected:"Metropolitan America saw a greater increase in job density from 2004 to 2015",
        big4:"Four extremely dense metro areas fueled much of metropolitan America’s increasing job density from 2004 to 2015",
        other:"Other metro areas saw a smaller overall increase in job density from 2004 to 2015"       
    }

    //what lines to show when a given view code is selected
    var sequence = {
        all: {all_expected:1, all:1, big4:0.25, other:0.25},
        all_expected:{all_expected:1, all:0.25, big4:0.25, other:0.25},
        big4: {all_expected:1, all:1, big4:1, other:0.25},
        other: {all_expected:1, all:1, big4:1, other:1}
    }

    var t_ = g_anno.selectAll("g.text-group").data(["other", "all_expected", "all", "big4"]).enter().append("g").classed("text-group",true).style("opacity","0");
    var ts_ = t_.selectAll("text").data(function(d){return names[d]}).enter().append("text").attr("y", function(d,i){return i*16}).text(function(d){return d}).style("font-size","15px").attr("dy","8");

    function dmap(key_){
        var key = arguments.length == 0 || key_ == null ? "actual" : key_;
        return function(d){
            return {cbsa:d.cbsa, year:d.year, value:d[key]}
        }
    }
    var values = {
        big4: data["99998"].map(dmap()),
        all: data["99999"].map(dmap()),
        all_expected: data["99999"].map(dmap("expected")),
        other: data["99997"].map(dmap())
    }

    var codes = ["big4", "all", "all_expected", "other"];
    var cols = pal(codes);

    var lines = g_trend.selectAll("path").data(codes)
                       .enter().append("path")
                       .attr("stroke-width","3px")
                       .style("opacity","0")
                       .attr("fill","none")
                       .attr("stroke", function(d,i){
                           return cols(i);
                        })
                        .attr("stroke-dasharray", function(d,i){return d=="all_expected" ? "2,2" : null})
                        ;

    var great_recession = g_back.append("rect").attr("fill","#dddddd").style("opacity","0");
    
    var years = d3.range(2004, 2016)
    
    var scale_y = d3.scaleLinear().domain([0, 0.4]).nice();
    var scale_x = d3.scaleLinear().domain([2004, 2015]);

    var line = d3.line().x(function(d){return scale_x(d.year)})
                        .y(function(d){return scale_y(d.value)})
                        ;

    var axis_y = d3.axisLeft(scale_y).ticks(4, "+,.0%");
    var axis_x = d3.axisBottom(scale_x).tickValues([2005, 2007, 2009, 2011, 2013, 2015]).tickFormat(function(v){return v});

    var aspect = 2/3;
    var padding = {top:20, right:120, bottom: 40, left: 60 }

    function redraw(){
        var w = this.w < 320 ? 320 : (this.w > 900 ? 900 : this.w);
        var h = this.h - 300;
        //var h = w * aspect;
        if(h < 300){h = 300};

        svg.attr("viewBox", "0 0 " + w + " " + h);
        
        g_x_axis.attr("transform", "translate(0," + (h-padding.bottom) + ")");
        g_y_axis.attr("transform", "translate(" + (padding.left) + ",0)");

        scale_x.range([padding.left, w - padding.right]);
        scale_y.range([h - padding.bottom, 0 + padding.top]);

        t_.attr("transform", function(d,i){
            var xy = label_pos[d];
            var y = scale_y(xy[1]);
            var x = scale_x(xy[0]);
            return "translate(" + (x+3) + ", " + y + ")";
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

        lines.attr("d", function(d){return line(values[d])});

    }

    //register resize callback. initialize
    var redraw_ = on_resize(redraw, true);

    var current_view = null;

    function step(vn, s, c){
        if(c != "exit" && vn!== current_view){
            wrap.style("opacity",1);

            var seq = sequence[vn];

            lines.style("opacity", function(d,i){return seq[d]});
            t_.style("opacity", function(d,i){return seq[d]});
            
            great_recession.style("opacity", function(d,i){
                return "1";
            })

            title.text(titles[vn])
            
            current_view = vn;
        }
    }

    var views = [
        {
            text:["If metro areas’ job growth had accumulated according to where their existing jobs were located, we could have expected the 94 large metropolitan areas in our study to post an overall increase in job density of about 20% from 2004 to 2015."],
            step:function(s, c){step("all_expected", s, c)},
            exit:function(){
                lines.style("opacity","0");
                t_.style("opacity","0")
                current_view = null;
                wrap.style("opacity",null);
            }
        },
        {
            text:["These 94 large metro areas actually posted a greater-than-expected increase in job density of 30%, which suggests that job growth during this period disproportionately favored already-dense parts of metro areas."],
            step:function(s, c){step("all", s, c)},

        },

        {
            text:["Actual job density in these 94 metro areas increased more than 10% over the course of the Great Recession from 2007 to 2009, as suburban and exurban areas shed their jobs faster than denser urban areas. Job density increased steadily in the years following the recession."],
            step:function(s, c){step("all", s, c)},
        },

        {
            text:["The job density trends seen across these 94 metro areas were driven in large part by just four especially large and extremely dense metro areas: New York, Chicago, San Francisco, and Seattle. In fact, these four metro areas account for about 90% of the increase in job density seen among all 94 large metro areas during this period."],
            step:function(s, c){step("big4", s, c)}
        },

        {
            text:["In contrast, overall job density in the other 90 large metro areas increased only 9%."],
            step:function(s, c){step("other", s, c)}
        },


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

seq0.nviews = 5;

export default seq0;