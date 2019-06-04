import scrolly from "../../../js-modules/d3-scrolly.js";

// the setup function must take two arguments: setup(container, view_num)
// if setup is called with both arguments, it should draw the requested view (view_num) of the graphic, running setup first. 
// typically, drawing the view completely means running then enter() and then the step(1) method, if present (after first running setup), but this is left up to the design of setup().
// if called without view_num, then the return of setup is an array of objects:
//   [{text:_, enter:_, step:_, exit:_}]
//   calling enter, step, or exit will alter the view of the graphic to match text
// 
// the first form is used to handle instances when scrollytelling is not supported by the browser (every view should be drawn)
// the second form is used to handle scrollytelling 

//seqs = [setup0, setup1, setup2, ..., setupN];

export default function sequence(container, seqs, header, threshold){
    
    var wrap = d3.select(container).append("div").classed("sequence-wrap",true);

    

    if(threshold == null){
        threshold = 0.15;
    }

    if(scrolly.supported()){

        var stuck = wrap.append("div");
        var header = stuck.append("div").style("border-bottom","1px solid #aaaaaa").html(header);

        var scr = scrolly(stuck.node(), 90);

        seqs.forEach(function(seq){
            var view = scr.view();

            //each sequence returns
            var view_setup = seq(view.node());

            var views = view_setup.views;
            
            view.resize(view_setup.resize);

            views.forEach(function(d){
                //text [c]ontainer
                var c = wrap.append("div").classed("scrolling-panel",true);
                c.selectAll("p").data(d.text).enter().append("p").html(function(h){return h});

                var fns = {};
                fns.enter = d.hasOwnProperty("enter") ? d.enter : null;
                fns.step = d.hasOwnProperty("step") ? d.step : null;
                fns.exit = d.hasOwnProperty("exit") ? d.exit : null;
            
                view.waypoint(c.node(), fns, threshold);
            });
        });
    }
    else{
        wrap.style("margin-bottom", null);

        var header = wrap.append("div").html(header);

        function loop_to(i, views){
            var j = -1;
            while(++j <= i){
                if(views[j].hasOwnProperty("enter")){
                    views[j].enter.call({});
                }
                if(views[j].hasOwnProperty("step")){
                    views[j].step.call({}, 1);
                }
            }
        }

        var resize_stack = [];
        seqs.forEach(function(seq){
            //draw first case
            var wrap0 = wrap.append("div").classed("static-panel",true).style("min-height","1px");
            var v0 = seq(wrap0.node());
            wrap0.append("div").classed("static-panel-caption",true)
                 .selectAll("p").data(v0.views[0].text).enter().append("p").html(function(t){return t});
            loop_to(0, v0.views);
            resize_stack.push(v0.resize);

            //draw any remaining views
            if(v0.views.length > 1){
                d3.range(1, v0.views.length).forEach(function(i){
                    var wrapz = wrap.append("div").classed("static-panel", true);
                    var vz = seq(wrapz.node());
                    wrapz.append("div").classed("static-panel-caption", true)
                        .selectAll("p").data(vz.views[i].text).enter().append("p").html(function(t){return t});
                    loop_to(i, vz.views);
                    resize_stack.push(vz.resize);
                })
            }

            var resize_statics = function(){
                var dims = scrolly.dims(wrap0.node(), 90);
                resize_stack.forEach(function(fn){
                    fn.call(dims);
                });
            }

            resize_statics();
            window.addEventListener("resize", resize_statics);
        });

    }



}