function Deck(){
  var suits = ['Spade', 'Club', 'Heart', 'Diamond'],
      values = ['Ace','2','3','4','5','6','7','8','9','10','Jack','Queen','King'];

  this.stack = [];

  this.reset = function(){
    for (suit in suits){
      for (value in values){
        this.stack.push(new Card(values[value], suits[suit]));
      }
    }
  };

  this.reset();

}
function Card(value = 2, suit = 'Spade'){
  this.value = value;
  this.suit = suit;
}

Deck.prototype.shuffle = function(){
  var size = this.stack.length;
  var card1, card2;

  while (size) {
    card2 = Math.floor(Math.random() * size--);

    card1 = this.stack[size];
    this.stack[size] = this.stack[card2];
    this.stack[card2] = card1;
  }
  return this;
}

Deck.prototype.display = function(){
  for(var i = 0; i < this.stack.length; i++)
    console.log(this.stack[i].suit + ' ' + this.stack[i].value);
    return this;
}

Deck.prototype.deal = function(){
  var index = Math.floor(Math.random() * this.stack.length),
      card = this.stack[index];

  for(var i = index; i < this.stack.length-1; i++){
    this.stack[i] = this.stack[i+1];
  }
  this.stack.pop();

  return card;
}

function Player(name = 'Kato'){
  this.name = name;
  this.hand = [];
}

Player.prototype.display = function(){
  console.log(this.name+"'s hand is :");
  if( this.hand.length > 0 ){
    for(var card = 0; card <  this.hand.length; card++){
      console.log(this.hand[card].suit + ' ' + this.hand[card].value);
    }
  }else{
    console.log('Empty');
  }
  return this;
}

Player.prototype.draw = function(deck){
  this.hand.push(deck.deal());
  return this;
}

Player.prototype.discard = function(index){
  if (index < this.hand.length){
    for(var i = index; i < this.hand.length-1; i++){
      this.hand[i] = this.hand[i+1];
    }
    this.hand.pop();
  }

  return this;
}


var blackjack = new Deck();
var charles = new Player();
// blackjack.display();
// blackjack.shuffle();
// console.log(blackjack.deal());
// charles.draw(blackjack);
// charles.draw(blackjack);
// charles.draw(blackjack);
// charles.draw(blackjack);
// charles.display();
// charles.discard(2);
// charles.display();
// blackjack.display();
