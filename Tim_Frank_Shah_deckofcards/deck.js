

function DeckConstructor() {

//#####----    Build Deck     -------#####
  var deck = {};

  var suits = ['diamond', 'club', 'heart', 'spade'],
      values = ['ace','2','3','4','5','6','7','8','9','10','jack','queen','king'];

      deck.cards=[];

      function build_deck() {
        for (var i = 0; i < suits.length; i++) {
          for (var j = 0; j < values.length; j++) {
            deck.cards.push(CardConstructor(values[j], suits[i]));
          }

        };
      }
      build_deck();


  //Methods
  deck.display = function(){
    console.log(deck.cards);
    for (var i = 0; i < deck.cards.length; i++) {
      deck.cards[i].display();

    }
  }

//#####----    Shuffle     -------#####
  deck.shuffle = function(){
  var copy = [], n = deck.cards.length, i;
  // While there remain elements to shuffle…
  while (n) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * deck.cards.length);
    // If not already shuffled, move it to the new array.
    if (i in deck.cards) {
      copy.push(deck.cards[i]);
      delete deck.cards[i];
      n--;
    }
  }
  deck.cards = copy;
  // return copy;
}

//#####----    Deal     -------#####
  deck.deal = function(){
    if (deck.cards.length == 0) {return null};
    return deck.cards.pop();

  }

//#####----    Reset     -------#####
  deck.reset = function(){
    build_deck();
  }
  return deck;
}


//#############################################################
//#####----  Card creator -------#####
function CardConstructor(value,suit) {
  var card = {};
  card.value = value;
  card.suit = suit;
  card.display = function() {
    console.log(card.value, card.suit);
  }
  return card;
}



//#################################################################
// ----------- Players ---------
function PlayerConstructor(name) {
  var player = {};
  player.name = name;
  player.hand = [];


  player.takeCard = function(deck) {
    player.hand.push(deck.deal());
  }

  player.discard = function(cardIdx) {
    if(player.hand.length > cardIdx){
      player.hand.splice(cardIdx, 1);
    }
  }
  return player;
}





//------------------------------TEST AREA---------------------------
var myDeck =  DeckConstructor();
// myDeck.display();
myDeck.shuffle();
myDeck.display();

var card = myDeck.deal();
// console.log("test",card);


var player1 = PlayerConstructor('frank');
player1.takeCard(myDeck);
player1.takeCard(myDeck);
player1.takeCard(myDeck);
player1.takeCard(myDeck);
console.log(player1);

player1.discard(0); // index of player's card
console.log(player1);
// myDeck.discard();
