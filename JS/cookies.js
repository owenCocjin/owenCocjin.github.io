//Add statistics monitor
var pxl=document.createElement("img");
pxl.src="http://155.138.133.28:7431"+window.location.pathname;
pxl.width=0;
pxl.height=0;
pxl.style.position="fixed";
pxl.style.opacity=0;
document.getElementsByTagName("footer")[0].appendChild(pxl);
