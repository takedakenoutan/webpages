var writing ={
	header : function(){
		let html = '<h1 id= "h-title"><a href= "https://takedakenoutan.github.io/webpages/index.html">武田家のほむぺ</a></h1>';
		document.getElementById("header").innerHTML = html;
	},
	navi : function(){
		let html = '';
		html += '<h3 id= "menutext">めにゅー</h3>';
		html += '<ul id= "menu">';
			html += '<li id= "menu01"><a href= "https://takedakenoutan.github.io/webpages/index.html">トップページ</a></li><br>';
			html += '<li id= "menu02"><a href= "https://takedakenoutan.github.io/webpages/sites/test-sites/">特に意味のないページ</a></li><br/>';
			html += '<li id= "menu03"><a href= "https://takedakenoutan.github.io/webpages/sites/info-sites/">自己紹介とか</a></li>';
			html += '<li id= "menu04"><a href= "https://takedakenoutan.github.io/webpages/sites/admin-sites/">管理ページ</a></li>';
		html += '</ul>';
		document.getElementById("navi").innerHTML = html;
	},
	address : function(){
		let html = '<div class="g-person" data-width="200" data-href="//plus.google.com/u/0/115038182927590902152" data-rel="author"></div>';
		document.getElementById("address").innerHTML = html;
	}
};