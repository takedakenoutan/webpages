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
		document.open();
		document.write("Id : " + id + "\nPass : " + pass);
		document.close();
	}
)();