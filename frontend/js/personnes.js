"use strict";

let dateAuj = new Date();
let jourAuj = dateAuj.getDate();
let moisAuj = dateAuj.getMonth();
let anneeAuj = dateAuj.getFullYear();
let dateAct = "";
if((moisAuj >= 10) && (jourAuj >= 10)){
	dateAct = anneeAuj + "-" + moisAuj + "-" + jourAuj;
}
else if((moisAuj >= 10) && (jourAuj < 10)){
	dateAct = anneeAuj + "-" + moisAuj + "-0" + jourAuj;
}
else if((moisAuj < 10) && (jourAuj >= 10)){
	dateAct = anneeAuj + "-0" + moisAuj + "-" + jourAuj;
}
else{
	dateAct = anneeAuj + "-0" + moisAuj + "-0" + jourAuj;
}


function initialiserPage2(){
		let xhr = new XMLHttpRequest();
		xhr.open('get', 'http://localhost:81/recupererPersonnes', true);
		xhr.onload = function (){
		let listePers = JSON.parse(xhr.responseText);
		let ouiOuNon = "";
		for(let i in listePers){
			if((typeof(listePers[i].dateTest) === "string") && (listePers[i].resultat === "positif") && (dateAct < listePers[i].expiration )){
				ouiOuNon = "oui";
			}
			else{
				ouiOuNon = "non";
			}
			document.getElementById("tbodyPersonnes").innerHTML += "<tr><th>" + listePers[i].persId + "</th><th>" + listePers[i].prenom + "</th><th>" + listePers[i].nom + "</th><th>" + listePers[i].naiss + "</th><th class='noirOuRouge'>" + ouiOuNon + "</th></tr>";
			if(ouiOuNon === "oui"){
				document.getElementsByClassName("noirOuRouge")[i].style.color = "red";
				document.getElementsByClassName("noirOuRouge")[i].style.fontWeight = 1000;
			}
		}
	}
	xhr.send();
	return false;
}


function ajouterPersonne(formPers){
	let tFormat = new Date().toLocaleTimeString();
	let fName = formPers.prenomPersonne.value;
	let lName = formPers.nomPersonne.value;
	let dateNaiss = formPers.dateNaissance.value;
	let sexPerson = formPers.sexePersonne.value;
	let xhr = new XMLHttpRequest();
	xhr.open("get", "http://localhost:81/enregistrerPersonne?firstName=" + fName + "&lastName=" + lName + "&born=" + dateNaiss + "&sex=" + sexPerson, true);
	if(dateNaiss > dateAct){
		document.getElementById("rougeOuVert").style.color = "red";
		document.getElementById("rougeOuVert").style.fontWeight = 1000;
		document.getElementById("rougeOuVert").innerHTML = "<br>" + tFormat + " La date de naissance ne peut pas être dans le futur.";
	}
	else{
		document.getElementById("rougeOuVert").style.color = "green";
		document.getElementById("rougeOuVert").style.fontWeight = 1000;
		document.getElementById("rougeOuVert").innerHTML = "<br>" + tFormat + " Personne bien enregistrée";
		xhr.send();
	}
	console.log(dateNaiss);
	console.log(typeof(dateNaiss));
	return false;
}


function recupererPersonnes() {
	let xhr = new XMLHttpRequest();
	xhr.open("get", "http://localhost:81/afficherPersonnes", true);
	xhr.onload = function () {
		let listePers = JSON.parse(xhr.responseText);
		for (let i in listePers) {
			document.getElementById("personneTestCovid").innerHTML += '<option value="' + listePers[i].persId + '">' + listePers[i].nom + ' ' + listePers[i].prenom + ' [' + listePers[i].persId + ']</option>';
			document.getElementById("personneVisiteVille").innerHTML += '<option value="' + listePers[i].persId + '">' + listePers[i].nom + ' ' + listePers[i].prenom + ' [' + listePers[i].persId + ']</option>';
		}
	}
	xhr.send();
}


function ajouterTestCovid(formTest){
	let idPersonne = formTest.personneTestCovid.value;
	let result = formTest.resultatTestCovid.value;
	let testeur = formTest.dateTestCovid.value;
	let expi = formTest.dateExpirationTestCovid.value;
	console.log(idPersonne);
	console.log(result);
	console.log(testeur);
	console.log(expi);
	let xhr = new XMLHttpRequest();
	xhr.open("get", "http://localhost:81/enregistrerTest?test=" + testeur + "&exp=" + expi + "&resul=" + result + "&idPers=" + idPersonne, true);
	xhr.send();
	return false;
}