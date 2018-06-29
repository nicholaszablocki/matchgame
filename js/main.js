$(document).ready(function(){


.generateCardValues(){
    var cardArray=[]
    var i;
    for (i=1, i<9, i++){
      cardArray.push(i);
      cardArray.push(i);
    }
    var cardArrayRandom=[];
    while (cardArray.length>0) {
    var randomInteger=Math.floor(Math.random()*16);
    var randomNumber=cardArray[randomInteger];
    cardArrayRandom.push(randomNumber);
    cardArray.splice(randomInteger, 1);
    }
}
.renderCards(cardValues){
  cardColors=["hsl(25, 85%, 65%)",
              "hsl(55, 85%, 65%)",
              "hsl(90, 85%, 65%)",
              "hsl(160, 85%, 65%)",
              "hsl(220, 85%, 65%)",
              "hsl(265, 85%, 65%)",
              "hsl(310, 85%, 65%)",
              "hsl(360, 85%, 65%)",
            ];
  $('#game').empty();
  var i;
  for (i=0, i<cardArrayRandom.length, i++){
    $("#game").data(newCardObject, cardArrayRandom[i]);
    $(".card").data(false);
    $(".card").data(cardColors[x]);
  }
}
});
