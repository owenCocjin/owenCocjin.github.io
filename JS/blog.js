//Loop through paragraphs, load sequentially
function fadeInParagraphs(){
	var paragraphs=document.getElementById("big_wrapper").children;
	for(i=0;i<paragraphs.length;++i){
		setTimeout(function(para){para.classList.add("fader");}, 150*i, paragraphs[i]);
	}//for()
}
setTimeout(fadeInParagraphs, 200);

//Increment all resource lists
var res_lists=document.getElementsByClassName("res_list");
console.log(res_lists);
for(i=0;i<res_lists.length;++i){
	var curlist=res_lists[i];
	var contentlist=curlist.getElementsByClassName("content");
	for(j=0;j<contentlist.length;++j){
		contentlist[j].innerHTML="["+(j+1)+"]"+contentlist[j].innerHTML;
	}//for()
}//for()
