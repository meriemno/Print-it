const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

/*****ajout des events listner pour les fleches****/

		let index = 0;

		//recuperer la class img de la fleche gauche

		let eventLeft = document.querySelector(".arrow_left");

		//ajout de l'event click sur la fleche gauche

		eventLeft.addEventListener("click", () => {
			index--;
			console.log(index);
			console.log(slides.length);

			//défilement infini gauche du carrousel

			if(index<0){
				index=slides.length-1;
			}
			updateImage();
			console.log("fleche gauche")
		})

		//recuperer la class img de la fleche droite

		let eventRight = document.querySelector(".arrow_right");

		//ajout de l'event click sur la fleche droite

		eventRight.addEventListener("click", () => {

			index++;
			console.log(index);
			console.log(slides.length);

			//défilement infini droit du carrousel 

			if (index > slides.length - 1) {
				index = 0;
			}
			updateImage();
			console.log("fleche droite")

		})


		let bannerDots = document.getElementById("banner");
		let racineDots = document.querySelector(".dots");

		//creer un ul

		let ulDots = document.createElement("ul");
		racineDots.appendChild(ulDots);
		ulDots.classList.add("dots");


function createDots() {

	for (let i = 0; i < slides.length; i++) {

		//creer un li

		let liDots = document.createElement("li");
		liDots.classList.add("dot");
		ulDots.appendChild(liDots);

		//affecter le diapositive en cours

		if (i == 0) {

			liDots.classList.add("dot_selected");

		}
	}
}



function updateImage() {

	/**** chnager l'image du slider ******/

	//etape 1 : selectionner la balise img du slider

	let img = document.querySelector(".banner-img");

	//etape 2 : recuperer le nom de la 1 er image du tableau

	let firstImageName = slides[index].image;

	//etape 3 : completer le chemin de l'image

	let srcImg = "assets/images/slideshow/" + firstImageName;

	//etape 4 : modifier attribut src de l'image du slider

	img.src = srcImg;



	/**** changer le tagline du slider */

	//etape 1 : selectionner la balise p du slider

	let tagImg=document.querySelector("#banner p");

	//recuperer la structure html du tagline

	let tagTxt=tagImg.innerHTML=slides[index].tagLine;

	//recuperer le tagline sans le span

	tagTxt.textContent=slides[index].tagLine;



	/**** changer les dots du slider */

	//etape 1 selectionner la class pour les dots

	let dotLi=document.querySelectorAll(".dot");

	
	
	for(let i=0; i < dotLi.length; i++){
		
		
		//supprimer la class dot_selected 

		dotLi[i].classList.remove("dot_selected");

		//ajout class dot_selected 

		dotLi[index].classList.add("dot_selected");
	
	}

	}


function init() {

	createDots();
	//updateImage();

}
init();