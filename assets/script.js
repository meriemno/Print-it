const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

/*****ajout des events listner pour les fleches****/

//recuperer la class img de la fleche gauche
let eventleft=document.querySelector(".arrow_left");
//ajout de l'event click sur la fleche gauche
eventleft.addEventListener("click",()=>{
	console.log("fleche gauche")
})

//recuperer la class img de la fleche droite
let eventRight=document.querySelector(".arrow_right");
//ajout de l'event click sur la fleche droite
eventRight.addEventListener("click",()=>{
	console.log("fleche droite")
	
})


let bannerDots = document.getElementById("banner");
let racineDots = document.querySelector(".dots");

//creer un ul
let ulDots = document.createElement("ul");
racineDots.appendChild(ulDots);
ulDots.classList.add("dots");


function createDots(){

	for(let i = 0; i<slides.length;i++){

		//creer un li

		let liDots = document.createElement("li");
		liDots.classList.add("dot");
		ulDots.appendChild(liDots);

	//affecter le diapositive en cours
	if(i==0){
		
		liDots.classList.add("dot_selected");

	}
}
}

createDots();