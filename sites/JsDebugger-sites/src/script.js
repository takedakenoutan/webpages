var _takedake_app_JsDebugger = (function(){
	var _main = function(){
		window.addEventListener("error", _takedake_app_JsDebugger.errorEvent, false);
		var str = document.input.code.value;
		var text = _takedake_app_JsDebugger.string.text(str);
		var cText = _takedake_app_JsDebugger.string.code(str);
		var scr = document.createElement("script");
		document.getElementById("display").innerHTML = text;
		document.getElementById("error").innerHTML = "None";
		scr.innerHTML = cText;
		document.getElementById("scr").appendChild(scr);
	};
	var _string = (function(){
		var _code = function(str){
			var text = str;
			return text;
		};
		var _text = function(str){
			return str.replace(/\r?\n/g, '<br>')
					  .replace(/\t/g, "&nbsp;&nbsp;&nbsp;&nbsp;")
					  .replace(/ /g, "&nbsp;");
		};
		var _error = function(str){
			return str.split("<br>");
		};
		return {
			code : _code,
			text : _text,
			error : _error
		};
	})();
	var _errorEvent = function(er){
		var erText = "<font color= 'red'>Error:" + er.message + "<br>Line:" +er.lineno+ "</font>";
		document.getElementById("error").innerHTML = erText;
		var str = document.input.code.value;
		var text = _takedake_app_JsDebugger.string.text(str).replace(/&nbsp;/g, "\u00a0");
		var error = _takedake_app_JsDebugger.string.error(text);
		var num = er.lineno - 1;
		var disp = document.getElementById("display");
		disp.innerHTML = "";
		for(var i = 0;i < error.length;i++){
			if(i == num){
				var strong = document.createElement("strong");
				var font = document.createElement("font");
				font.setAttribute("color", "red");
				var eStr = document.createTextNode(error[i]);
				font.appendChild(eStr);
				strong.appendChild(font);
				disp.appendChild(strong);
			}else{
				var dText = document.createTextNode(error[i]);
				disp.appendChild(dText);
			}
			if(i != (error.length) - 1){
				var br = document.createElement("br");
				disp.appendChild(br);
			}
		}
	};
	return {
		main : _main,
		string : _string,
		errorEvent : _errorEvent,
	};
})();