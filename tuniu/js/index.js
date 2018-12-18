$(function(){
    // 我的订单
    toggleItem(".drop_down");
    // 网站目录
    toggleItem(".hd_map");
    // 手机APP下载
    toggleItem(".icon_appDownLoad",true);
    function toggleItem(ele,flag){
        $(ele).parent().mouseenter(function () {
            if(flag){
                $(ele).show();
            }else{
                $(ele).show();
                $(this).children("a").children("i").addClass("icon_rotate");
            }
            
        }).mouseleave(function () {
            if(flag){
                $(ele).hide();
            }else{
                $(this).children("a").children("i").removeClass("icon_rotate");
                $(ele).hide();
            }
            
        })
    }
})