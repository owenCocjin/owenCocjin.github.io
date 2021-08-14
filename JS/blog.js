//Loop through paragraphs, load sequentially
function fadeInParagraphs(){
	var paragraphs=document.getElementById("big_wrapper").children;
	for(i=0;i<paragraphs.length;++i){
		setTimeout(function(para){para.classList.add("fader");}, 250*i, paragraphs[i]);
	}//for()
}
setTimeout(fadeInParagraphs, 500);
