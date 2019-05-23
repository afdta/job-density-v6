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

export default function sequence(container, setup, num_views, threshold){
    
    var wrap = d3.select(container).append("div").classed("sequence-wrap",true);
    
    var views;

    if(threshold == null){
        threshold = 0.15;
    }

    if(scrolly.supported()){
        var sticky = wrap.append("div"); 
        var scr = scrolly(sticky.node(), 90);
        views = wrap.selectAll("div.scrolling-panel").data(setup(sticky.node())).enter().append("div").classed("scrolling-panel",true);
                
        views.selectAll("p").data(function(d){return d.text}).enter().append("p").html(function(d){return d});

        views.each(function(d){            
            var fns = {};
            fns.enter = d.hasOwnProperty("enter") ? d.enter : null;
            fns.step = d.hasOwnProperty("step") ? d.step : null;
            fns.exit = d.hasOwnProperty("exit") ? d.exit : null;
    
            scr.marker(this, fns, threshold);
          })
    }
    else{
        wrap.style("margin-bottom", null);
        //draw all views using form setup(container, view_num)
        views = wrap.selectAll("div.static-panel").data(d3.range(0,num_views)).enter().append("div").classed("static-panel",true);
        views.each(function(d){
            setup(this, d);
        });
    }

}