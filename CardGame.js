

function Deck(){

  this.buildDeck();
}

Deck.prototype.buildDeck = function(){
  var suits = ['d', 'c', 'h', 's'],
      values = [2,3,4,5,6,7,8,9,10,11,12,13,14],
      self = this;

  this.cards = [];

  suits.forEach(function(suit){
    values.forEach(function(value){
      self.cards.push(new Card(value, suit));
    });
  });
  return this;
}
Deck.prototype.shuffle = function(){
  var unshuffledEdge = this.cards.length,
      cardToShuffleIdx,
      temp;
  while (unshuffledEdge > 0) {
    cardToShuffleIdx = Math.floor(Math.random() * unshuffledEdge);
    unshuffledEdge -= 1;

    temp = this.cards[cardToShuffleIdx]
    this.cards[cardToShuffleIdx] = this.cards[unshuffledEdge]
    this.cards[unshuffledEdge] = temp;
  }
  return this
}



Deck.prototype.reset = function(){
  this.buildDeck().shuffle();
}
Deck.prototype.split =function(player1,player2){
  for(var i=0; i<this.cards.length;i++){
    if (i % 2 == 0){
      player1.hand.push(this.cards[i])
    }
    else{
    player2.hand.push(this.cards[i])}
  }
  return player1,player2
}

Deck.prototype.dealRandomCard = function(){
  return (this.cards.length > 0) ? this.cards.pop() : null;
}

function Card(value, suit){
  this.value = value;
  this.suit = suit;
}

function Player(name){
  this.name = name;
  this.hand = [];
  this.victory = 0
}

Player.prototype.takeCard = function(deck){
  this.hand.push(deck.dealRandomCard());
  return this;
}

Player.prototype.discard = function(cardIdx){
  if (this.hand.length > cardIdx){
    this.hand.splice(cardIdx, 1);
  }
  return this;
}


var $ = jQuery;
$(document).ready(function(){
  player1 = new Player('player1');
  player2 = new Player('player2');
  console.log(player1);
  console.log(player2);
  return player1,player2;});



function play() {
  if (player1.hand.length == 0){
    if (player1.victory > player2.victory){
      return console.log('player1 wins!!!!')
    }
    else{
      return console.log('player2 wins!!!!!')
    }
  }
  var player1card = player1.hand[player1.hand.length-1]
  var player2card = player2.hand[player2.hand.length-1]
  if (player1card.value > player2card.value){
    player1.victory +=1;
  }
  if (player2card.value > player1card.value){
    player2.victory +=1;
  }
  player1.hand.pop()
  player2.hand.pop()
  console.log(player1)
  console.log(player2)
}

function start(){
  player1.victory = 0;
  player1.hand = [];
  player2.victory = 0;
  player2.hand = [];
  Deck1 = new Deck();
  Deck1.shuffle();
  console.log(Deck1);
  Deck1.split(player1,player2);
  return Deck1;
}
