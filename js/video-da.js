  console.log($("#comb"));
  // console.log($(".phone-list li")[0]);
  // var asd=$(".phone-list li")[0];
  // console.log(asd);
 $(window).scroll(function(event){
 	var winPos = $(window).scrollTop();
  if (winPos<300) {
 $('#comb').removeClass('animated zoomInDown');
  // console.log( $('#comb').attr('class'));
  }
  if (winPos>=300) {
 $('#comb').addClass('animated zoomInDown');
  // console.log( $('#comb').attr('class'));
  }
  if (winPos<=700) {
  		$("#phoneli1,#phoneli2 ,#phoneli3").removeClass('animated rollIn');
  }
  if (winPos>=700) {
  	$("#phoneli1,#phoneli2 ,#phoneli3").addClass('animated rollIn');
  	// asd.addClass('animated zoomInDown');
  }
 });