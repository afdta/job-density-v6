import on_resize from './on_resize.js';
import {county_counts} from './data.js';
import palette from '../../../js-modules/palette.js';
import pal from './pal.js';

function seq7(container, i){

    //one time setup
    var names = {TOTAL: "Total", UC: "Urban core", MS: "Mature suburb", ES: "Emerging suburb", EX: "Exurban"};
    var ordering = {TOTAL: "0", UC: "1", MS: "2", ES: "3", EX: "4"};

    var types = ["UC", "TOTAL", "MS", "ES", "EX"];
    var cols = pal(types);

    var data = county_counts.slice(0).sort(function(a, b){
        return ordering[a.type] - ordering[b.type];
    });


    //one time setup
    var wrap = d3.select(container).classed("chart-view",true);

    wrap.append("div").classed("sticky-chart-title",true).append("p").html("Job density trends varied within metro areas");

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
                                .attr("fill", function(d){return cols(d.type)}).style("shape-rendering","crispEdges")
                                ;

    var scale_x = d3.scaleLinear().domain([0, 1]);
    var axis_x = d3.axisTop(scale_x).ticks(5).tickFormat(function(v){return Math.round(v*100)+"%"});


    var axis_title = svg.append("text").attr("y",20).attr("x", padding.left - 5);
    axis_title.append("tspan").text("% of metro areas where job density increased");

    var gridlines = g_back.selectAll("path").data(scale_x.ticks(5)).enter().append("path")
                        .attr("stroke", function(d){return d==0 ? "#aaaaaa" : "#dddddd"})
                        .style("shape-rendering","crispEdges");

    var group_labels = groups.append("text").text(function(d){return names[d.type]})
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
        var group_h4 = Math.floor(group_h/4) + 0.5;

        groups.interrupt().transition().duration(0).attr("transform", function(d,i){return "translate(0," + ((i*group_h) + group_h4) + ")"});

        svg.attr("viewBox", "0 0 " + w + " " + h);

        gridlines.attr("d", function(d){
            var x = Math.floor(scale_x(d))+0.5;
            return "M" + x + "," + "0" + " l0," + (h - padding.bottom);
        })

        axis_x(g_x_axis);

        rects.attr("height", group_h2).attr("width", function(d){return scale_x(d.p / d.n)});
        group_labels.attr("dy", group_h2/1.5);
        
    }

    //register resize callback. initialize
    on_resize(redraw, true);

    //set extent

    //redraw


    var views = [
        {
            text:["Looking within metro areas we see a similar pattern—that is, job densification trends varied greatly within metro areas and seemed to be driven by a small set of already-dense parts of metro areas. While 64% of metro areas with core urban counties (where at least 95 percent of the residents live in urbanized areas) saw an increase in perceived job density in such counties, just 25% of metro areas saw perceived job density increase in their exurban counties (where less than 25 percent of residents live in urbanized areas)."],
            enter:function(){
                wrap.style("opacity",1);
                groups.style("opacity", function(d,i){return "1"}); 
            },
            step: function(s){
                if(s > 0){
                    groups.style("opacity", function(d,i){return "1"});
                }
            },
            exit:function(){
                wrap.style("opacity",0.25);
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

seq7.nviews = 2;

export default seq7;