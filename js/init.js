var num = 1;
var cursor = ['default','pointer','crosshair','move','text','wait','help','n-resize','s-resize','w-resize','e-resize','ne-resize','nw-resize','se-resize','sw-resize','progress'];
var cursorImg = ['1.png','2.png','3.png','4.png','5.png','6.png','7.png','8.png','9.png'];

function fieldArea(){
    var wh = $(window).height();
    var ww = $(window).width();
    $('#field').css({
        'width':ww,
        'height':wh
    });
    console.log('POW!');
}
function radioCreator(){
    var wh = $(window).height();
    var ww = $(window).width();
    $('#field').append('<input type="radio" name="demoButton" id="'+num+'" style="top: '+Math.floor(Math.random()*wh)+'px; left: '+Math.floor(Math.random()*ww)+'px" />');
    num++;
    setTimeout("radioCreator()",10); 
}
$(function bomb(){
    var rnd = Math.floor(Math.random()*9);
    $('body').css({
        'cursor':'url(images/'+ cursorImg[rnd] +'),auto'
    });
    setTimeout(bomb,100);
});

$(function(){
    //radioCreator();
    fieldArea();
    var timer = false;
    $(window).resize(function(){
        if(timer!==false){
            clearTimeout(timer);
        }
        timer = setTimeout(function(){
            fieldArea();
        },200);
    });
});