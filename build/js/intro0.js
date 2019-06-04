import on_resize from './on_resize.js';
import palette from '../../../js-modules/palette.js';

function points_circle(w){
    var t = w/2;
    var r = w/4;

    var radians = ([270, 330, 30, 90, 150, 210]).map(function(d){return (d/180)*Math.PI});
    var points = radians.map(function(d){
        var x = r * Math.cos(d);
        var y = r * Math.sin(d);
        return [x+t,y+t];
    });   
    points.push([t,t]);
    return points;
}

function points_stack(w){
    var pcts = [1/6, 3/6, 5/6];
    var pts = d3.range(0,9).map(function(i){
        var row = Math.floor(i/3);
        var col = i%3;
        return [pcts[row]*w, pcts[col]*w];
    });
    return pts;
}

//arr = [[null, className, null, className, null, null], [className, null] ]
//subarray should be length 7 or 9
function pts_gen(arr, w){
    var pts = arr.length <= 7 ? points_circle(w) : points_stack(w);
    return pts.map(function(xy, i){return {xy:xy, d:arr[i]}});
}

function intro0(container, i){

    var wrap_ = d3.select(container).attr("id", "intro-0").append("div");

    //one time setup

    var wrap = wrap_.append("div").classed("chart-view",true).style("opacity","1");
    var title = wrap.append("div").classed("sticky-chart-title",true).style("border-bottom","2px solid #333333").append("p").html('Data and measures'); 
    wrap.append("p").classed("chart-text",true).text("The analysis covers density trends of private, non-administrative sector jobs in 94 of the nation’s largest metro areas from 2004 through 2015 (the latest year of data available).");

    var svg = wrap.append("svg").style("width","100%");

    var sub_group_data = {
        "a": [
            [null, null, null, null, "basic", null, null, null, null],  
            [null, null, null, null, "basic", null, null, null, null],
            [null, null, null, null, "basic", null, null, null, null],
            [null, null, null, null, "basic", null, null, null, null],
            [null, null, null, null, "basic", null, null, null, null],
            [null, null, null, null, "basic", null, null, null, null],
            [null, null, null, null, "basic", null, null, null, null],
            [null, null, null, null, "basic", null, null, null, null],
            [null, null, null, null, "basic", null, null, null, null]  
        ],
        "b": [
            [null, null, null, null, null, null, null, null, null],  
            [null, null, null, null, "basic", null, null, null, null],
            [null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null],
            ["basic", null, "basic", null, "basic", null, null], 
            [null, null, null, null, "basic", null, null, null, null],
            [null, null, null, null, "basic", null, null, null, null],
            [null, null, null, null, null, null, null, null, null],
            ["basic", null, "basic", null, "basic", null, null] 
        ],
        "c": [
            [null, null, null, null, null, null, null, null, null],  
            [null, null, null, null, null, null, null, null, null],  
            [null, null, null, null, null, null, null, null, null],  
            [null, null, null, null, null, null, null, null, null],  
            ["basic", "basic", "basic", "basic", "basic", "basic", "basic", "basic", "basic"],  
            [null, null, null, null, null, null, null, null, null],  
            [null, null, null, null, null, null, null, null, null],  
            [null, null, null, null, null, null, null, null, null],  
            [null, null, null, null, null, null, null, null, null]  
        ],

        "d": [
            [null, null, null, null, null, null, null],  
            [null, null, null, null, null, null, "mfg"],  
            [null, null, null, null, null, null, null], 

            [null, null, null, null, null, null, null],  
            [null, "mfg", null, "srv", null, "srv", null],  
            [null, null, null, null, null, null, "mfg"], 

            [null, null, null, null, null, null, "mfg"],  
            [null, null, null, null, null, null, null],  
            [null, "mfg", null, "srv", null, "srv", null]  
        ],
        "e": [
            [null, null, null, null, null, null, null],  
            [null, null, "new-mfg", null, null, null, "mfg"],  
            [null, null, null, null, null, null, null], 

            [null, null, null, null, null, null, null],  
            ["new-mfg", "mfg", null, "srv", null, "srv", "new-srv"],  
            [null, null, "new-mfg", null, null, null, "mfg"], 

            [null, "new-mfg", null, null, null, null, "mfg"],  
            [null, null, null, null, null, null, null],  
            ["new-mfg", "mfg", null, "srv", null, "srv", "new-srv"]  
        ],
        "f": [
            [null, null, null, null, null, null, null],  
            [null, null, "new-mfg", null, null, null, "mfg"],  
            [null, null, null, null, null, null, null], 

            [null, null, null, null, null, null, null],  
            [null, "mfg", null, "srv", "new-srv", "srv", "new-srv"],  
            [null, null, null, null, null, null, "mfg"], 

            [null, null, null, null, null, null, "mfg"],  
            [null, null, null, null, null, null, null],  
            ["new-mfg", "mfg", "new-mfg", "srv", "new-mfg", "srv", "new-mfg"]  
        ]
    }

    var groups0 = svg.selectAll("g").data([["a","b","c"], ["d","e","f"]]).enter().append("g").style("visibility", function(d,i){return i==0 ? "visible" : "hidden"});
    var groups = groups0.selectAll("g").data(function(d){return d}).enter().append("g").style("opacity","0.25");
    var subgroups = groups.selectAll("g").data(function(d){return sub_group_data[d]}).enter().append("g");
    var lrects = subgroups.append("rect").classed("little-square",true).attr("x","0").attr("y","0").attr("stroke","#333333").attr("stroke-dasharray","2,4").attr("fill","#ffffff");
    var brects = groups.append("rect").classed("big-square",true).attr("x","0").attr("y","0").attr("stroke","#333333").attr("stroke-width","2px").attr("fill","none").style("shape-rendering","crispEdges");
    var dots;

    var key = {};
    key.g = svg.append("g");
    key.text = key.g.append("text").text("1 mile").style("font-size","15px").attr("text-anchor","middle").attr("dy",-3);
    key.mark = key.g.append("path").style("shape-rendering","crispEdges").attr("stroke","#333333").attr("fill","none");

    var current_view = -1;
    
    function redraw(){
        var w = this.vw < 320 ? 320 : (this.vw > 900 ? 900 : this.vw);
        w = w-30;
        var h = this.gh - 250;
        
        if(h < 220){h = 220};

        var pad_left = 9;
        var pad_top = 35;

        var w_gap = Math.floor((w-pad_left-pad_left)/11);
        var w_square = Math.floor((w - w_gap - w_gap - pad_left - pad_left)/3);
        var h_square = w_square;
        var w_ = w_gap + w_square;
        var w_3 = Math.floor(w_square/3);
        

        svg.attr("viewBox", "0 0 " + w + " " + (w_square*2));
        
        key.g.attr("transform", "translate(" + pad_left + "," + (pad_top-8) + ")");
        key.mark.attr("d", "M0.5,5 l0,-5 l" + (w_3-0.5) + ",0 l0,5");
        key.text.attr("x", w_3/2);

        groups.attr("transform", function(d,i){
            return "translate(" + ((i*w_)+pad_left+0.5) + "," + (pad_top + 0.5) + ")"
        });

        subgroups.attr("transform", function(d,i){
            var row = Math.floor(i/3);
            var col = i%3;
            return "translate(" + (col*w_3) + "," + (row*w_3) + ")";
        });

        brects.attr("width",w_square).attr("height",w_square);
        lrects.attr("width",w_3).attr("height",w_3);

        var dots_ = subgroups.selectAll("circle").data(function(d){return pts_gen(d, w_3)});
        dots_.exit().remove();
        dots = dots_.enter().append("circle").merge(dots_).attr("r",w_3/9)
        .attr("cx", function(d){return d.xy[0]})
        .attr("cy", function(d){return d.xy[1]})
        .attr("class", function(d){return d.d == null ? "intro" : "intro " + d.d})
        dots.style("display", current_view < 1 || current_view == 4 ? "none" : null);
        ;

        

        //vlines.attr("y2", h_square)
        //      .attr("x1", function(d,i){return d*(w_3)})
        //      .attr("x2", function(d,i){return d*(w_3)});

        //hlines.attr("x2", h_square)
        //      .attr("y1", function(d,i){return d*(w_3)})
        //      .attr("y2", function(d,i){return d*(w_3)});

        //rects.attr("width", w_square).attr("height", h_square);

    }

    function step(n, s, c){
        if(c != "exit" && n!== current_view){
            //wrap.style("opacity", n < 0 ? null : "1");
            groups0.style("visibility", function(d,i){
                if(i==0){
                    return n < 4 ? "visible" : "hidden";
                }
                else{
                    return n >= 4 ? "visible" : "hidden";
                }
            });

            groups.style("opacity", function(d,i){
                var j = n%4;
                return j > 0 && i < j ? "1" : "0.25"
            });

            try{
                dots.style("display", n < 1 || n == 4 ? "none" : null);
            }
            catch(e){

            }

            if(n < 4){
                title.text("What is perceived job density?");
            }
            else{
                title.text("What is the difference between actual and expected changes in job density?");
            }

            current_view = n;
        }
    }

    var views = [
        {
            text:["All the findings on job density here refer to the weighted or “perceived” density of jobs in metro areas. Perceived job density measures the job density of the place in which the average job is located, revealing how dense a metro area feels and how compactly its jobs are concentrated.", "To see how this perceived density measure compares to the standard density, consider the following examples…"],
            step:function(s, c){step(0, s, c)},
            exit:function(){
                step(-1, 0, "");
            }
        },
        {
            text:["In the first example, jobs are spread evenly across the metro area, giving it the same standard and perceived job density of one job per square mile.", '<span style="color:red">Finalized chart labels TK</span>'],
            step:function(s, c){step(1, s, c)}
        },
        {
            text:["The metro area in the second example has the same number of jobs and therefore the same standard density as the first one, but here jobs are more clustered in some parts than others, which makes its perceived job density greater than its standard job density."],
            step:function(s, c){step(2, s, c)}
        },
        {
            text:["In the third example, the metro area again has the same number of jobs and therefore the same standard job density, but all the jobs are concentrated in just one part of the metro area, giving it a perceived job density nine-times greater than its standard job density.", "To read more about how we measure perceived job density, see page 8 in the report. (Jump link to PDF)"],
            step:function(s, c){step(3, s, c)}
        },
        {
            text:["To better understand the factors behind job density trends, we compare actual changes in job density to counterfactual or “expected” changes, which indicate how much a metro area’s job density would have changed if its job growth accumulated according to where its existing jobs were located."],
            step:function(s, c){step(4, s, c)}
        },
        {
            text:["For example, this metro area started with five jobs in the manufacturing sector and four jobs in the services sector for a total of nine jobs in year one."],
            step:function(s, c){step(5, s, c)}
        },
        {
            text:["From year one to two, this metro area added five new manufacturing jobs and two new services jobs. If these new manufacturing and services jobs had located according to where existing jobs in these sectors were located in year one, this metro area could have expected to see its job density increase by 100%."],
            step:function(s, c){step(6, s, c)}
        },
        {
            text:["Instead, the metro area’s new manufacturing jobs actually located in just two subareas instead of five and new services jobs located in just one subarea instead of two. As a result of this more spatially concentrated job growth, this metro’s perceived job density actually increased by 115%.","To read more about how we calculate expected trends in job density, see page 9 in the report. (Jump link to PDF)"],
            step:function(s, c){step(7, s, c)}
        }
    ]

    return {views:views, resize:redraw};

}

export default intro0;