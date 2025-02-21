
	//点击导航按钮
	  $(".hamburger").click(function(){
	    $(this).toggleClass("is-active");
	  });
	//点击回到顶部	
	  $(".nav-top").click(function(){
			 $("html,body").animate({scrollTop:0}, 500);
	  });
	//锚点
	 $("#top").click(function() {
        $("html, body").animate({
            scrollTop: $(".shiming").offset().top }, {duration: 500,easing: "swing"});
        return false;
    });
    
     $("#about").click(function() {
        $("html, body").animate({
            scrollTop: $(".yixiang").offset().top }, {duration: 500,easing: "swing"});
        return false;
	});
    
    $("#statement").click(function() {
        $("html, body").animate({
            scrollTop: $(".statement").offset().top }, {duration: 500,easing: "swing"});
        return false;
    });
    
    $("#menu").click(function() {
        $("html, body").animate({
            scrollTop: $(".jiazhi").offset().top }, {duration: 500,easing: "swing"});
        return false;
    });
    
    $("#access").click(function() {
        $("html, body").animate({
            scrollTop: $(".libai").offset().top }, {duration: 500,easing: "swing"});
        return false;
    }); 
    
    $("#contact").click(function() {
        $("html, body").animate({
            scrollTop: $(".lianxi").offset().top }, {duration: 500,easing: "swing"});
        return false;
    });
    
	//导航点击动画
	var _width = $(window).width(); 
 	$(".hamburger").on("click",function(){
 		if($(this).hasClass("is-active")){
 			var cdWrap = $(".cd");
 			var cdHeight = cdWrap.height();
 			var cdHeiAuto = cdWrap.css("height","auto").height();
 			cdWrap.height(cdHeight).animate({height:cdHeiAuto});
 			$(".nav-text").html("close");
 		}else{
 			$(".cd").animate({
 				height:"0"
 			})
 			$(".nav-text").html("MENU");
 		}
 	})
 	$(window).resize(function(){
 		if($(".hamburger").hasClass("is-active")){
 			var cdWrap = $(".cd");
 			var cdHeight = cdWrap.height();
 			var cdHeiAuto = cdWrap.css("height","auto").height();
 			cdWrap.height(cdHeight).animate({height:cdHeiAuto});
 			cdWrap.css("height",cdHeiAuto);
 		}
 	})
     
 //可视距离淡出动画效果
     $(window).scroll(function(){
     	$(".start").each(function(){
     		var boxT = $(this).offset().top;
     		var winH = $(window).height();
     		var scrollTo = $(window).scrollTop();
     		if (scrollTo > boxT - winH + winH/4) {
     			$(this).css("opacity","1");
     			$(this).addClass("moveDuration");
     		}
     	})
     })
     
 //滑动到特定位置时,图片固定定位    
//  	var top1=$(".scroll").offset().top;
//
// 　　　　$(window).scroll(function(){
// 
// 　　　　　　var  win_top=$(this).scrollTop();
//			var winH=$(window).height()
//　　　　　　var  top=$(".scroll").offset().top;
//			var height=$(".scroll").outerHeight();
//			var win=top-winH+height;
//
//console.log(top);
//console.log(top1);
//
//
// 　　　　　　if(win_top>=top1-winH+height){
// 
//　　　　　　　　$(".scroll").addClass("sfixed");
// 
//　　　　　　}
// 
// 　　　　　else{
// 
//　　　　　　　　$(".scroll").removeClass("sfixed");
//
// 　　　　　　}
// 
// 　　　　})
     
