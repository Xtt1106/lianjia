/*
* @Author: 12574
* @Date:   2018-08-08 16:52:42
* @Last Modified by:   12574
* @Last Modified time: 2018-08-08 19:00:55
*/
window.onload = function(){

	//登录
	var userLogin = document.getElementById("user-login");
	var container = document.getElementById("container");
	var login = document.getElementById("login1");
	var closeLogin = document.getElementById("close-login");
	closeLogin.onclick = function() {
		login.style.display = "none";
		container.style.display = "none";
	}
	userLogin.onclick = function() {
			container.style.display = "block";
			login.style.display = "block"
	}

	// 广告区域
	var ad = document.getElementById("ad");
	var close = document.getElementById("close");
	close.onclick = function() {
		ad.style.display = "none";
	}

	// 回到顶部
	var top = document.getElementById("top");
		top.onclick = function() {
			var scrollToTop = window.setInterval(function() {
			    var pos = window.pageYOffset;

			    if ( pos > 0 ) {
			        window.scrollTo( 0, pos - 20 ); 
			    } else {
			        window.clearInterval( scrollToTop );
			    }
			}, 5);
		}


	//侧边栏
	main();
	function main() {
		var closeBtn = document.getElementById('close'),
			consultTop = document.getElementById('consult-top'),
			consult = document.getElementById('consult');

		closeBtn.onclick = footerClose;
		consultTop.onclick = consultUp;
	}

	function footerClose() {
		var footer = document.getElementById('fixed-footer');
		footer.style.display = "none";
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
	




}
