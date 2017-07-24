var svrsale=document.getElementById('server-sale');
var svraction=document.getElementById('server-action');
var lis1=svrsale.getElementsByTagName('li');
var lis2=svraction.getElementsByTagName('li');
var exmimg=document.getElementById('exmimg');

var time1 = null;
var time2 = null;
window.onscroll = function(){ 
     var t = document.documentElement.scrollTop || document.body.scrollTop;
     // console.log(t);
     function move(endP,obj){
		//					当距离顶部大于等于200px时让按钮显示
		var maxT=80;
		var t=0;
		var start=obj.offsetLeft;
		var end=endP;
		var change=end-start;
		clearInterval(time1);
		time1=setInterval(function(){
		t++;
		if (t>=maxT) {
			clearInterval(time1);
			}
			lis1[0].style.left=Tween.Bounce.easeOut(t,start,change,maxT)+"px";
			lis1[1].style.left=Tween.Bounce.easeOut(t,start,change,maxT)+"px";
			},10)
				}

	 function move2(endP,obj){
		//					当距离顶部大于等于200px时让按钮显示
		var maxT=80;
		var t=0;
		var start=obj.offsetLeft;
		var end=endP;
		var change=end-start;
		clearInterval(time2);
		time2=setInterval(function(){
		t++;
		if (t>=maxT) {
			clearInterval(time2);
			}
			lis2[0].style.left=Tween.Bounce.easeOut(t,start,change,maxT)+"px";
			lis2[1].style.left=Tween.Bounce.easeOut(t,start,change,maxT)+"px";
			},10)
				}
	if (t<600) {
		move(0,lis1[0]);
     	move2(1500,lis2[1]);
	}
     if (t>=1000) {
     	move(500,lis1[0]);
     	move2(990,lis2[1]);
	exmimg.setAttribute("class"," ");
     }if (t>=1600) {
     	move(0,lis1[0]);
     	move2(1500,lis2[1]);
     	exmimg.setAttribute("class","animated swing");
     }
     if (t>=2000) {
     	exmimg.setAttribute("class"," ");
     }
 }

 // 服务内容效果
 var neirong=document.getElementById('neirong');
 neirong.onclick=function(){
 	neirong.setAttribute("class","animated wobble");
 }
