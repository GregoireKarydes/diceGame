window.onload = function () {


const scoreToWin = 100; // score pour gagner
let dePlayer1;
let dePlayer2;

// enregistrer les scores;

let scoreSave1 = 0;
let current1= 0;

let scoreSave2 = 0;
let current2= 0;

gsap.to(".win", {display : "none"});


// selectionner les scores à l'écran et les mettre a 0

let scoreSave1Ecran = document.getElementById('scoreSaved1'); // player1
let current1Ecran = document.getElementById('current1');

scoreSave1Ecran.innerHTML = scoreSave1;
current1Ecran.innerHTML =current1;

let scoreSave2Ecran = document.getElementById('scoreSaved2'); // player 2
let current2Ecran = document.getElementById('current2');

current1Ecran.innerHTML =current1;
scoreSave2Ecran.innerHTML = scoreSave2;

//joueur1 => Dé 1

function player1De1(){
    current1= 0;
    current1Ecran.innerHTML =current1;
    gsap.to("#player1", {opacity :"0.3"})
    gsap.to("#dice2", {cursor :"inital"})
    gsap.to("#load2", {cursor :"initial"})
    gsap.to("#player2", {opacity :"1"})

    gsap.to("#player1De1", {display : "none"})
    gsap.to("#player1De2", {display : "none"})
    gsap.to("#player1De3", {display : "none"})
    gsap.to("#player1De4", {display : "none"})
    gsap.to("#player1De5", {display : "none"})
    gsap.to("#player1De6", {display : "none"})

}

//joueur2 => Dé 1

function player2De1(){
    current2= 0;
    current2Ecran.innerHTML =current2;
    gsap.to("#player2", {opacity :"0.3"})
    gsap.to("#dice1", {cursor :"inital"})
    gsap.to("#load1", {cursor :"initial"})
    gsap.to("#player1", {opacity :"1"})
    
    gsap.to("#player2De1", {display : "none"})
    gsap.to("#player2De2", {display : "none"})
    gsap.to("#player2De3", {display : "none"})
    gsap.to("#player2De4", {display : "none"})
    gsap.to("#player2De5", {display : "none"})
    gsap.to("#player2De6", {display : "none"})

}

// action player 1 

$('#dice1').click( function(){
   dePlayer1 = Math.floor(Math.random()*6+1);
   gsap.to("#player1De1", {display : "none"})
   gsap.to("#player1De2", {display : "none"})
   gsap.to("#player1De3", {display : "none"})
   gsap.to("#player1De4", {display : "none"})
   gsap.to("#player1De5", {display : "none"})
   gsap.to("#player1De6", {display : "none"})



   switch(dePlayer1) {
       case 1 : { gsap.to("#player1De1", {display : "initial"})}
       break;
       case 2 : { gsap.to("#player1De2", {display : "initial"})}
       break;
       case 3 : { gsap.to("#player1De3", {display : "initial"})}
       break;
       case 4 : { gsap.to("#player1De4", {display : "initial"})}
       break;
       case 5 : { gsap.to("#player1De5", {display : "initial"})}
       break;
       case 6 : { gsap.to("#player1De6", {display : "initial"})}
       break;
}
current1 += dePlayer1;
current1Ecran.innerHTML =current1;
if(dePlayer1==1) {
    player1De1();
}

})

// save player1

$('#load1').click( function(){
    dePlayer1 = Math.floor(Math.random()*6+1);
    gsap.to("#player1De1", {display : "none"})
    gsap.to("#player1De2", {display : "none"})
    gsap.to("#player1De3", {display : "none"})
    gsap.to("#player1De4", {display : "none"})
    gsap.to("#player1De5", {display : "none"})
    gsap.to("#player1De6", {display : "none"})


    scoreSave1 += current1;
    scoreSave1Ecran.innerHTML= scoreSave1;
    player1De1();
    if(scoreSave1>=100) {
        gsap.to(".win", {display : "block"});
        document.getElementById("winner").innerHTML = "1";
    }
})


// action player 2

$('#dice2').click( function(){
    dePlayer2 = Math.floor(Math.random()*6+1);
    gsap.to("#player2De1", {display : "none"})
    gsap.to("#player2De2", {display : "none"})
    gsap.to("#player2De3", {display : "none"})
    gsap.to("#player2De4", {display : "none"})
    gsap.to("#player2De5", {display : "none"})
    gsap.to("#player2De6", {display : "none"})
 
 
 
    switch(dePlayer2) {
        case 1 : { gsap.to("#player2De1", {display : "initial"})}
        break;
        case 2 : { gsap.to("#player2De2", {display : "initial"})}
        break;
        case 3 : { gsap.to("#player2De3", {display : "initial"})}
        break;
        case 4 : { gsap.to("#player2De4", {display : "initial"})}
        break;
        case 5 : { gsap.to("#player2De5", {display : "initial"})}
        break;
        case 6 : { gsap.to("#player2De6", {display : "initial"})}
        break;
 }
 current2 += dePlayer2;
 current2Ecran.innerHTML =current2;
 if(dePlayer2==1) {
     player2De1();
 }
 
 })

 // save player2

$('#load2').click( function(){
    dePlayer1 = Math.floor(Math.random()*6+1);
    gsap.to("#player2De1", {display : "none"})
    gsap.to("#player2De2", {display : "none"})
    gsap.to("#player2De3", {display : "none"})
    gsap.to("#player2De4", {display : "none"})
    gsap.to("#player2De5", {display : "none"})
    gsap.to("#player2De6", {display : "none"})


    scoreSave2 += current2;
    scoreSave2Ecran.innerHTML= scoreSave2;
    player2De1();
    if(scoreSave2>=100) {
        gsap.to(".win", {display : "block"});
        document.getElementById("winner").innerHTML = "2";
    }
    
})






} // fin de window.onload