$(function(){
    $(".drop_down").parent().mouseenter(function () { 
        $(".drop_down").show();
        $(this).children("a").children("i").addClass("icon_rotate");
        $(this).css({
            backgroundColor:"#fff",
            
        })
        
    }).mouseleave(function(){
        $(".drop_down").hide();
        $(this).children("a").children("i").removeClass("icon_rotate");
        $(this).css({
            backgroundColor:"#f8f8f8",
        })
    });
    $(".hd_map").parent().parent().mouseenter(function(){
        $(".hd_map").show();
    }).mouseleave(function(){
        $(".hd_map").hide();
    })
})