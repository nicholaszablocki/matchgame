$(document).ready(function(){


.generateCardValues(){
    var cardArray=[]
    var i;
    for (i=1, i<9, i++){
      cardArray.push(i);
      cardArray.push(i);
    }
    var cardArrayRandom[]
    while (cardArray.length>0) {
    var randomDecimal=Math.random()*16;
    var randomInteger=Math.floor(randomDecimal);
    var randomNumber=cardArray[randomInteger];
    cardArrayRandom.push(randomNumber);
    cardArray.splice(randomInteger, 1);
    }
}
});
