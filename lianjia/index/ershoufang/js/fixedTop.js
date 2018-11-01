/*
* @Author: 12574
* @Date:   2018-08-06 19:16:49
* @Last Modified by:   12574
* @Last Modified time: 2018-08-06 19:36:10
*/

var headerTop = $(".header").height();
// console.log(headerTop);
$(window).scroll(function(){
	var curtop = $(window).scrollTop();
	if (curtop > headerTop) {
		$("#menu").addClass("fixed");
	}else{
		$("#menu").removeClass("fixed");
	}
})