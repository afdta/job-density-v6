import special_dims from './special_dims.js';
import {county_counts} from './data.js';
import pal from './pal.js';
import palette from '../../../js-modules/palette.js';

function seq7(container, i){

    //one time setup
    var names = {TOTAL: "Total", UC: "Core urban", MS: "Mature suburban", ES: "Emerging suburban", EX: "Exurban"};
    var ordering = {TOTAL: 4, UC: 0, MS: 1, ES: 2, EX: 3};

    var types = ["UC", "TOTAL", "MS", "ES", "EX"];
    var cols = pal(types);

    var data = county_counts.slice(0).sort(function(a, b){
        return ordering[a.type] - ordering[b.type];
    });


    //one time setup
    var wrap = d3.select(container).append("div").classed("chart-view",true);

    wrap.append("div").classed("sticky-chart-title",true).append("p").html("Job densification trends varied among counties of similar levels of urbanization across metro areas");

    var svg = wrap.append("div").style("margin","0px auto").append("svg").attr("viewBox", "0 0 320 240");

    var aspect = 2/3;
    var padding = {top:55, right:25, bottom: 5, left: 165 }

    var g_main = svg.append("g").attr("transform", "translate(" + padding.left + ", " + padding.top + ")")

    var g_x_axis = g_main.append("g").classed("axis-group",true);
    var g_back = g_main.append("g");
    var g_trend = g_main.append("g");
    
    var groups = g_trend.selectAll("g").data(data).enter().append("g");

    var rects = groups.selectAll("rect").data(function(d){return [d]})
                                .enter().append("rect").attr("height",10).attr("x","0").attr("y","0")
                                .style("shape-rendering","crispEdges")
                                .attr("fill", palette.job_density.darkblue)
                                ;

    var scale_x = d3.scaleLinear().domain([0, 1]);
    var axis_x = d3.axisTop(scale_x).ticks(5).tickFormat(function(v){return Math.round(v*100)+"%"});


    var axis_title = svg.append("text").attr("y",15).attr("text-anchor","end").style("font-size","15px").style("fill","#555555");
    axis_title.append("tspan").text("% of metro areas where job density increased");

    var group_labels = groups.append("text").text(function(d){return names[d.type]})
                              .attr("x", "0")
                              .attr("dx","-5")
                              .attr("dy","5").attr("text-anchor","end")
                              ;

    var group_h;

    function redraw(){
        var wh = special_dims(this);
        var w = wh.w;
        var h = wh.h;

        scale_x.range([0, w - padding.right - padding.left]);
        
        group_h = Math.floor((h-padding.top-padding.bottom)/data.length);
        var group_h2 = Math.floor(group_h/2) + 0.5;
        var group_h4 = Math.floor(group_h/4) + 0.5;

        groups.interrupt().transition().duration(0).attr("transform", function(d,i){return "translate(0," + ((i*group_h) + group_h4) + ")"});

        svg.attr("viewBox", "0 0 " + w + " " + h);


        var nticks = w < 500 ? 3 : 5;

        var gridlines_ = g_back.selectAll("path").data(scale_x.ticks(nticks));
        gridlines_.exit().remove();
        
        gridlines_.enter().append("path").merge(gridlines_)
            .attr("stroke", function(d){return d==0 ? "#aaaaaa" : "#dddddd"})
            .style("shape-rendering","crispEdges")
            .attr("d", function(d){
                var x = Math.floor(scale_x(d))+0.5;
                return "M" + x + "," + "0" + " l0," + (h - padding.bottom);
            });

        axis_x.ticks(nticks);
        axis_x(g_x_axis);

        axis_title.attr("x", padding.left + scale_x(1));

        rects.attr("height", group_h2).attr("width", function(d){return scale_x(d.p / d.n)});
        group_labels.attr("dy", group_h2/1.5);
        
    }

    var current_view = null;

    function step(vn, s, c){

        if(c != "exit" && vn!== current_view){
            wrap.style("opacity",1);
            groups.style("opacity", function(d){
                if(vn=="TOTAL"){
                    return "1";
                }
                else if(vn=="UC"){
                    return d.type=="UC" || d.type=="EX" ? "1" : "0.25";
                }
            });          
            current_view = vn;
        }
    }

    var views = [
        {
            text:["The job densification trends of similarly urbanized counties also varied among metro areas, and suggest that much of metropolitan America’s increasing job density during this period was driven by its most urbanized areas."],
            step: function(s, c){step("TOTAL", s, c)},
            exit:function(){
                wrap.style("opacity",null);
                current_view = null;
            }
        },
        {
            text:["While 73% of metro areas with core urban counties (where at least 95% of the residents live in an urbanized area) saw an increase in perceived job density in such counties, just 21% of metro areas saw perceived job density increase in their exurban counties."],
            step: function(s, c){step("UC", s, c)}
        },
        {
            text:["These trends in job density therefore suggest that jobs densified and sprawled from 2004 to 2015, growing both upwards and outwards: Almost every metro area had at least one county where jobs grew denser and almost every metro area also had at least one county in which job density declined."],
            step: function(s, c){step("TOTAL", s, c)}
        }

    ]

    return {views:views, resize:redraw};

}

export default seq7;