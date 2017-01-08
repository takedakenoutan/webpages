function dia(){
	var result=window.prompt("アクセストークンを入力してください");
	if(result!=null){
		window.prompt("コピーしてください",'javascript:(function(key){var xhr=new XMLHttpRequest();xhr.open("GET","https://api-ssl.bitly.com/v3/shorten?access_token="+key+"&longUrl="+location.href,false);xhr.send(null);var res=JSON.parse(xhr.response)["data"]["url"];window.prompt("URLShortener",res);})("'+result+'")');
	}else{
		alert("アクセストークンが入力されていません");
	}
}