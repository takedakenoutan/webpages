(
	function()
	{
		let AccessR = document.getElementsByTagName("AccessR");
		for(var i = 0;i < AccessR[i].length;i++)
		{
			if(AccessR[i].attributes["id"])
			{
				id = AccessR[i];
			}
			if(AccessR[i].attributes["pass"])
			{
				pass = AccessR[i];
			}
		}
		window.alert("Id : " + id + "\nPass : " + pass);
	}
)();