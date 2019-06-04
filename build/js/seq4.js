import on_resize from './on_resize.js';
import {naics00, metro_names} from './data.js';
import palette from '../../../js-modules/palette.js';

import map from '../../../js-modules/state-map.js';
import {geos_state} from '../../../js-modules/geos-state.js';
import geos_cbsa from '../../../js-modules/geos-cbsa';

function seq4(container, i){

    //one time setup
    var wrap = d3.select(container).attr("id","sequence-1").classed("chart-view big-chart",true);

    wrap.append("div").classed("sticky-chart-title",true).append("p").html("Job density trends varied among large metro areas from 2004 to 2015");

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
    var mapaspect = 1.8;

    function redraw(){
        var h = this.gh - 250;
        if(h < 300){h = 300};

        var w0 = h*mapaspect;
        var w1 = this.vw > 900 ? 900 : this.vw;
        w1 = w1 - 30; //subtract padding

        console.log(this.vw);

        var w = Math.min(w0, w1);

        main_map.print(w);
    }


    var views = [
        {
            text:["These job density increases were not widespread across individual metro areas."],
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
            text:["Out of the 94 large metro areas in our study, only 48 posted an increase in job density from 2004 to 2015. Of those, 14 metro areas saw job density increases that exceeded the 94-metro area average, led by San Francisco, Honolulu, Oxnard, Calif., Charlotte, N.C., and Albany, N.Y."],
            step: function(s){
                if(s > 0){
                    points.style("opacity", function(d){return naics00[d.key].actual >= 0 ? 1 : 0.25});
                    labels.style("opacity", "0");
                }
            }
        },
        {
            text: ["Meanwhile, 46 metro areas saw perceived job density decline. Most declines were relatively modest. However, six metro areas saw declines greater than 30%, including Scranton, Pa. Cape Coral, Fla., New Haven, Conn., and Sacramento, Calif."],
            step: function(s){
                if(s > 0){
                    points.style("opacity", function(d){return naics00[d.key].actual >= 0 ? 0.25 : 1});
                    labels.style("opacity", "0");
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

    return {resize:redraw, views:views};

}

export default seq4;