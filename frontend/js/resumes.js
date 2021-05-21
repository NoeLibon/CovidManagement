"use strict";


function initialiserPage4(){
    let xhr = new XMLHttpRequest();
    xhr.open("get", "http://localhost:81/recupererNombreCasPositifsActuellement", true);
    xhr.onload = function (){
        let nCasPositifsAct = JSON.parse(xhr.responseText);
        for(let i in nCasPositifsAct){
            document.getElementById("nombreMalades").innerHTML += nCasPositifsAct[i].nCasCovidAct;
        }
    }
    xhr.send();
    return false;
}



function initialiserPage5(){
    let xhr = new XMLHttpRequest();
    xhr.open("get", "http://localhost:81/recupererNombreTestsRecents", true);
    xhr.onload = function (){
        let nbrTestsRecents = JSON.parse(xhr.responseText);
        for(let i in nbrTestsRecents){
            document.getElementById("nombreTests").innerHTML += nbrTestsRecents[i].nTestsRecents;
        }
    }
    xhr.send();
    return false;
}