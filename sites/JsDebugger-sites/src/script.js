function debug(){
	var str = document.input.code.value;
	return str;
}

function main(){
	var text = debug();
	document.getElementById("display").innerHTML = text;
}