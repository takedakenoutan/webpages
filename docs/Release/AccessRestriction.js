(
	function()
	{
		var id, pass;
		var AccessR = document.getElementsByTagName("AccessR");
		if(AccessR[0].attributes["id"])
		{
			id = AccessR[0].getAttribute("id");
		}
		if(AccessR[0].attributes["pass"])
		{
			pass = AccessR[0].getAttribute("pass");
		}
		var result = prompt("Id:Passwordの形式で入力してください", "Id:Pass");
		if(result != id + ":" + pass)
		{
			location.href = "https://takedakenoutan.github.io/webpages/404.html";
		}
	}
)();