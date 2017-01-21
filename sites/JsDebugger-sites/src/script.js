function debug(){
	var str = (document.input.code.value).replace(/\r?\n/g, '<br>');
	return str;
}

function main(){
	var text = debug();
	document.getElementById("display").innerHTML = text;
	eval("try{" + text + "}catch(er){errorEvent(er);}");
}

function errorEvent(er){
	var erText = "ErrorType:" + er.name + "\nErrorMessage:" + er.message;
	document.getElementById("error").innerHTML = erText;
}