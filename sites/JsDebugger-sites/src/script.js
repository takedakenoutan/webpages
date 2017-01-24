function debug(){
	var str = (document.input.code.value).replace(/\r?\n/g, '<br>');
	str = str.replace(/\t/g, "&nbsp;&nbsp;&nbsp;&nbsp;");
	str = str.replace(/ /g, "&nbsp;");
	return str;
}

function main(){
	var text = debug();
	var nText = text.replace(/<br>/g, "\n");
	var cText = 'try{' + nText + '}catch(er){errorEvent(er);}';
	var scr = document.createElement("script");
	document.getElementById("display").innerHTML = nText;
	document.getElementById("error").innerHTML = "None";
	scr.innerHTML = nText;
	document.getElementById("scr").appendChild(scr);
}

function errorEvent(er){
	var erText = "<font color= 'red'>ErrorType:" + er.name + "<br>ErrorMessage:" + er.message + "</font>";
	document.getElementById("error").innerHTML = erText;
}