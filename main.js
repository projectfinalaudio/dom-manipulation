// let fruits;

// fruits = "Strawberries";

// switch(fruits)
// {
//     case "Apples": document.querySelector("#box_1").innerHTML = "I like Apples"; break;
//     case "Banana": document.querySelector("#box_2").innerHTML = "I only like sweet bananas"; break;
//     case "Grapes": document.querySelector("#box_3").innerHTML = "Grapes are awesome too!"; break;
//     case "Plums": document.querySelector("#box_4").innerHTML = "Plums are nice."; break;
//     case "Strawberries": document.querySelector("#box_1").innerHTML = "Strawberries are nice too!"; break;
//     default: document.querySelector("#box_1").innerinnerHTML = "Other fruits suck!";
// }


const card1 = document.querySelector('.card_1');
const card2 = document.querySelector('.card_2');
const card3 = document.querySelector('.card_3');
const card4 = document.querySelector('.card_4');


card1.addEventListener('mouseover',changeCard1Color);
card1.addEventListener('mouseout',resetCard1Color);

card2.addEventListener('mouseover',changeCard2Color);
card2.addEventListener('mouseout',resetCard2Color);

card3.addEventListener('mouseover',changeCard3Color);
card3.addEventListener('mouseout',resetCard3Color);

card4.addEventListener('mouseover',changeCard4Color);
card4.addEventListener('mouseout',resetCard4Color);



///////////////////// CARD 1 ////////////////////

function changeCard1Color(e){
    card1.style.backgroundColor = 'red';

    e.preventDefault();
}

function resetCard1Color(e){
    card1.style.backgroundColor = 'antiquewhite';

    e.preventDefault();
}


/////////////////// CARD 2 ////////////////////

function changeCard2Color(e){
    card2.style.backgroundColor = 'orange';

    e.preventDefault();
}

function resetCard2Color(e){
    card2.style.backgroundColor = 'antiquewhite';

    e.preventDefault();
}


/////////////////// CARD 3 ///////////////////

function changeCard3Color(e){
    card3.style.backgroundColor = 'yellow';

    e.preventDefault();
}

function resetCard3Color(e){
    card3.style.backgroundColor = 'antiquewhite';

    e.preventDefault();
}


/////////////////// CARD 4 ///////////////////

function changeCard4Color(e){
    card4.style.backgroundColor = 'green';

    e.preventDefault();
}

function resetCard4Color(e){
    card4.style.backgroundColor = 'antiquewhite';

    e.preventDefault();
}







setTimeout(function() {
    
}, 3000);

