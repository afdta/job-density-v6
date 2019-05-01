function on_resize(callback){
    var viewport = {};

    function set_dims(){
        viewport.w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        viewport.h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0); 
    }

    //initialize dimensions
    set_dims();

    window.addEventListener("resize", function(){
        set_dims();
        callback.call(viewport);
    });
}

export default on_resize;