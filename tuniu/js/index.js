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
    $(".icon_erweima").parent().mouseenter(function(){
        $(".icon_erweima").show();
        $(".icon_weixin").css("background-position","-92px -7px");
    }).mouseleave(function(){
        $(".icon_erweima").hide();
        $(".icon_weixin").css("background-position","-63px -49px");
    })
    // 固定的3个导航信息栏
    $(".left_fix>li:odd").on("click",function(){
        console.log(this);
        
        $(this).addClass("item_hover").siblings().removeClass("item_hover");
       let index = $(this).index();
       if($(this).hasClass("item_hover")){
        switch (index) {
            case 0:
                $(this).css("background-color","#dd5a5a");
                break;
             case 2:
             $(this).css("background-color","#eee568");
                break;
             case 4:
             $(this).css("background-color","#b5eea4");
                break;
             case 6:
             $(this).css("background-color","#8bf0d1");
                break;
             case 8:
             $(this).css("background-color","#2da6ec");
                break;
        }
       }
      
    })
})