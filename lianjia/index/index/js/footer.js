var tags = document.getElementById('tags'),
	spans = tags.getElementsByTagName('span');

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