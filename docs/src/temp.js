var writing ={
	header : function(){
		let html = '<h1 id= "h-title">武田家のほむぺ</h1>';
		document.getElementById("header").innerHTML = html;
	},
	navi : function(){
		let html = '<h3 id= "menutext">めにゅー</h3><ul id= "menu"><li id= "menu01"><a href="index.html">トップページ</a></li></ul>';
		document.getElementById("navi").innerHTML = html;
	},
	address : function(){
		let html = '<div class="g-person" data-width="200" data-href="//plus.google.com/u/0/115038182927590902152" data-rel="author"></div>';
		document.getElementById("address").innerHTML = html;
	}
};