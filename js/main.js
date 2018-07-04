var MatchGame={};
$(document).ready(function(){
  var $game = $('#game');
  var $newCard =$('card');
  var cardValues = MatchGame.generateCardValues();
  MatchGame.renderCards(cardValues, $game);
});


MatchGame.generateCardValues=function(){
    var cardArray=[]
    var i;
    for (i=1; i<9; i++){
      cardArray.push(i);
      cardArray.push(i);
    }
    var cardValues=[];
    while (cardArray.length>0) {
    var randomInteger=Math.floor(Math.random()*16);
    var randomNumber=cardArray[randomInteger];
    cardValues.push(randomNumber);
    cardArray.splice(randomInteger, 1)
  };
    return cardValues;
};
MatchGame.renderCards=function(cardValues, $game){
  var flippedCards=[];
  $game.data(flippedCards, []);
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
  for (i=0; i>cardValues.length; i++){
    var $newCard=$('<div class="col-xs-3 card"></div>');
    $newCard.data(value, cardValues[i]);
    $newCard.data(flipped, false);
    $newCard.data(color,colors[cardValues[i]-1])
    $game.append($newCard)
  };
  $newCard.click( function(){
    MatchGame.flipcard($(this), $('#game'));
  });
};
MatchGame.flipcard=function($newCard, $game){
  if ($newCard.data(flipped) = true){
    return;
  }
  else{
    $newCard.data(flipped, true);
    $newCard.css(background-color, color);
    $newCard.text( $newCard.data('value'));
    flippedCards.push($newCard);
    if (flippedCards.length==2){
        var x = flippedCards[0].data('value');
        var y = flippedCards[1].data('value');
        if (x==y){
          flippedCards[0].css("background-color", "rgb(153, 153, 153)");
          flippedCards[1].css("background-color", "rgb(153, 153, 153)");
          $game.data(flippedCards, []);
        }
        else{
          flippedCards[0].css(background-color, rgb(32, 64, 86));
          flippedCards[0].data(flipped, false);
          flippedCards[0].text("");
          flippedCards[1].css(background-color, rgb(32, 64, 86));
          flippedCards[1].data(flipped, false);
          flippedCards[1].text("")
          $game.data(flippedCards, []);
        };
    }
    else{
      return;
    }
  }
};
