function __takedake_app_JsDebugger(){
	this.codeValue = () => document.input.code.value;
	this.dispText = () => this.string.disp.call(this, this.codeValue());
	this.codeText = () => this.string.code.call(this, this.codeValue());
	this.errorText = (str) => this.string.error.call(this, str);
	this.scr = () => document.getElementById("scr");
	this.display = () => document.getElementById("display");
	this.error = () => document.getElementById("error");
	this.changeButton = () => document.getElementById("changeButton");
	window.addEventListener("error", this.errorEvent.bind(this), false);
}

__takedake_app_JsDebugger.prototype = {
	main : function(){
		let dispText = this.dispText();
		let codeText = this.codeText();
		let doScript = document.getElementById("doScript");
		if(doScript){
			this.scr().removeChild(doScript);
		}
		doScript = document.createElement("script");
		doScript.setAttribute("id", "doScript");
		this.display().innerHTML = dispText;
		this.error().innerHTML = "None";
		doScript.innerHTML = codeText;
		this.scr().appendChild(doScript);
	},
	string : {
		disp : function(str){
			return str
				.replace(/\r?\n/g, '<br>')
				.replace(/\t/g, "&nbsp;&nbsp;&nbsp;&nbsp;")
				.replace(/ /g, "&nbsp;");
		},
		code : function(str){
			return str;
		},
		error : function(str){
			return str.split("<br>");
		},
	},
	errorEvent : function(er){
		let errorText = "<font color= 'red'>Error:" + er.message + "<br>Line:" +er.lineno+ "</font>";
		this.error().innerHTML = errorText;
		let dispError = this.errorText((this.dispText()).replace(/&nbsp;/g, "\u00a0"));
		let num = er.lineno - 1;
		this.display().innerHTML = "";
		for(let i = 0; i < dispError.length; i++){
			if(i == num){
				let strong = document.createElement("strong");
				let font = document.createElement("font");
				font.setAttribute("color", "red");
				let errorText = document.createTextNode(dispError[i]);
				font.appendChild(errorText);
				strong.appendChild(font);
				this.display().appendChild(strong);
			}else{
				let dispText = document.createTextNode(dispError[i]);
				this.display().appendChild(dispText);
			}
			if(i != (error.length - 1)){
				let br = document.createElement("br");
				this.display().appendChild(br);
			}
		}
	},
	changeDisp : function(){
		let disp = this.display();
		let error = this.error();
		let btn = this.changeButton();
		disp.style.display = "none";
		error.style.display = "none";
		if(btn.value == "Result."){
			btn.value = "Error.";
			error.style.display = "block";
		}else if(btn.value == "Error."){
			btn.value = "Result.";
			disp.style.display = "block";
		}
	},
	setTab : function(){
		let tab = "\t";
		let str = this.codeValue();
		let cursolePos = document.input.code.selectionStart;
		let leftText = str.substr(0, cursolePos);
		let rightText = str.substr(cursolePos, str.length);
		document.input.code.value = leftText + tab + rightText;
	}
};

var _takedake_app_JsDebugger = new __takedake_app_JsDebugger();