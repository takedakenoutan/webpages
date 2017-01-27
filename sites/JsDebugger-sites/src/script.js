function main(){
	var str = document.input.code.value;
	var text = string.text(str);
	var cText = string.code(str);
	var scr = document.createElement("script");
	document.getElementById("display").innerHTML = text;
	document.getElementById("error").innerHTML = "None";
	document.getElementById("scr").appendChild(scr);
	scr.innerHTML = cText;
}

var string = {
	"code" : function(str){
		var text = str + "window.onerror = function(msg, file, line, column, er){errorEvent(msg, file, line, column, er);}";
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