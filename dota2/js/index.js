$(function(){
	
	$(window).scroll(function(){
		if($("html,body").scrollTop()>=$(".dota2Index-nav").height()){
			console.log($("html,body").scrollTop());
			$(".dota2Index-nav").css({
				position:"fixed",
				top:0,
				left:0,
				zIndex:1000
			});
			$(".dota2Index-turnpic").css("margin-top",$(".dota2Index-nav").height());
		}else{
			$(".dota2Index-nav").css({
				position:"relative",
				zIndex:20
			});
			$(".dota2Index-turnpic").css("margin-top",0);
		}
		if($("html,body").scrollTop()>=800){
			$(".backTop").css("display","block").on("click",function(){
				$(window).scrollTop(0);
			});
		}else{
			$(".backTop").css("display","none");
		}
		
	});
	$(".turnLi").children("a")
	
})