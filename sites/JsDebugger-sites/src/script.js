function main(){
	window.addEventListener("error", errorEvent(msg, file, line, column, er), false);
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
		return str.split("\n");
	}
};

function errorEvent(msg, file, line, column, er){
window.alert("errorEvent");
	var erText = "<font color= 'red'>ErrorType:" + er.name + "<br>ErrorMessage:" + er.message + "</font>";
	document.getElementById("error").innerHTML = erText;
	var str = document.input.code.value;
	var text = string.text(str);
	var error = string.error(text);
}