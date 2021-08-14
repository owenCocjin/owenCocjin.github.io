//Title blink & lights on/off
function blink(title){
	var title=document.getElementById("title");
	blinkOff(title);
	setTimeout(function(){blinkOn(title)}, 40);
}  //blink()
function blinkOff(e){
	e.classList.remove("home_title");
	e.style.color="black";
}  //blinkOff()
function blinkOn(e){
	e.classList.add("home_title");
	e.style.color="white";
}  //blinkOn()

//Random title flicker on click
document.getElementById("title").onclick=function(){
	for (let i=0;i<4;i++){
		setTimeout(function(){blink()},Math.floor(Math.random()*(2000-400)+400));
	}
};
