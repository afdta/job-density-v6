import {sector_data, sector_names, trend_data, county_data, metro_names} from './data.js';
import palette from '../../../js-modules/palette.js';
import pal from './pal.js';

export default function dashboard(container){
//one-time setup
var wrap = d3.select(container).classed("c-fix", true).classed("dashboard-container", true);

//////////////////////////////////////// ------------------------------------------------

//sectors
function dash_sector(container){

    //setup
    var wrap = d3.select(container);
    var title = wrap.append("div").classed("sticky-chart-title",true);
    title.append("p").html('Actual versus expected change in perceived job density by industry sector, <span style="white-space:nowrap;">2004 to 2015</span>')
    title.append("div").classed("ae-legend",true);

    var svg = wrap.append("div").append("svg").attr("viewBox", "0 0 640 480");

    var padding = {top:25, right:25, bottom: 5, left: 170}

    var g_main = svg.append("g").attr("transform","translate("+ padding.left + "," +padding.top + ")");
    
    var g_x_axis = g_main.append("g").classed("axis-group",true);
    var g_back = g_main.append("g");
    var g_trend = g_main.append("g");

    var scale_x = d3.scaleLinear().domain([-0.4, 0.6]).nice();
    var axis_x = d3.axisTop(scale_x).ticks(5, "+,.0%");

    var group_h = 30;
    var group_h2 = Math.floor(group_h/2);


    function redraw(cbsa){
        var data = sector_data[cbsa].slice(0).sort(function(a,b){
            var o = 0;
            if(a.naics == "00"){
                o = -1;
            }
            else if(b.naics == "00"){
                o = 1;
            }
            else{
                o = d3.descending(a.actual, b.actual);
            }
            return o;         
        });

        var min = d3.min(data.map(function(d){return Math.min(d.actual, d.expected)}));
        var max = d3.max(data.map(function(d){return Math.max(d.actual, d.expected)}));
        
        var box = wrap.node().getBoundingClientRect();
        var w = Math.floor(box.right - box.left);
        if(w < 320){w = 320}
        else if(w > 900){w = 900}

        var width = w;
        var height0 = (group_h * data.length) ;
        var height = height0 + padding.top + padding.bottom + group_h2;
        scale_x.range([0, width - padding.left - padding.right]);

        svg.attr("viewBox", "0 0 " + width + " " + height).style("width","100%").style("height", height);

        if(min > 0){
            min = 0;
        }
        else if(max < 0){
            max = 0;
        }

        scale_x.domain([min, max]).nice();

        var groups_ = g_trend.selectAll("g.top-level-group").data(data, function(d){return d.naics});
        groups_.exit().remove();
        var groups_en = groups_.enter().append("g").classed("top-level-group",true);
            groups_en.append("text").attr("x","0").attr("y","0").attr("dx","-5").attr("dy","5").attr("text-anchor","end");
        var groups = groups_en.merge(groups_);

        groups.interrupt().transition().duration(400).attr("transform", function(d,i){return "translate(0," + ((i*group_h)+group_h2) + ")"});
    
        var group_connectors_ = groups.selectAll("line").data(function(d){return [d]});
        group_connectors_.exit().remove();
        var group_connectors = group_connectors_.enter().append("line").merge(group_connectors_).style("shape-rendering","crispEdges")
                                    .attr("stroke", function(d){return d.expected > d.actual ? palette.job_density.decline : palette.job_density.growth})
                                    .attr("stroke-width","1px").attr("y1",0).attr("y2",0)
                                    .attr("x1", function(d){return scale_x(d.expected)})
                                    .attr("x2", function(d){return scale_x(d.actual)})
                                    ;
    
        var group_circles_ = groups.selectAll("circle").data(function(d){return [d, d]});
        group_circles_.exit().remove();
        var group_circles = group_circles_.enter().append("circle").merge(group_circles_)
                    .attr("r",5).attr("cy","0")
                    .attr("cx", function(d,i){return scale_x(i == 0 ? d.expected : d.actual);})
                    .attr("fill", function(d,i){return i==0 ? "#ffffff" : palette.job_density.darkblue})
                    .attr("stroke", function(d,i){return i==0 ? palette.job_density.darkblue : palette.job_density.darkblue})
                    .attr("stroke-width","1.5px")
                    ;
        
        var gridlines_ = g_back.selectAll("path").data(scale_x.ticks(5));
        gridlines_.exit().remove();
        gridlines_.enter().append("path").merge(gridlines_)
                        .attr("stroke", function(d){return d==0 ? "#aaaaaa" : "#dddddd"})
                        .attr("d", function(d){
                            var x = Math.floor(scale_x(d))+0.5;
                            return "M" + x + ",0 l0," + height0;
                        })
                        .style("shape-rendering","crispEdges")
                        ;
    
        //update text labels
        groups.select("text").text(function(d){return sector_names[d.naics]});

        axis_x(g_x_axis);
    }

    return redraw;
}

//////////////////////////////////////// ------------------------------------------------

function trend_lines(container){

    //setup
    var wrap = d3.select(container);
    var title = wrap.append("div").classed("sticky-chart-title",true).append("p").html('Change, <span style="white-space:nowrap;">2004 to 2015</span>'); 
    var svg = wrap.append("div").append("svg").attr("viewBox", "0 0 640 480");

    var padding = {top:25, right:25, bottom: 5, left: 150}

    var g_y_axis = svg.append("g").classed("axis-group",true);
    var g_x_axis = svg.append("g").classed("axis-group",true);
    var g_back = svg.append("g");
    var g_trend = svg.append("g");
    var g_anno = svg.append("g");

    var scale_x = d3.scaleLinear().domain([-0.4, 0.6]).nice();
    var axis_x = d3.axisTop(scale_x).ticks(5, "+,.0%");

    var years = d3.range(2004, 2016)
    
    var scale_y = d3.scaleLinear().domain([0, 0.4]).nice();
    var scale_x = d3.scaleLinear().domain([2004, 2015]);

    var line = d3.line().x(function(d){return scale_x(d.year)})
                        .y(function(d){return scale_y(d.value)})
                        ;

    var axis_y = d3.axisLeft(scale_y).ticks(4, "+,.0%");
    var axis_x = d3.axisBottom(scale_x).tickValues([2005, 2007, 2009, 2011, 2013, 2015]).tickFormat(function(v){return v});

    var padding = {top:20, right:100, bottom: 40, left: 50}

    function dmap(data, key){
        return data.map(function(obs){
            return {year:obs.year, value:obs[key]} 
        })
    }

    function redraw(cbsa, domain){
        var data = trend_data[cbsa];

        var min = d3.min(data.map(function(d){return Math.min(d.actual, d.expected)}));
        var max = d3.max(data.map(function(d){return Math.max(d.actual, d.expected)}));
        if(min > 0){
            min = 0;
        }
        else if(max < 0){
            max = 0;
        }

        var box = wrap.node().getBoundingClientRect();
        var w = Math.floor(box.right - box.left);
        if(w < 320){w = 320}
        else if(w > 900){w = 900}

        var width = w;
        var height = w*0.35;
        
        svg.attr("viewBox", "0 0 " + width + " " + height).style("width","100%").style("height", height);
        
        g_x_axis.attr("transform", "translate(0," + (height-padding.bottom) + ")");
        g_y_axis.attr("transform", "translate(" + (padding.left) + ",0)");

        scale_x.range([padding.left, width - padding.right]);
        scale_y.range([height - padding.bottom, 0 + padding.top]).domain([min, max]).nice();

        var lines_ = g_trend.selectAll("path").data(["expected", "actual"]);
        lines_.exit().remove();
        var lines = lines_.enter().append("path").merge(lines_)
                        .attr("stroke-width","3px")
                        .attr("fill","none")
                        .attr("stroke", function(d,i){
                            return palette.job_density.darkblue;
                        })
                        .attr("stroke-dasharray", function(d,i){return d=="expected" ? "2,2" : null})
                        ;

        var grid_lines_ = g_back.selectAll("line").data(scale_y.ticks(4));
        grid_lines_.exit().remove();
        var grid_lines = grid_lines_.enter().append("line").merge(grid_lines_).attr("stroke","#bbbbbb")
                                            .attr("x1", scale_x(2004)-4).attr("x2", scale_x(2015))
                                            .attr("y1", function(d){return Math.floor(scale_y(d))+0.5})
                                            .attr("y2", function(d){return Math.floor(scale_y(d))+0.5})
                                            .style("shape-rendering","crispEdges")
                                            ;
        
        var txt_data = [];
        data.forEach(function(d){
            if(d.year == 2015){
                if(d.expected != null){txt_data.push({label:"Expected", value:d.expected, above:d.actual==null || d.expected >= d.actual})}
                if(d.actual != null){txt_data.push({label:"Actual", value:d.actual, above: d.expected==null || d.actual >= d.expected})}
            }
        });

        var txt_ = g_anno.selectAll("text").data(txt_data);
        txt_.exit().remove();
        var txt = txt_.enter().append("text").merge(txt_).text(function(d){return d.label})
                        .attr("x", scale_x(2015) + 1)
                        .attr("y", function(d){return scale_y(d.value)})
                        .attr("dy", function(d){return d.above ? 1 : 12})
                        ;

        axis_x(g_x_axis);
        axis_y(g_y_axis);

        lines.attr("d", function(key){return line(dmap(data, key))});

    }

    return redraw;
}

//////////////////////////////////////// ------------------------------------------------


function types(container){
    //setup
     var names = {TOTAL: "Total", UC: "Core urban", MS: "Mature suburban", ES: "Emerging suburban", EX: "Exurban"};
     var ordering = {TOTAL: 0, UC: 1, MS: 2, ES: 3, EX: 4};
 
     var types = ["UC", "MS", "ES", "EX", "TOTAL"];
     var cols = pal(types);

    //setup
    var wrap = d3.select(container);
    var title = wrap.append("div").classed("sticky-chart-title",true);
    title.append("p").html('Actual versus expected change in perceived job density by county type, <span style="white-space:nowrap;">2004 to 2015</span>'); 
    title.append("div").classed("ae-legend",true);
    
    var svg = wrap.append("div").append("svg").attr("viewBox", "0 0 640 480");

    var padding = {top:25, right:25, bottom: 5, left: 170}

    var g_main = svg.append("g").attr("transform","translate("+ padding.left + "," +padding.top + ")");

    var g_x_axis = g_main.append("g").classed("axis-group",true);
    var g_back = g_main.append("g");
    var g_trend = g_main.append("g");

    var scale_x = d3.scaleLinear().domain([-0.4, 0.6]).nice();
    var axis_x = d3.axisTop(scale_x).ticks(5, "+,.0%");

    var group_h = 30;
    var group_h2 = Math.floor(group_h/2);

    function redraw(cbsa){
        var data = county_data[cbsa].slice(0).sort(function(a,b){
            var o;
            try{
                o = ordering[a.type] - ordering[b.type];
            }
            catch(e){
                o = 0;
            }
            return o;
        });
        var lookup = {TOTAL: null, UC: null, MS: null, ES: null, EX: null};
        data.forEach(function(d){
            lookup[d.type] = d;
        });

        var min = d3.min(data.map(function(d){return Math.min(d.actual, d.expected)}));
        var max = d3.max(data.map(function(d){return Math.max(d.actual, d.expected)}));
        
        var box = wrap.node().getBoundingClientRect();
        var w = Math.floor(box.right - box.left);
        if(w < 320){w = 320}
        else if(w > 900){w = 900}

        var width = w;
        var height0 = (group_h * data.length) ;
        var height = height0 + padding.top + padding.bottom + group_h2;
        scale_x.range([0, width - padding.left - padding.right]);

        svg.attr("viewBox", "0 0 " + width + " " + height).style("width","100%").style("height", height);

        if(min > 0){
            min = 0;
        }
        else if(max < 0){
            max = 0;
        }

        scale_x.domain([min, max]).nice();

        var groups_ = g_trend.selectAll("g.top-level-group").data(data, function(d){return d.type});
        groups_.exit().remove();
        var groups_en = groups_.enter().append("g").classed("top-level-group",true);
            groups_en.append("text").attr("x","0").attr("y","0").attr("dx","-5").attr("dy","5").attr("text-anchor","end");
        var groups = groups_en.merge(groups_); //.style("opacity", function(d){return lookup[d] === null ? 0.25 : 1});

        groups.interrupt().transition().duration(400).attr("transform", function(d,i){return "translate(0," + ((i*group_h)+group_h2) + ")"});

        var group_connectors_ = groups.selectAll("line").data(function(d){
            return [d];
            //var D = lookup[d];
            //return D===null ? [] : [D];
        });
        group_connectors_.exit().remove();
        var group_connectors = group_connectors_.enter().append("line").merge(group_connectors_).style("shape-rendering","crispEdges")
                                    .attr("stroke", function(d){return d.expected > d.actual ? palette.job_density.decline : palette.job_density.growth})
                                    .attr("stroke-width","1px").attr("y1",0).attr("y2",0)
                                    .attr("x1", function(d){return scale_x(d.expected)})
                                    .attr("x2", function(d){return scale_x(d.actual)})
                                    ;

        var group_circles_ = groups.selectAll("circle").data(function(d){
            //var D = lookup[d];
            //return D===null ? [] : [D, D];
            return [d,d];
        });
        group_circles_.exit().remove();
        var group_circles = group_circles_.enter().append("circle").merge(group_circles_)
                    .attr("r",4.5).attr("cy","0")
                    .attr("cx", function(d,i){return scale_x(i == 0 ? d.expected : d.actual);})
                    .attr("fill", function(d,i){return i==0 ? "#ffffff" : palette.job_density.darkblue})
                    .attr("stroke", function(d,i){return i==0 ? palette.job_density.darkblue : palette.job_density.darkblue})
                    .attr("stroke-width","1.5px")
                    ;
        
        var gridlines_ = g_back.selectAll("path").data(scale_x.ticks(5));
        gridlines_.exit().remove();
        gridlines_.enter().append("path").merge(gridlines_)
                        .attr("stroke", function(d){return d==0 ? "#aaaaaa" : "#dddddd"})
                        .attr("d", function(d){
                            var x = Math.floor(scale_x(d))+0.5;
                            return "M" + x + ",0 l0," + height0;
                        })
                        .style("shape-rendering","crispEdges")
                        ;

        //update text labels
        groups.select("text").text(function(d){return names[d.type]});

        axis_x(g_x_axis);
    }

return redraw;


}

//setup
var panel0 = wrap.append("div").classed("dashboard-panel",true);
var panel1 = wrap.append("div").classed("dashboard-panel",true);

var redraw_sectors = dash_sector(panel1.append("div").node());

var redraw_lines = trend_lines(panel0.append("div").node());
var redraw_types = types(panel0.append("div").node());


//redraw
var current_cbsa = "10420";
function redraw(){
    redraw_sectors(current_cbsa);
    redraw_lines(current_cbsa);
    redraw_types(current_cbsa);
}

setTimeout(redraw, 0);

window.addEventListener("resize", redraw);

var sel = d3.select("#dashboard-select").append("select");
var opt_data = [];
for(var met in metro_names){
    if(metro_names.hasOwnProperty(met)){
        if(met !== "99997" && met !== "99998" && met !== "99999"){
            opt_data.push({value:met, name:metro_names[met]})
        }
    }
}
var sel_opt = sel.selectAll("option").data(opt_data).enter().append("option")
.text(function(d){return d.name})
.attr("value", function(d){return d.value});

sel.on("change", function(){
    var v = this.value;
    if(metro_names.hasOwnProperty(v)){
        current_cbsa = v;
        redraw();
    }
})


}