var pc1 = document.getElementById('pc1');
var dirtxt1 = document.getElementById('dir-pos-txt');
var szdata = document.getElementById('sz-data-2');
var time1 = null;
var time = null;
window.onscroll = function() {
	var t = document.documentElement.scrollTop || document.body.scrollTop;
	if(t >= 500) {
		moveIn(pc1, 100);
	}
	if(t >= 1000) {
		moveIn(pc1, -1000);
	}
	if(t >= 1600) {
		moveIn(dirtxt1, -950);
	}
	if(t >= 2100) {
		moveIn(szdata, -780);
	}
	if(t >= 2300) {
		moveIn(dirtxt1, -150);
	}

	if(t >= 2600) {
		moveIn(szdata, 520);
	}

}
function moveIn(obj, endP) {
	var t = 0;
	var maxT = 50;
	var start = obj.offsetLeft;
	var end = endP;
	var change = end - start;
	clearInterval(time1);
	time1 = setInterval(function() {
		t++;
		if(t >= maxT) {
			clearInterval(time1);
		}
		obj.style.left = Tween.Elastic.easeOut(t, start, change, maxT) + "px";
	}, 30)
}