(function(){
	var xhr = new XMLHttpRequest();
	xhr.open("https://takedakenoutan.github.io/webpages/src/config.json",false);
	xhr.send(null);
	var res = JSON.parse(xhr.response)["closed"];
	if(res){
		location.href = "https://takedakenoutan.github.io/webpages/Closed.html";
	}
})();