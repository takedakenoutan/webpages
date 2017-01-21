function debug(){
	var str = (document.input.code.value).replace(/\r?\n/g, '<br>');
	return str;
}

function main(){
	var text = debug();
	document.getElementById("display").innerHTML = text;
}