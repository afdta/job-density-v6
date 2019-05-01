import on_resize from './on_resize.js';

export default function seq0(container, i){
    //one time setup
    var wrap = d3.select(container);

    wrap.style("min-height","400px").style("min-width","300px").style("margin","0px auto")
        .style("background-color","red").style("opacity","0").style("z-index","0");

    var svg = wrap.append("svg").attr("width", "100%").attr("viewBox", "0 0 320 240");

    var g_y_axis = svg.append("g");
    var g_x_axis = svg.append("g");

    var scale_y = d3.scaleLinear();
    var scale_x = d3.scaleLinear();

    var axis_y = d3.axisLeft(scale_y);
    var axis_x = d3.axisBottom(scale_x);

    var aspect = 3/4;

    //STAND-IN DATA -- NEED TO UPDATE
    var data = {};
    data.actual = [0,0.004111804179924,0.023425608208825,0.041943400552545,0.103975162170109,0.149190290739087,0.160133791729522,0.19532897600144,0.205413549495625,0.242867665801614,0.261524962671921,0.295310910880869];
    data.actual4 = data.actual.map(function(d,i){i*1.2*d});
    data.actual90 = data.actual.map(function(d,i){return i*0.25*d});

    //set extent

    //redraw


    var views = [
        {
            text:"Lorem ipsum 0",
            enter:function(){
                wrap.style("opacity","1");
            },
            step:function(s){
                
            },
            exit:function(){

            }
        },

        {
            text:"Lorem ipsum 1",
            enter:function(){

            },
            step:function(s){

            },
            exit:function(){

            }
        },

        {
            text:"Lorem ipsum 2",
            enter:function(){

            },
            step:function(s){

            },
            exit:function(){

            }
        },

        {
            text:"Lorem ipsum",
            enter:function(){

            },
            step:function(s){
                wrap.style("opacity", s >=1 ? "0" : "1");
                console.log(s);
            },
            exit:function(){
                
            }
        }
    ]

    //static, non-scrollytelling
    if(arguments.length > 1){
        views[i].enter.call(wrap.append("p").html(views[i].text).node());
    }

    return views;

}