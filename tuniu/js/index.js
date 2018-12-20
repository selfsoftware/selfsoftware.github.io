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
    $(window).scroll(function(){
        if($(this).scrollTop()>500){
            $(".left_fix").show();
        }else{
            $(".left_fix").hide();
        }
        
    })
    $(".bottom_box").click(function(){
        $(this).animate({left:"-2000px"},600,function(){
            $(".bottom_ad").animate({left:0},400,function(){
                $(this).click(function(){
                    $(this).animate({left:"-110px"},400,function(){
                        $(".bottom_box").animate({left:"0"},600);
                    })
                })
            })
        })
    });
})