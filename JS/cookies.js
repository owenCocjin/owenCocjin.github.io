//Add statistics monitor
var pxl=document.createElement("img");
pxl.src="http://127.0.0.1:7431"+window.location.pathname;
pxl.width=0;
pxl.height=0;
document.getElementsByTagName("footer")[0].appendChild(pxl);
