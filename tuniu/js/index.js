$(function(){
    // 我的订单
    $(".drop_down").parent().mouseenter(function () { 
        $(".drop_down").show();
        $(this).children("a").children("i").addClass("icon_rotate");
        // $(this).css({
        //     backgroundColor:"#fff",
        // })
    }).mouseleave(function(){
        $(".drop_down").hide();
        $(this).children("a").children("i").removeClass("icon_rotate");
        // $(this).css({
        //     backgroundColor:"#f8f8f8",
        // })
    });
    // 网站地图
    $(".hd_map").parent().mouseenter(function(){
        $(".hd_map").show();
        $(this).children("a").children("i").addClass("icon_rotate");
    }).mouseleave(function(){
        $(this).children("a").children("i").removeClass("icon_rotate");
        $(".hd_map").hide();
    })
})