function debug(){
	var str = (document.input.code.value).replace(/\r?\n/g, '<br>');
	return str;
}

function main(){
	var text = debug();
	var nText = text.replace(/<br>/g, "\n");
	var cText = 'try{' + nText + '}catch(er){errorEvent(er);}';
	var scr = document.createElement("script");
	document.getElementById("display").innerHTML = cText;
	scr.innerHTML = nText;
	document.getElementById("scr").appendChild(scr);
	document.getElementById("error").innerHTML = None;
}
function errorEvent(er){
var erText = '<font color= "red">ErrorType:' + er.name + '<br>ErrorMessage:' + er.message + '</font>';
document.getElementById("error").innerHTML = erText;
}