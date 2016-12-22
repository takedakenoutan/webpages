(
	function()
	{
		let AccessR = document.getElementsByTagName("AccessR");
		for(var i = 0;i < AccessR[i].length;i++)
		{
			if(AccessR[i].attributes("id"))
			{
				var id = AccessR[i];
			}
			if(AccessR[i].attributes("pass"))
			{
				var pass = AccessR[i];
			}
		}
		window.confirm("Id : " + id + "\nPass : " + pass);
	}
)();