$(function () {
    // 我的订单
    toggleItem(".drop_down");
    // 网站目录
    toggleItem(".hd_map");
    // 手机APP下载
    toggleItem(".icon_appDownLoad", true);

    function toggleItem(ele, flag) {
        $(ele).parent().mouseenter(function () {
            if (flag) {
                $(ele).show();
            } else {
                $(ele).show();
                $(this).children("a").children("i").addClass("icon_rotate");
            }

        }).mouseleave(function () {
            if (flag) {
                $(ele).hide();
            } else {
                $(this).children("a").children("i").removeClass("icon_rotate");
                $(ele).hide();
            }

        })
    }
    $(".icon_erweima").parent().mouseenter(function () {
        $(".icon_erweima").show();
        $(".icon_weixin").css("background-position", "-92px -7px");
    }).mouseleave(function () {
        $(".icon_erweima").hide();
        $(".icon_weixin").css("background-position", "-63px -49px");
    })
    // 固定的3个导航信息栏
    // 左边
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $(".left_fix").show();
        } else {
            $(".left_fix").hide();
        }

    })
    // 底部
    $(".bottom_box").click(function () {
        $(this).animate({
            left: "-2000px"
        }, 600, function () {
            $(".bottom_ad").animate({
                left: 0
            }, 400, function () {
                $(this).click(function () {
                    $(this).animate({
                        left: "-110px"
                    }, 400, function () {
                        $(".bottom_box").animate({
                            left: "0"
                        }, 600);
                    })
                })
            })
        })
    });
    // 登录，注册按钮事件
    $(".login").click(function(){
        loginIn();
        showLoading(".login_tab", ".login_div");
    });
    $(".regist").click(function(){
        loginIn();
        showLoading(".regist_tab", ".regist_div");
    });
    $(".loginNow").click(function(){
        showLoading(".login_tab", ".login_div");
    });
    $(".registNow").click(function(){
        showLoading(".regist_tab", ".regist_div");
    });
    $(".login_regist").click(function(){
        $(this).animate({
            width: 0,
            height: 0
        }, 300,function(){
            $(this).css("display","none");
        });
    });
   
    $(".lr_page").click(function(e){
        if (e.stopPropagation) {
            e.stopPropagation();
        } else {
            e.cancelBubble = true;
        }
    });
    function loginIn() {
        $(".login_regist").css("display", "block").animate({
            width: "100%",
            height: "100%"
        }, 300);
       
    };
    // 
    $(".login_tab").click(function () {
        showLoading(".login_tab", ".login_div");
    });
    $(".regist_tab").click(function () {
        showLoading(".regist_tab", ".regist_div");
        
    });
    // 关闭按钮
    $(".closebtn").click(function () {
        $(".login_regist").animate({
            width: 0,
            height: 0
        }, 300,function(){
            $(this).css("display", "none");
        });
    });
    // 登录，注册选择
    function showLoading(selectTab, selectDiv) {
        $(selectTab).addClass("choosed_tab").siblings("div").removeClass("choosed_tab");
        $(selectDiv).addClass("choosed_div").siblings("div").removeClass("choosed_div");
        
    };
    // 登录验证
    
    
    $(".registNow").parent().siblings("button").click(function(){
        // console.log($(".rbInput").prop("checked"));
        
        let name,pass;
        if($(".rbInput").prop("checked")){
            name = $("#userName").val();
            pass = $("#Password1").val();
            localStorage.setItem("username",name);
            localStorage.setItem("password",pass);
            console.log(11);
            name = localStorage.getItem("username");
            pass = localStorage.getItem("password");
        }else{
            name = "";
            pass = "";
            localStorage.removeItem("username");
            localStorage.removeItem("password");
        }
    });


})