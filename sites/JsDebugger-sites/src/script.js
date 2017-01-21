function debug(){
	var str = (document.input.code.value).replace(/\r?\n/g, '<br>');
	return str;
}

function main(){
	var text = debug();
	var cText = "try{" + text + "}catch(er){errorEvent(er);}";
	var scr = document.createElement("script");
	document.getElementById("display").innerHTML = Text;
	scr.innerHTML = cText;
	document.getElementById("scr").appendChild(scr);
	document.getElementById("error").innerHTML = None;
}

function errorEvent(er){
	var erText = '<font color= "red">ErrorType:' + er.name + '<br>ErrorMessage:' + er.message + "</font>";
	document.getElementById("error").innerHTML = erText;
}