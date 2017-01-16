function header(){
	var text = '<h1 id= "h-title"><a href= "https://takedakenoutan.github.io/webpages/index.html">武田家のほむぺ</a></h1>';
	document.getElementById("header").innerHTML = text;
}
function navi(){
	var text = '';
	text += '<h3 id= "menutext">めにゅー</h3>';
	text += '<ul id= "menu">';
		text += '<li id= "menu01"><a href= "https://takedakenoutan.github.io/webpages/index.html">トップページ</a></li><br>';
		text += '<li id= "menu02"><a href= "https://takedakenoutan.github.io/webpages/sites/test-sites/">特に意味の...</a></li><br/>';
		text += '<li id= "menu03"><a href= "https://takedakenoutan.github.io/webpages/sites/info-sites/">自己紹介とか</a></li><br>';
		text += '<li id= "menu04"><a href= "https://takedakenoutan.github.io/webpages/sites/admin-sites/">管理ページ</a></li><br>';
		text += '<li id= "menu05"><a href= "https://takedakenoutan.github.io/webpages/sites/AccessRestriction-sites/">AccessRestriction</a></li><br>';
		text += '<li id= "menu06"><a href= "https://takedakenoutan.github.io/webpages/sites/URLShortener-sites/">URLShortener</a></li>';
	text += '</ul>';
	document.getElementById("navi").innerHTML = text;
}
function address(){
	var text = '';
	text += '<div class="g-person" data-width="200" data-href="//plus.google.com/u/0/115038182927590902152" data-rel="author"></div>';
	text += '<p>ソースコードは<a href= "https://github.com/takedakenoutan/webpages">こちら</a></p>';
	document.getElementById("address").innerHTML = text;
}