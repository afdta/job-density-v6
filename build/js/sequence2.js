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
        var header = stuck.append("div").html(header);

        var scr = scrolly(stuck.node(), 90);

        seqs.forEach(function(seq){
            var view = scr.view();

            var views = seq(view.node());

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

        seqs.forEach(function(seq){
            //draw all views using form setup(container, view_num)
            views = wrap.append("div").selectAll("div.static-panel").data(d3.range(0,seq.nviews)).enter().append("div").classed("static-panel",true);
            views.each(function(d){
                seq(this, d);
            });
        });

    }



}