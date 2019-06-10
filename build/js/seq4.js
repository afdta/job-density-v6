
import {naics00, metro_names} from './data.js';


import map from '../../../js-modules/state-map.js';
import {geos_state} from '../../../js-modules/geos-state.js';
import geos_cbsa from '../../../js-modules/geos-cbsa';

function seq4(container, i){

    //one time setup
    var wrap = d3.select(container).attr("id","sequence-1").append("div").classed("chart-view big-chart",true);

    wrap.append("div").classed("sticky-chart-title",true).append("p").html("Job density trends varied among large metro areas from 2004 to 2015");

    var t94 = geos_cbsa.filter(function(d){return naics00.hasOwnProperty(d.cbsa)});

    var plus = d3.interpolateRgb("#ffffff", "#3461B7");
    var minus = d3.interpolateRgb("#ffffff", "#E50374");

    var main_fill = function(d){
        var col = "#dddddd";
        try{
            var v = naics00[d].actual;
            if(v >= 0.3){
                col = plus(1);
            }
            else if(v >= 0.1){
                col = plus(0.6);
            }
            else if(v >= 0){
                col = plus(0.25);
            }
            else if(v >= -0.1){
                col = minus(0.25);
            }
            else if(v >= -0.3){
                col = minus(0.6);
            }
            else if(v < -0.3){
                col = minus(1);
            }
        }
        catch(e){
            col = "#dddddd";
        }
        
        return col;
    }    

    var main_map = map(wrap.append("div").node());
    wrap.append("div").classed("legend",true).append("div").classed("map-legend",true);

    var state_layer = main_map.add_states(geos_state, function(d){return d.properties.geo_id}).attr({fill:"#ffffff", stroke:"#aaaaaa"});
    
    var cbsa_layer = main_map.add_points(t94, function(d){return d.cbsa}, function(d){return [d.lon, d.lat]})
                                .attr({fill:main_fill, "fill-opacity":"0.85", "stroke-width":"1", stroke: function(c){return d3.color(main_fill(c)).darker()}, r:"6", "pointer-events":"all"})
                                .labels(function(cbsa){return metro_names[cbsa]}, [7,5], {"font-size":"15px", "opacity":"0"});

    main_map.print();

    var labels = cbsa_layer.labels();
    var points = cbsa_layer.points();
    var mapaspect = 1.8;
    var vpw;

    function redraw(){
        vpw = this.vw;
        var h = this.gh - 250;
        if(h < 300){h = 300};

        var w0 = h*mapaspect;
        var w1 = this.vw > 900 ? 900 : this.vw;
        w1 = w1 - 30; //subtract padding

        var w = Math.min(w0, w1);

        main_map.print(w);
    }

    var current_view = null;

    function step(vn, s, c){
        if(c != "exit" && vn!== current_view){
            wrap.style("opacity",1);

            if(vn == 0){
                points.style("opacity", function(d){return naics00[d.key].actual >= 0 ? 1 : 1});
            }
            else if(vn == 1){
                points.style("opacity", function(d){return naics00[d.key].actual >= 0 ? 1 : 0.25});
                labels.style("opacity", function(d){return d.key in {41860:1, 46520:1, 16740:1, 37100:1, 10580:1} && vpw > 925 ? 1 : 0});
            }
            else if(vn == 2){
                points.style("opacity", function(d){return naics00[d.key].actual >= 0 ? 0.25 : 1});
                labels.style("opacity", function(d){return d.key in {15980:1, 42540:1, 35300:1, 40380:1, 40900:1, 49660:1} && vpw >= 925 ? 1 : 0});
            }
            
            current_view = vn;
        }
    }


    var views = [
        {
            text:["Although metropolitan America as a whole saw a notable and greater-than-expected increase in job density, trends across individual metro areas varied considerably."],
            step: function(s, c){step(0, s, c)},
            exit:function(){
                wrap.style("opacity",null);
                current_view = null;
            }
        },
        {
            text:["Out of the 94 large metro areas in our study, only 48 posted an increase in job density from 2004 to 2015. Of those, 14 metro areas saw job density increases that exceeded the 94-metro area average, led by San Francisco, Honolulu, Oxnard, Calif., Charlotte, N.C., and Albany, N.Y.", "For instance, Charlotte’s job density increased by 44% to 8,092 jobs per square mile. Most of this increase was driven by job growth patterns in already dense parts of the metro." ],
            step: function(s, c){step(1, s, c)}
        },
        {
            text: ["Meanwhile, 46 metro areas saw job density decline, though most declines were relatively modest. However, six metro areas saw declines greater than 30%, including Scranton, Pa., Cape Coral, Fla., New Haven, Conn., Rochester, N.Y., Sacramento, Calif., and Youngstown, Ohio.", "From 2004 to 2015, Cape Coral saw its job density decline by about 31% to 1,694 jobs per square mile. This decrease was largely driven by new jobs that spread out to less-dense parts of the metro area."],
            step: function(s, c){step(2, s, c)}
        }

    ]

    return {resize:redraw, views:views};

}

export default seq4;