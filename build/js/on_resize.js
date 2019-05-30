var fixed_header_height = 170;

function on_resize(callback, init){
    var viewport = {};

    function set_dims(){
        viewport.w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        viewport.h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0); 

        //viewport.h = !!document.documentElement.clientHeight ? document.documentElement.clientHeight : window.innerHeight || 0; 
    }

    //initialize dimensions
    set_dims();

    //run callback right away
    if(arguments.length > 1 && !!init){
        callback.call(viewport);
    }

    function redraw(){
        set_dims();
        callback.call(viewport);
    }

    window.addEventListener("resize", redraw);

    return redraw;
}

export default on_resize;