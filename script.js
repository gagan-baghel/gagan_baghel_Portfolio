
setTimeout(function () {
	$('.loader').fadeOut('slow');
}, 1000);



function contactbutton(){
	document.getElementById("contactBtn").innerText = "Thanks for Contacting!";
}



// moving element
document.addEventListener('mousemove',mover)


function mover(e){
	document.querySelectorAll('.mitem').forEach(move=>{
		x = e.clientX ;
		y = e.clientY ; 
		move.style.transform ="translate("+x/10+"px,"+(-y/16)+"px)";
	})
	document.querySelectorAll('.mitemo').forEach(move=>{
		x = e.clientX ;
		y = e.clientY ; 
		move.style.transform ="translate("+ -x/10+"px,"+(y/10)+"px)";
	})
	document.querySelectorAll('.mitemo2').forEach(move=>{
		x = e.clientX ;
		y = e.clientY ; 
		move.style.transform ="translate("+ x/10+"px,"+(y/5)+"px)";
	})

}





function myFunction() {
    doc = document.getElementById("leftmenu")
    btn = document.getElementById("menubtn")
    btn.classList.toggle("change");
    doc.classList.toggle("lefthide")
    doc.classList.toggle("leftshow")
  }

$(document).ready(function (){
	if(!$("#myCanvas").tagcanvas({
	    textColour: "#64ffdbcd",
	    outlineColour: "transparent",
	    reverse: true,
	    depth: 0.8,
	    weight: true,
	}, "tags")){
	    // something went wrong hide the canvas container,
	    $("#myCanvasContainer");
	}
})




let text =  document.getElementsByClassName("p1");
let text2 =  document.getElementsByClassName("subhead");
let text1 =  document.getElementsByClassName("intrest");
let text3 =  document.getElementsByClassName("name");

window.addEventListener("scroll",()=>{
	let value=window.scrollY;
	text[0].style.position="relative";
	text[0].style.left = value*1.5 +'px';
	text[0].style.right = -value*1.5 +'px';
	text1[0].style.position="relative";
	text1[0].style.left = value*1.2 +'px';
	text1[0].style.right = -value*1.2 +'px';
	text2[0].style.position="relative";
	text2[0].style.left = value*1.7 +'px';
	text2[0].style.right = -value*1.7 +'px';
	text3[0].style.position="relative";
	text3[0].style.left = value*1.6 +'px';
	text3[0].style.right = -value*1.6 +'px';
})




// carousel
const leftSlide = document.querySelector(".left-slides");
const rightSlide = document.querySelector(".right-slides");
const leftBtn = document.querySelector(".left-btn");
const rightBtn = document.querySelector(".right-btn");
const slidesLength = leftSlide.querySelectorAll("div").length;

let currentSlide = 0;

rightSlide.style.transform = `translateY(-${(slidesLength - 1) * 100}%)`;
leftBtn.addEventListener("click", () => changeSlide("left"));
rightBtn.addEventListener("click", () => changeSlide("right"));

function changeSlide(btn) {
  if (btn == "right") {
    currentSlide++;

    if (currentSlide > slidesLength - 1) {
      currentSlide = 0;
    }
  } else if (btn == "left") {
    currentSlide--;
    if (currentSlide < 0) {
      currentSlide = slidesLength - 1;
    }
  }

  rightSlide.style.transform = `translateY(-${(slidesLength - 1 - currentSlide) * 100}%)`;
  leftSlide.style.transform = `translateY(-${currentSlide * 100}%)`;
}

setInterval(autoChangeSlide, 9000);

function autoChangeSlide() {
  currentSlide++;

  if (currentSlide > slidesLength - 1) {
    currentSlide = 0;
  }

  rightSlide.style.transform = `translateY(-${
    (slidesLength - 1 - currentSlide) * 100}%)`;
  leftSlide.style.transform = `translateY(-${currentSlide * 100}%)`;
}



