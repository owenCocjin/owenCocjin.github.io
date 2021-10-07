//Figure out how to identify each arrow button and
//Make it affect only what it needs to do
//Font-related vars
var font_size_l=document.getElementById("font_size_l");
var font_size_r=document.getElementById("font_size_r");
var logbox=document.getElementById("logbox");  //Edit this font size

//Log-related vars
var clear_button=document.getElementById("clear_logs");
var connectstatus=document.getElementById("connect");
var status_circle=document.getElementById("status_circle");
var cli=new WebSocket("ws://155.138.133.28:47698");
var cli_data=document.createElement("p");
cli_data.classList="logdata";
cli_data.appendChild(document.createElement("span"));
cli_data.childNodes[0].classList="logtext";

//Get font buttons
font_size_l.onclick=function(){
	cursize=window.getComputedStyle(logbox,null).getPropertyValue("font-size");
	cursize=parseFloat(cursize);
	logbox.style.fontSize=(cursize-1)+"px";
}
font_size_r.onclick=function(){
	cursize=window.getComputedStyle(logbox,null).getPropertyValue("font-size");
	cursize=parseFloat(cursize);
	logbox.style.fontSize=(cursize+1)+"px";
}

//Clear all logs
clear_button.onclick=function(){
	logbox.innerHTML='';
}

//WebSocket stuff here
cli.addEventListener("error",function(event){
	connectstatus.innerText="Error with server!";
	// status_circle.style.borderColor="#ba2020";
	status_circle.style.background="#ba2020";
	status_circle.style.boxShadow="0 0 5px #ba2020, 0 0 10px #ba2020";
	console.log(event);
})
cli.onopen=function(event){
	connectstatus.innerText="Connected!";
	status_circle.style.background="#22ab30";
	status_circle.style.boxShadow="0 0 10px #22ab30, 0 0 10px #22ab30";
}
cli.onclose=function(event){
	connectstatus.innerText="Connection closed!";
	status_circle.style.background="#454545";
	status_circle.style.boxShadow="none";
}
//Get data & print out data to page
cli.onmessage=function(event){
	cli_data.childNodes[0].innerText=event.data;
	logbox.appendChild(cli_data.cloneNode(true));
	//Scroll to bottom
	logbox.scrollTop=logbox.scrollHeight;
	//Send OK reply so server doesn't kill us
	cli.send("OK");
}
