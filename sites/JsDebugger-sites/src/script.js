function main(){
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
		var text = 'try{' + str + '}catch(er){errorEvent(er);}';
		return text;
	},
	"text" : function(str){
		return str.replace(/\r?\n/g, '<br>')
				  .replace(/\t/g, "&nbsp;&nbsp;&nbsp;&nbsp;")
				  .replace(/ /g, "&nbsp;");
	}
};

function errorEvent(er){
	var erText = "<font color= 'red'>ErrorType:" + er.name + "<br>ErrorMessage:" + er.message + "</font>";
	document.getElementById("error").innerHTML = erText;
}