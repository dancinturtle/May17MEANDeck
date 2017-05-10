function Deck(){
    if(!(this instanceof Deck)){
        return new Deck();
    }

 this.maindeck = this.createDeck();
 this.tempDeck = this.maindeck.slice();//making  a copy

}

Deck.prototype.createDeck = function(){
  var cardsArray =[];
  var suits = ['diamond', 'club', 'heart', 'spade'];
  var values = ['ace','2','3','4','5','6','7','8','9','10','jack','queen','king'];
  for (var i = 0; i < suits.length; i++)
  {
    for (var j = 0; j < values.length; j++)
    {
        cardsArray.push([suits[i],values[j]]);
    }

   }
   return cardsArray;

}

Deck.prototype.shuffle =function(){
  var len = this.maindeck.length;

  for(var i =0;i<len;i++){
    var ran = Math.floor(Math.random()*(len));
    var temp = this.maindeck[ran];
    this.maindeck[ran]=this.maindeck[i];
    this.maindeck[i] = temp;

  }
  return this;
}

Deck.prototype.reset =function(){
        this.maindeck = this.tempDeck;
          return this;

}
Deck.prototype.deal =function(){

    var ran = Math.floor(Math.random()*52);
    var temp = this.maindeck[ran];
    for(var i = ran+1;i<this.maindeck.length;i++){
      this.maindeck[i-1] = this.maindeck[i];
    }
    this.maindeck.pop();

    return temp;

  }


function Player(name){
  if(!(this instanceof Player)){
      return new Player();
  }
  // The Player should be able to take a card (use the deck.deal method)
  // The Player should be able to discard a card
  this.name = name;
  this.hand =[];



}
Player.prototype.draw = function(){
  this.hand.push(myDeck.deal());
  return this;


}

Player.prototype.discard = function(cardIndex){
  for(var i= cardIndex+1;i<this.hand.length;i++)
  {
    this.hand[i-1]=this.hand[i];
  }
  this.hand.pop();



  return this;

}

Player.prototype.display = function(){
  for(var index in this.hand)
  {
    console.log(this.hand[index]);
  }
}



var myDeck = new Deck();

var player = new Player("shrutha");
// console.log(myDeck.maindeck);
// // myDeck.shuffle();
// console.log(myDeck.maindeck);
// console.log(myDeck.deal());
// console.log(myDeck.maindeck);
// myDeck.reset();
// console.log(myDeck.maindeck);
player.draw().draw().draw().discard().display()
console.log(myDeck.maindeck);
