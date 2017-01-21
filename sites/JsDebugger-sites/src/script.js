function debug(){
	var str = (document.input.code.value).replace(/\r?\n/g, '<br>');
	return str;
}

function main(){
	var text = debug();
	document.getElementById("display").innerHTML = text;
	document.getElementById("error").innerHTML = None;
	eval("try{" + text + "}catch(er){errorEvent(er);}");
}

function errorEvent(er){
	var erText = '<font color= "red">ErrorType:' + er.name + '<br>ErrorMessage:' + er.message + "</font>";
	document.getElementById("error").innerHTML = erText;
}