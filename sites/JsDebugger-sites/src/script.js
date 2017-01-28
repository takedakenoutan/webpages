function main(){
	window.addEventListener("error", errorEvent, false);
	var str = document.input.code.value;
	var text = string.text(str);
	var cText = string.code(str);
	var scr = document.createElement("script");
	document.getElementById("display").innerHTML = text;
	document.getElementById("error").innerHTML = "None";
	scr.innerHTML = cText;
	document.getElementById("scr").appendChild(scr);
}

var string = {
	"code" : function(str){
		var text = str;
		return text;
	},
	"text" : function(str){
		return str.replace(/\r?\n/g, '<br>')
				  .replace(/\t/g, "&nbsp;&nbsp;&nbsp;&nbsp;")
				  .replace(/ /g, "&nbsp;");
	},
	"error" : function(str){
		return str.split("<br>");
	}
};

var errorEvent = function(er){
	var div = document.getElementById("error");
	div.innerHTML = "";
	var br = document.createElement("br");
	var font = document.createElement("font");
	font.setAttribute("color", "red");
	var eMessage.create.TextNode("Error:" + er.message);
	var eLine.create.TextNode("Line:" + er.lineno);
	font.appendChild(eMessage);
	font.appendChild(br);
	font.appendChild(eLine);
	div.appendChild(font);
	var str = document.input.code.value;
	var text = string.text(str);
	var error = string.error(text);
	var num = er.lineno - 1;
	var disp = document.getElementById("display");
	disp.innerHTML = "";
	for(var i = 0;i < error.length;i++){
		if(i == num){
			var strong = document.createElement("strong");
			var eStr = document.createTextNode(error[i]);
			font.appendChild(eStr);
			strong.appendChild(font);
			disp.appendChild(strong);
		}else{
			var dText = document.createTextNode(error[i]);
			disp.appendChild(dText);
		}
		if(i != (error.length) - 1){
			disp.appendChild(br);
		}
	}
}