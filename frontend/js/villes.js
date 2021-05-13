"use strict";

function initialiserPage(){
	let xhr = new XMLHttpRequest();
	xhr.open('get', 'http://localhost:82/recupererVilles', true);
	xhr.onload = function (){
		let listeVil = JSON.parse(xhr.responseText);
		for(let i in listeVil){
			document.getElementById("listeVilles").innerHTML += "<li>" + listeVil[i].lib + " " + listeVil[i].code + "</li>";
		}
	}
	xhr.send();
	return false;
}



function ajouterVille(formVil){
	let codeP = formVil.codePostal.value;
	let nomVil = formVil.nomVille.value;
	let xhr = new XMLHttpRequest();
	xhr.open('get', 'http://localhost:82/enregistrerVille?codepostal=' + codeP + '&nomville=' + nomVil, true);
	xhr.send();
	return false;
}