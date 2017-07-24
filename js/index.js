var head=document.getElementById('head-time');
var d = new Date();
var year = d.getFullYear();
var month = d.getMonth() + 1; // 记得当前月是要+1的
var dt = d.getDate();
var today = year + "-" + month + "-" + dt;
head.innerHTML=today;

// swiper插件
    var swiper = new Swiper('.swiper-container', {
           pagination: '.swiper-pagination',
           nextButton: '.swiper-button-next',
           prevButton: '.swiper-button-prev',
           paginationClickable: true,
           spaceBetween: 30,
           centeredSlides: true,
           autoplay: 2500,
           autoplayDisableOnInteraction: false
      });
// JQ 动画
// 介绍动画
$(".main-int").find("img").eq(0).hover(function(){
    $(this).addClass("animated rubberBand");
    setTimeout(function(){
         $(".int-show").find("img").eq(0).addClass("animated rubberBand");
    },400);
},function(){
    $(this).removeClass("animated rubberBand"); 
     $(".int-show").find("img").eq(0).removeClass("animated rubberBand");
})
// 案例动画
$(".emp-main img").eq(0).hover(function(){
    $(this).addClass("animated bounce");
},function(){
 $(this).removeClass("animated bounce")
});
$(".emp-pic2").hover(function(){
  $(".sanjiao-1").removeClass("animated rollIn");
  $(".sanjiao-2").removeClass("animated rollIn");
   $(".sanjiao-3").removeClass("animated rollIn");
},function(){ 
   setTimeout(function(){
$(".sanjiao-1").addClass("animated rollIn");
   },400)
   setTimeout(function(){
    $(".sanjiao-2").addClass("animated rollIn");
   },800)
   setTimeout(function(){
    $(".sanjiao-3").addClass("animated rollIn");
   },1400)
    
});
//视频广告 Hover 效果
$("#video-img").hover(function(){
	$(this).addClass("animated flash");
	setTimeout(function(){
		$(".video-list img").eq(0).addClass("animated bounceInLeft");
	},500);
	setTimeout(function(){
		$(".video-list img").eq(1).addClass("animated bounceInLeft");
	},1000);
	setTimeout(function(){
		$(".video-list img").eq(2).addClass("animated bounceInLeft");
	},1500);
	
},function(){
	$(this).removeClass("animated flash")
	$(".video-list img").removeClass("animated bounceInLeft");
});

//判断窗口滚动
$(document).scroll(function(){
	var st=$(document).scrollTop();
    if(st>=2300&&st<=3000){
    	$(".tishi").addClass("animated slideInRight");
    	setTimeout(function(){
    		$(".cen-int p").eq(1).addClass("animated zoomIn");
    	},600);
    	setTimeout(function(){
    		$(".cen-int p").eq(2).addClass("animated zoomIn");
    	},1200)
    }else{
    	$(".tishi").removeClass("animated slideInRight");
    	$(".cen-int p").eq(1).removeClass("animated zoomIn");
    	$(".cen-int p").eq(2).removeClass("animated zoomIn");
    }
    
})