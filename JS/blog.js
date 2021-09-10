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

//Add vert_br between each menu item
var vert_br=document.createElement("br");
vert_br.classList="vert_br";

var menu=document.getElementById("menu");
var menubutton=menu.getElementsByTagName("a")
var menucount=menubutton.length;  //Only get number of buttons
for(i=0;i<menucount-1;++i){
	menubutton[i].after(vert_br.cloneNode(true));
	menubutton[i].style.fontSize="0";
	menubutton[i].style.border="none";
	menubutton[i].style.display="inline-block";
	menubutton[i].style.width="auto";
}//for()
menubutton[menucount-1].style.fontSize="0";
menubutton[menucount-1].style.border="none";
menubutton[menucount-1].style.display="inline-block";
menubutton[menucount-1].style.width="auto";

//Set menu_button
var menutoggle=false;  //Where "true" means menu is open
var menu_button=document.getElementById("menu_button");
function childBye(i){
	setTimeout(function(){
		menubutton[i].style.fontSize="0";
		menubutton[i].style.border="none";
		menubutton[i].style.marginBottom="0";
		// menu.children[i].style.display="none";
		// menu.children[i].pointerEvents="none";
	}, 80*i);
}  //childBye()
function childHi(i){
	setTimeout(function(){
		// menu.children[i].style.display="inline";
		menubutton[i].style.fontSize="4vw";
		menubutton[i].style.border="solid 2px #ebebeb";
		menubutton[i].style.marginBottom="0.2em";
		// menu.children[i].pointerEvents="visible";
	}, 80*i);
}  //childHi()
menu_button.onclick=function(){
	if (menutoggle){
		for(i=0;i<menucount;++i){
			childBye(i);
		}//for()
		menutoggle=false;
	}//if()
	else{
		//Reveal menu
		// menu.style.opacity="1";
		// menu.style.padding="1em 0 0 1.5em";
		for(i=0;i<menucount;++i){
			childHi(i);
		}//for)()
		menutoggle=true;
	}//else
};  //function()

//Loop through paragraphs, load sequentially
function fadeInParagraphs(){
	var paragraphs=document.getElementById("big_wrapper").children;
	for(i=0;i<paragraphs.length;++i){
		setTimeout(function(para){para.classList.add("fader");}, 150*i, paragraphs[i]);
	}//for()
}
setTimeout(fadeInParagraphs, 200);
