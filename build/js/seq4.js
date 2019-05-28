import on_resize from './on_resize.js';
import {naics00, metro_names} from './data.js';
import palette from '../../../js-modules/palette.js';

import map from '../../../js-modules/state-map.js';
import {geos_state} from '../../../js-modules/geos-state.js';
import geos_cbsa from '../../../js-modules/geos-cbsa';

function seq4(container, i){

    //one time setup
    var wrap = d3.select(container).attr("id","sequence-1").classed("chart-view big-chart",true);

    wrap.append("div").classed("sticky-chart-title",true).append("p").html("Job density trends varied among large metro areas");

    var t94 = geos_cbsa.filter(function(d){return naics00.hasOwnProperty(d.cbsa)});

    var plus = d3.interpolateRgb("#ffffff", palette.primary.blue);
    var minus = d3.interpolateRgb("#ffffff", palette.primary.red);

    var main_fill = function(d){
        var col = "#dddddd";
        try{
            var v = naics00[d].actual;
            if(v >= 0.3){
                col = plus(0.9);
            }
            else if(v >= 0.1){
                col = plus(0.6);
            }
            else if(v >= 0){
                col = plus(0.3);
            }
            else if(v >= -0.1){
                col = minus(0.3);
            }
            else if(v >= -0.3){
                col = minus(0.6);
            }
            else if(v < -0.3){
                col = minus(0.9);
            }
        }
        catch(e){
            col = "#dddddd";
        }
        
        return col;
    }

    var main_map = map(wrap.append("div").node());
    var legend = wrap.append("p").classed("legend",true).html("To do: add legend<br />Blue = increase in density, Red = decrease");

    var state_layer = main_map.add_states(geos_state, function(d){return d.properties.geo_id}).attr({fill:"#ffffff", stroke:"#aaaaaa"});
    
    var cbsa_layer = main_map.add_points(t94, function(d){return d.cbsa}, function(d){return [d.lon, d.lat]})
                                .attr({fill:main_fill, "fill-opacity":"0.85", "stroke-width":"1", stroke: function(c){return d3.color(main_fill(c)).darker()}, r:"6", "pointer-events":"all"})
                                .labels(function(cbsa){return metro_names[cbsa]}, [7,5], {"font-size":"15px", "opacity":"0"});
                                //.tooltips(function(cbsa){return "<p>" + metro_names[cbsa] + "</p>"});

    main_map.print();

    var labels = cbsa_layer.labels();
    var points = cbsa_layer.points();

    function redraw(){
        var w = this.w < 320 ? 320 : (this.w > 800 ? 800 : this.w);
        var h = w * aspect;
        if(h < 400){h = 400};
        
    }

    //register resize callback. initialize
    on_resize(redraw, true);

    //set extent

    //redraw


    var views = [
        {
            text:["Although metropolitan America saw a notable increase in job density as a whole, this trend was not widespread across metro areas."],
            enter:function(){
                wrap.style("opacity","1");
            },
            step: function(s){
                if(s > 0){
                    points.style("opacity", function(d){return naics00[d.key].actual >= 0 ? 1 : 1});
                }
            },
            exit:function(){
                wrap.style("opacity",null);
            }
        },
        {
            text:["Out of 94 large metro areas, only 48 posted increases in perceived job density during the period."],
            step: function(s){
                if(s > 0){
                    points.style("opacity", function(d){return naics00[d.key].actual >= 0 ? 1 : 0.25});
                    labels.style("opacity", "0");
                }
            }
        },
        {
            text: ["Talk about some places (here >= +40% density gain)", "It may be better to talk about 1-2 at a time to avoid labeling issues (especially relevant on mobile)."],
            step: function(s){
                if(s > 0){
                    points.style("opacity", function(d){return naics00[d.key].actual >= 0 ? 1 : 0.25});
                    labels.style("opacity", function(d){
                        return naics00[d.key].actual > 0.4 ? 1 : 0;
                    });
                }
            }
        },
        {
            text: ["Meanwhile 46 saw perceived job density decline"],
            step: function(s){
                if(s > 0){
                    points.style("opacity", function(d){return naics00[d.key].actual >= 0 ? 0.25 : 1});
                    labels.style("opacity", "0");
                }
            }
        },
        {
            text: ["Talk about big declines in density (here <= -30%). Also highlight places where actual change exceeded expected, and vice versa."],
            step: function(s){
                if(s > 0){
                    points.style("opacity", function(d){return naics00[d.key].actual >= 0 ? 0.25 : 1});
                    labels.style("opacity", function(d){
                        return naics00[d.key].actual < -0.3 ? 1 : 0;
                    });
                }
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

seq4.nviews = 5;

export default seq4;