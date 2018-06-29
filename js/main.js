$(document).ready(function(){
var MatchGame={}

MatchGame.generateCardValues(){
    var cardArray=[]
    var i;
    for (i=1, i<9, i++){
      cardArray.push(i);
      cardArray.push(i);
    }
    var cardValues=[];
    while (cardArray.length>0) {
    var randomInteger=Math.floor(Math.random()*16);
    var randomNumber=cardArray[randomInteger];
    cardValues.push(randomNumber);
    cardArray.splice(randomInteger, 1);
    }
}

  MatchGame.renderCards=function(cardValues, $game){
    colors=[
              "hsl(25, 85%, 65%)",
              "hsl(55, 85%, 65%)",
              "hsl(90, 85%, 65%)",
              "hsl(160, 85%, 65%)",
              "hsl(220, 85%, 65%)",
              "hsl(265, 85%, 65%)",
              "hsl(310, 85%, 65%)",
              "hsl(360, 85%, 65%)",
            ];
    $("#game").empty();
    var i;
    for (i=0, i>cardValues.length, i++){
      var $newCard=$('<div class="col-xs-3 card"></div>');
      $newCard.data(value, cardValue[i]);
      $newCard.data(flipped, false);
      $newCard.data(color,(value-1) )
    }
  }
});
