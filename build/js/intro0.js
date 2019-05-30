import on_resize from './on_resize.js';
import palette from '../../../js-modules/palette.js';


function intro0(container, i){

    var wrap_ = d3.select(container).attr("id", "intro-0").append("div");

    //one time setup

    var wrap = wrap_.append("div").classed("chart-view",true);
    var title = wrap.append("div").classed("sticky-chart-title",true).append("p").html("Defining perceived job density"); 

    var svg = wrap.append("svg");

    var groups = svg.selectAll("g").data(["a","b","c"]).enter().append("g");

    var hlines = groups.selectAll("line.h-line").data([1,2]).enter().append("line").classed("h-line",true).style("shape-rendering","crispEdges").attr("x1",0).attr("stroke","#dddddd");
    var vlines = groups.selectAll("line.v-line").data([1,2]).enter().append("line").classed("v-line",true).style("shape-rendering","crispEdges").attr("y1",0).attr("stroke","#dddddd");

    var rects = groups.append("rect").attr("x","0").attr("y",0).attr("rx","11").attr("ry","11")
                    .attr("fill","none").attr("stroke","#333333").attr("stroke-width","1px")
                    //.style("shape-rendering","crispEdges");

    function redraw(){
        var w = this.w < 320 ? 320 : (this.w > 900 ? 900 : this.w);
        var h = this.h - 300;
        
        //var h = w * aspect;
        if(h < 400){h = 400};

        var w_gap = Math.floor(w/12);
        var w_square = Math.floor(w/4);
        var h_square = w_square;
        var w_ = w_gap + w_square;
        var w_3 = Math.floor(w_square/3);

        svg.attr("viewBox", "0 0 " + w + " " + h);
        
        groups.attr("transform", function(d,i){
            return "translate(" + ((i*w_)+0.5) + "," + (w_gap+0.5) + ")"
        })

        vlines.attr("y2", h_square)
              .attr("x1", function(d,i){return d*(w_3)})
              .attr("x2", function(d,i){return d*(w_3)});

        hlines.attr("x2", h_square)
              .attr("y1", function(d,i){return d*(w_3)})
              .attr("y2", function(d,i){return d*(w_3)});

        rects.attr("width", w_square).attr("height", h_square);

    }

    //register resize callback. initialize
    var redraw_ = on_resize(redraw, true);

    var current_view = -1;

    function step(n, s, c){
        if(c != "exit" && n!== current_view){
            wrap.style("opacity", n < 0 ? null : "1");

            groups.style("opacity", function(d,i){return i <= n ? "1" : "0.25"});

            current_view = n;
        }
    }

    var views = [
        {
            text:["Evenly distributed, these are the density."],
            step:function(s, c){step(0, s, c)},
            exit:function(){
                step(-1, 0, "");
            }
        },
        {
            text:["Same standard density, but more jobs clustered in some neighborhoods increases the perceived density"],
            step:function(s, c){step(1, s, c)}
        },
        {
            text:["Same standard density, but now all jobs are crammed in..."],
            step:function(s, c){step(2, s, c)}
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

intro0.nviews = 3;

export default intro0;