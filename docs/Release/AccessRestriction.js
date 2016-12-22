(
	function()
	{
		var id, pass, href;
		var AccessR = document.getElementsByTagName("AccessR");
		if(AccessR[0].attributes["id"])
		{
			id = AccessR[0].getAttribute("id");
		}
		if(AccessR[0].attributes["pass"])
		{
			pass = AccessR[0].getAttribute("pass");
		}
		if(AccessR[0].attributes["href"])
		{
			href = AccessR[0].getAttribute("href");
		}
		var result = prompt("Id:Passwordの形式で入力してください", "Id:Pass");
		if(result != id + ":" + pass)
		{
			location.href = href;
		}
	}
)();