function blink(title){
	var title=document.getElementById("title");
	blinkOff(title);
	setTimeout(function(){blinkOn(title)}, 40);
}  //blink()

function blinkOff(e){
	e.style.textShadow="0px 0px 0px black";
	e.style.color="black";
}  //blinkOff()
function blinkOn(e){
	e.style.textShadow="0 0 4px white,0px 5px 10px #FF6EC7,0px 5px 23px #FF6EC7,0px 5px 37px #FF6EC7,0 5px 76px #ff6ec7,0 5px 100px #ff6ec7";
	e.style.color="white";
}  //blinkOn()

document.getElementById("title").onclick=function(){
	for (let i=0;i<4;i++){
		setTimeout(function(){blink()},Math.floor(Math.random()*(2000-400)+400));
	}
};
