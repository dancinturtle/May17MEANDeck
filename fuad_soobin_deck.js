
function Deckconstructor(){
  this.deck = [];
  var suit = ['diamonds', 'spades', 'hearts', 'clubs' ],
  value = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'j', 'q', 'k'],
  self = this;
  for( var i = 0; i < suit.length; i++ ) {
    for( var j = 0; j < value.length; j++ ) {

      this.deck.push(new CardConstructor(suit[i], value[j]));
    }
  }
  console.log(this.deck);
}

var deck1 = new Deckconstructor();


function CardConstructor(suit, value){
  this.suit = suit;
  this.value = value;
}

function PlayerConstructor(name){
  this.name = name;
  this.hand = [];
}

// Deckconstructor.prototype.shuffle(){
//   function shuffle(this.deck) {
//   var m = deck.length, t, i;
//
//   // While there remain elements to shuffle…
//   while () {
//
//     // Pick a remaining element…
//     i = Math.floor(Math.random() * m--);
//
//     // And swap it with the current element.
//     t = array[m];
//     array[m] = array[i];
//     array[i] = t;
//   }
//
//   return array;
// }
// }
// PlayerConstructor.prototype.draw(){
//
// // }
// PlayerConstructor.prototype.discard(){
//
// }
