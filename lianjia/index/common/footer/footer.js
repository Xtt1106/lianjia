/*
* @Author: 12574
* @Date:   2018-08-03 16:32:48
* @Last Modified by:   12574
* @Last Modified time: 2018-08-08 18:54:35
*/


//底部区域
var tags = document.getElementById('tags');
var spans = tags.getElementsByTagName('span');

var divs = document.getElementById('link-list').getElementsByTagName('div');
// console.log(divs.length)
for( var i = 0; i<spans.length; i++) {
	spans[i].index = i; 
	spans[i].onmouseover = function() {
		for( var i = 0; i< divs.length; i++) {
			divs[i].style.display = "none";
		}
		divs[this.index].style.display = "block";
	}
}

