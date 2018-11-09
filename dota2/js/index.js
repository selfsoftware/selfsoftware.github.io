$(function() {
	//标题栏滚动固定效果
	(function() {
		$(window).scroll(function() {
			if($("html,body").scrollTop() >= $(".dota2Index-nav").height()) {

				$(".dota2Index-nav").css({
					position: "fixed",
					top: 0,
					left: 0,
					zIndex: 1000
				});
				$(".dota2Index-turnpic").css("margin-top", $(".dota2Index-nav").height());
			} else {
				$(".dota2Index-nav").css({
					position: "relative",
					zIndex: 20
				});
				$(".dota2Index-turnpic").css("margin-top", 0);
			}
			if($("html,body").scrollTop() >= 800) {
				$(".backTop").css("display", "block").on("click", function() {
					$(window).scrollTop(0);
				});
			} else {
				$(".backTop").css("display", "none");
			}

		});

	}());
	//大图片轮播
	(function() {

		var idx = 0;
		//底部小按钮图片事件
		$(".turnLi").on("mouseenter", "a", function() {
			idx = $(this).index();
			$(this).addClass("liSelect").siblings("a").removeClass("liSelect");
			$(".turnDiv").children("img").eq(idx).show().siblings().hide();

		});
		//左右箭头按钮事件
		$(".mainArrL").on("click", function() {
			idx--
			if(idx < 0) {
				idx = $(".turnDiv").children("img").length - 1;

			}
			$(".turnDiv").children("img").eq(idx).show().siblings("img").hide();
			$(".turnLi").children("a").eq(idx).addClass("liSelect").siblings("a").removeClass("liSelect");

		});

		$(".mainArrR").on("click", function() {
			idx++
			if(idx > $(".turnDiv").children("img").length - 1) {
				idx = 0;

			}
			$(".turnDiv").children("img").eq(idx).show().siblings("img").hide();
			$(".turnLi").children("a").eq(idx).addClass("liSelect").siblings("a").removeClass("liSelect");

		});
		//自动轮播，事件
		function rightClick() {
			$(".mainArrR").trigger("click");
		}
		var animTime;
		$(".dota2Index-turnpic").on("mouseenter", function() {
			clearInterval(animTime);
		});
		$(".dota2Index-turnpic").on("mouseleave", function() {
			animTime = setInterval(rightClick, 3000);

		});
	}());

	//新闻中心，栏目tab切换
	(function() {
		var idx = 0;

		$(".news-tabs").children("li").on("click", function() {
			idx = $(this).index();
			$(this).addClass("news-tabs-li").siblings("li").removeClass("news-tabs-li");
			$(this).children("a").addClass("news-tabs-a").siblings("a").removeClass("news-tabs-a");
			$(".tabs-details").children("div").eq(idx).addClass("news-display")
				.siblings("div").removeClass("news-display");
		});
	}());
	//赛事中心
	(function() {
		var idx = 0;
		$(".dota2Index-RhotDownNav>ul").on("mouseenter", "li", function() {
			idx = $(this).index();
			$(this).addClass("match-li").siblings("li").removeClass("match-li");
			$(".dota2Index-RhotDownNav>div").children("a").eq(idx).addClass("match-show")
				.siblings("a").removeClass("match-show");
		});

		var timeOut = setInterval(turn, 2000);

		function turn() {
			idx++;
			if(idx > 2) {
				idx = 0;
			}
			$(".dota2Index-RhotDownNav>ul").children("li").eq(idx).addClass("match-li").siblings("li").removeClass("match-li");
			$(".dota2Index-RhotDownNav>div").children("a").eq(idx).addClass("match-show")
				.siblings("a").removeClass("match-show");

		}
		$(".dota2Index-RhotDownNav").on("mouseenter", function() {
			clearInterval(timeOut);
		});
		$(".dota2Index-RhotDownNav").on("mouseleave", function() {
			timeOut = setInterval(turn, 2000);

		});

	}());
	//活动中心
	(function() {
		var $li = $(".dota2Index-act-Lt").children("ul").children("li");
		
		var idx = 3;
		$li.on("mouseenter", function() {
			$(this).addClass("activeLi").siblings("li").removeClass("activeLi");
			idx = $(this).index();

			$(".dota2Index-act-Ln").children("div").eq(idx).addClass("activeDivSelect").siblings().removeClass("activeDivSelect");
		});

	}());
	//版本更新
	(function() {
/*		var showConfig = [{
				left: "60px",
				top: "20px",
				height: "125px",
				zIndex: 1,
				opacity:0.4
			},
			{
				left: "95px",
				top: 0,
				height: "159px",
				zIndex: 10,
				opacity:1
			},
			{
				left: "130px",
				top: "20px",
				height: "125px",
				zIndex: 1,
				opacity:0.4
			}
		];
		var showImg= [
			{
				height:"101px"
			},
			{
				height:"135px"
			},
			{
				height:"101px"
			},
		];
		var idx = 0;
		var $li = $(".dota2Index-act-RupPic").children("ul").children("li");
		$li.on("click",function(){
			idx = $(this).index();
			$(this).addClass("liSelect").siblings("li").removeClass("liSelect");
			$(".update-pic").children("a").eq(idx).css(showConfig[1])
			.children("img").css(showImg[1]);
			$(".update-pic").children("a").eq(idx).prev("a").css(showConfig[0])
			.children("img").css(showImg[0]);
			$(".update-pic").children("a").eq(idx).next("a").css(showConfig[2])
			.children("img").css(showImg[2]);
		});*/
		
		
		
		
		
	}());
	
})
