function CardConstructor(value, suit){
  this.value = value
  this.suit = suit
}

function DeckConstructor(){
  this.build();
}

DeckConstructor.prototype.build = function(){
  var suits = ['diamonds', 'clubs', 'hearts', 'spades']
  var values = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king' ]
  var self = this
  this.cards = []
  // suits.forEach(function(suit){
  //   values.forEach(function(value){
  //     self.cards.push(new CardConstructor(value, suit))
  //   })
  // })

  for (var i = 0; i < suits.length; i++){
    for (var j = 0; j < values.length; j++){
      self.cards.push(new CardConstructor(values[j], suits[i]))
    }
  }
  return this
}

DeckConstructor.prototype.deal = function(){
  if(this.cards.length > 0){
    return this.cards.pop();
  }
  else{
    return null;
  }
}

DeckConstructor.prototype.display = function(){
  for (var i = 0; i < this.cards.length; i++){
    console.log(this.cards[i]);
  }
}

DeckConstructor.prototype.shuffle = function(){
  var m = this.cards.length, t, i;
  while (m){
    i = Math.floor(Math.random() * m--);
    t = this.cards[m];
    this.cards[m] = this.cards[i];
    this.cards[i] = t
   }
   return this
}

DeckConstructor.prototype.reset = function(){
  this.build().shuffle();
}

function PlayerConstructor(name) {
  this.name = name;
  this.hand =[]
}

PlayerConstructor.prototype.take = function(){
  this.hand.push(deck1.deal())
  return this
}

PlayerConstructor.prototype.discard = function(cardindex){
  if (this.hand.length > cardindex){
    this.hand.splice(cardindex, 1);
  }
  return this
}

// function GameConstructor(){
//   this.player = new PlayerConstructor(name)
//   var sum=0;
//   for (var i = 0; i < this.player.hand.length; i++){
//     sum += this.player.hand[i];
//   }
//   var active = false;
//   while(su)
//   if (sum > 21){
//     return "Busted"
//   }
// }

var deck1 = new DeckConstructor()
console.log(deck1.shuffle().display())
