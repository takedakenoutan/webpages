function header(){
	let text = '<h1 id= "h-title"><a href= "https://takedakenoutan.github.io/webpages/index.html">武田家のほむぺ</a></h1>';
	document.getElementById("header").innerHTML = text;
},
function navi(){
	let text = '';
	text += '<h3 id= "menutext">めにゅー</h3>';
	text += '<ul id= "menu">';
		text += '<li id= "menu01"><a href= "https://takedakenoutan.github.io/webpages/index.html">トップページ</a></li><br>';
		text += '<li id= "menu02"><a href= "https://takedakenoutan.github.io/webpages/sites/test-sites/">特に意味のないページ</a></li><br/>';
		text += '<li id= "menu03"><a href= "https://takedakenoutan.github.io/webpages/sites/info-sites/">自己紹介とか</a></li><br>';
		text += '<li id= "menu04"><a href= "https://takedakenoutan.github.io/webpages/sites/admin-sites/">管理ページ</a></li><br>';
		text += '<li id= "menu05"><a href= "https://takedakenoutan.github.io/webpages/sites/AccessRestriction-sites/">AccessRistriction</a></li>';
	text += '</ul>';
	document.getElementById("navi").innerHTML = text;
},
function address(){
	let text = '<div class="g-person" data-width="200" data-href="//plus.google.com/u/0/115038182927590902152" data-rel="author"></div>';
	document.getElementById("address").innerHTML = text;
}