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
	var erText = "<font color= 'red'>Error:" + er.message + "<br>Line:" +er.lineno+ "</font>";
	document.getElementById("error").innerHTML = erText;
	var str = document.input.code.value;
	var text = string.text(str);
	var error = string.error(text);
	var num = er.lineno - 1;
	var eText = [];
	eText.push(error.forEach(forStr, num));
	document.getElementById("display").innerHTML = eText;
}

function forStr(value, index, array){
	var str;
	if(index == value){
		str = "<font color= 'red'>" + array[index] + "</font>";
	}
	str = array[index] + "<br>";
	return str;
}