window.onload = main;

function main() {
	var consultTop = document.getElementById('consult-top'),
		consult = document.getElementById('consult');

	consultTop.onclick = consultUp;
}

function consultUp() {
	var consultTop = document.getElementById('consult-top'),
		consult = document.getElementById('consult');
	consultTop.onclick = consultDown;
	consultTop.style.backgroundImage = "url('images/lianjiaim.png')";
	consult.style.bottom = 0;
}

function consultDown() {
	var consultTop = document.getElementById('consult-top'),
		consult = document.getElementById('consult');
	consultTop.onclick = consultUp;
	consultTop.style.backgroundImage = null;
	consult.style.bottom = '-394' + 'px';
}