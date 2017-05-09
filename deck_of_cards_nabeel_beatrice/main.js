function Deck(){
  // When constructor funtion is invoked, run this code to populate deck with cards
  this.cards = [];
  this.buildDeck();

}

function Card(values,suits){
  this.values = values;
  this.suits = suits;
  // this.display();
}

Card.prototype.display = function(){
  console.log(this.values, this.suits);
}

Deck.prototype.buildDeck = function(){
  var suits = ['diamonds', 'clubs', 'hearts', 'spades'],
      values = ['ace','2','3','4','5','6','7','8','9','10','jack','queen','king']
      // Capture snapshot of this for use in callback function


  // Set up cards in deck as empty array

  // Nested for loops iterate over suits and values to create new cards

  for(var i = 0; i < suits.length; i++){
    for( var j = 0; j <values.length; j++){
      var newCard = new Card(values[j], suits[i]);
      newCard.display();
      this.cards.push(newCard);
      // this.cards.push(new Card(values[j], suits[i]));
    }

  }
  return this;

};




Deck.prototype.shuffle = function(){
  var m = this.cards.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = this.cards[m];
    this.cards[m] = this.cards[i];
    this.cards[i] = t;
  }
  for(var i = 0; i<this.cards.length; i++){
    this.cards[i].display();
  }
  return this.cards;


}
Deck.prototype.dealRandomCard = function(){
  if (this.cards.length > 0) {
    this.cards.pop();
    console.log(this.cards.length);
  }
  else{
    return null;
  }
}

  // suits.forEach(function(suits){
  //   values.forEach(function(value){
  //     this.cards.push(new Card(value, suit));

Deck.prototype.reset = function(){
    this.cards = [];
    this.buildDeck().shuffle();
    return this;
  }

var deck = new Deck();
deck.buildDeck();
console.log("reset starts heeeeeeeeeeree///reset starts heeeeeeeeeeree////reset starts heeeeeeeeeeree")

deck.shuffle();
console.log("reset starts heeeeeeeeeeree///reset starts heeeeeeeeeeree////reset starts heeeeeeeeeeree")
deck.reset();
deck.dealRandomCard();
