var writing ={
	header : function(){
		let html = '<h1 id= "h-title">武田家のほむぺ</h1>';
		document.getElementById("header").innerHTML = html;
	},
	navi : function(){
		let html = '';
		html += '<h3 id= "menutext">めにゅー</h3>';
		html += '<ul id= "menu">';
			html += '<li id= "menu01"><a href="https://takedakenoutan.github.io/webpages/index.html">トップページ</a></li><br>';
			html += '<li id= "menu02">特に意味のないページ</li>';
		html += '</ul>';
		document.getElementById("navi").innerHTML = html;
	},
	address : function(){
		let html = '<div class="g-person" data-width="200" data-href="//plus.google.com/u/0/115038182927590902152" data-rel="author"></div>';
		document.getElementById("address").innerHTML = html;
	}
};