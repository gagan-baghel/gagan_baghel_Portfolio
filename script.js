// timeout for loader function
setTimeout(function () {
	$('.loader').fadeOut('slow');
}, 1000);

function hello(){
	console.log("hello");

}

// contact button changing text
function contactbutton(){
	document.getElementById("contactBtn").innerText = "Thanks for Contacting!";
}


// front page moving element
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



// responsive hambug code
function myFunction() {
    doc = document.getElementById("leftmenu")
    btn = document.getElementById("menubtn")
    btn.classList.toggle("change");
    doc.classList.toggle("lefthide")
    doc.classList.toggle("leftshow")
  }


// canvas jq-design code
$(document).ready(function (){
	if(!$("#myCanvas").tagcanvas({
	    textColour: "#64ffdbcd",
	    outlineColour: "transparent",
	    reverse: true,
	    depth: 0.8,
	    weight: true,
	}, "tags")){
	    $("#myCanvasContainer");
	}
})

// front-page name mover
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




let projects = [
	{
		src:"https://s3.amazonaws.com/ionic-marketplace/api-weather-app/icon.png",
		header : "Weather API",
		description : "Weather APIs are Application Programming Interfaces that allow you to connect to large databases of weather forecast and historical information",
		projectLink : "",
		GithubLink : "gl",
	},
	{
		src:"",
		header : "Parallex Website",
		description : "website built on a scrolling technique used in web design where background images throughout a web page move slower than foreground images, creating an illusion of depth on a two-dimensional site.",
		projectLink : "pl",
		GithubLink : "gl",
	},
	{
		src:"",
		header : "Parallex Website",
		description : "website built on a scrolling technique used in web design where background images throughout a web page move slower than foreground images, creating an illusion of depth on a two-dimensional site.",
		projectLink : "pl",
		GithubLink : "gl",
	},
	{
		src:"",
		header : "Dynamic ToDO List With Backend",
		description : "A dynamic todolist using ejs,mongodb,html,css",
		projectLink : "pl",
		GithubLink : "gl",
	},
	{
		src:"",
		header : "Basic Blog Website",
		description : "Blog website to publish edit and delete blog",
		projectLink : "pl",
		GithubLink : "gl",
	},
	{
		src:"",
		header : "Simon Game",
		description : "A memory enhancement game which give you a better challang to user at every step",
		projectLink : "pl",
		GithubLink : "gl",
	},
	{
		src:"",
		header : "Static TinDog",
		description : "A static website using bootstrap",
		projectLink : "pl",
		GithubLink : "gl",
	},
	{
		src:"",
		header : "Rest API",
		description : "A rest api to perform all the actions to the database",
		projectLink : "pl",
		GithubLink : "gl",
	},
	{
		src:"",
		header : "Anonymous Secrets Website",
		description : "Place where you can post anonymous stuffs thus having oauth functionality",
		projectLink : "pl",
		GithubLink : "gl",
	},
	{
		src:"",
		header : "Bakers Landing Page",
		description : "Parellex baker landing page",
		projectLink : "pl",
		GithubLink : "gl",
	},
	{
		src:"",
		header : "Mail Manager",
		description : "Python base mail code that help to read delete and seprate your mail",
		projectLink : "pl",
		GithubLink : "gl",
	},
	{
		src:"",
		header : "NeoTank",
		description : "A watertank  chat bot to remotely control the functionality of watertank",
		projectLink : "pl",
		GithubLink : "gl",
	}
	
]


let data = '';

projects.map((info)=>{
	data+=`
	<div class="border border-[#64ffda] w-[270px] min-h-[200px] px-4 py-5 rounded-lg ease-in-out duration-300 hover:-translate-y-4 hover:border-[#ffffff20] hover:bg-[#8892b010] m-4">
            <img class="h-[150px] object-cover w-full rounded-xl" src="${info.src}" alt="">
            <h1 class="text-[#8892b0] hover:text-[#64ffda] text-3xl font-extrabold py-3 smooth-italic">${info.header}</h1>
            <p class="text-[#8892b0] hover:text-[#64ffda] text-sm font-extrabold py-1 smooth-italic">${info.description}</p>
            <div class="w-full flex justify-around flex-row py-3">
            <a class="text-[#ffffff] hover:text-[blue] text-sm font-extrabold py-1 smooth-italic" href="${info.projectLink}">See More </a>
            <a class="text-[#ffffff] hover:text-[blue] text-sm font-extrabold py-1 smooth-italic" href="${info.GithubLink}">Github </a></div>
        </div>`
})

document.getElementById("project-cards").innerHTML=data;