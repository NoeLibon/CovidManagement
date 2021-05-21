"use strict";

function initialiserPage3(){
    let xhr = new XMLHttpRequest();
    xhr.open("get", "http://localhost:81/recupererNombreCasPositifs", true);
    xhr.onload = function (){
        let listNCasPositifs = JSON.parse(xhr.responseText);
        for(let i in listNCasPositifs){
            document.getElementById("tbodyNombreMaladesParVille").innerHTML += "<tr><th>" + listNCasPositifs[i].code + "</th><th>" + listNCasPositifs[i].lib + "</th><th>" + listNCasPositifs[i].nCasCovid + "</th></tr>";
        }
    }
    xhr.send();
    return false;
}

function ajouterVisiteVille(formVisit){
    let persVisit = formVisit.personneVisiteVille.value;
    let villeVisitee = formVisit.villeVisitee.value;
    let dateVisite = formVisit.dateVisite.value;
    let tFormat = new Date().toLocaleTimeString();
    let xhr = new XMLHttpRequest();
    xhr.open("get", "http://localhost:81/enregistrerVisite?idPers=" + persVisit + "&codePostal=" + villeVisitee + "&visite=" + dateVisite, true);
    document.getElementById("succesVert").innerHTML += "<br>" + tFormat + " Demande d'enregistrement de visite bien prise en compte.";
    document.getElementById("succesVert").style.color = "green";
    document.getElementById("succesVert").style.fontWeight = 1000;
    xhr.send();
    return false;
}

