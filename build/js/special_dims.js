export default function special_dims(thiz){
    var w = thiz.vw < 320 ? 320 : (thiz.vw > 930 ? 930 : thiz.vw);

    //remove padding
    w = w - 30;

    var h = thiz.gh - 350;

    //enforce minimum
    if(h < 200){h = 200};
    

    return {h:h, w:w}
}