function Deck(){

    this.cards = [['c1.png',11],['c2.png',2],['c3.png',3],['c4.png',4],['c5.png',5],['c6.png',6],['c7.png',7],['c8.png',8],['c9.png',9],['c10.png',10],['cj.png',10],['ck.png',10],['cq.png',10],['d1.png',11 ],[ 'd2.png',2] ,['d3.png',3],['d4.png',4],['d5.png',5],['d6.png',6],['d7.png',7],['d8.png',8],['d9.png',9],['d10.png',10],['dj.png',10],['dk.png',10],['dq.png',10],['h1.png',11 ],[ 'h2.png',2] ,['h3.png',3],['h4.png',4],['h5.png',5],['h6.png',6],['h7.png',7],['h8.png',8],['h9.png',9],['h10.png',10],['hj.png',10],['hk.png',10],['hq.png',10],['s1.png',11],[ 's2.png',2] ,['s3.png',3],['s4.png',4],['s5.png',5],['s6.png',6],['s7.png',7],['s8.png',8],['s9.png',9],['s10.png',10],['sj.png',10],['sk.png',10],['sq.png',10]];
    this.discardCards = [];

};

function Player(name){
    var hand = [];
    var name = name
    this.takeCard = function(card){
        hand.push(card);
        return this;
    }
    this.setName = function(param){
        name = param;
    }
    this.resetHand = function(){
        hand = [];
        return this;
    }
    this.handValue = function(){
        var sum = 0;
        for(var i = 0; i < hand.length; i++){
            sum += hand[i][1];
        }
        return sum;
    }
    this.aceCheck = function(){
        for(var i = 0; i < hand.length; i++){
            if(hand[i][1] == 11){
                hand[i][1] = 1;
                return this;
            }
        }
    }
}

var deck = new Deck();

//PROTOTYPE FUNCTIONS
    //SHUFFLE DECK FUNCTION
Deck.prototype.shuffle = function(){
    var deck = this.cards;
    var cards = deck.length, t, i;
    while(cards){
        i = Math.floor(Math.random() * cards--);
        t = deck[cards];
        deck[cards] = deck[i];
        deck[i] = t;
    }
    return this.cards;
};
    //DEAL A CARD FUNCTION
Deck.prototype.deal = function(){
    return this.cards.shift();
};

    //RESET GAME FUNCTION
Deck.prototype.reset = function(){
    window.location.reload();
};

//ALLOW PAGE TO LAOD COMPLETEDLY
$(document).ready(function(){

    $('#buttons').hide();
    $('#playerName').hide();
    $('.content').hide();
    $('#score').hide();
    var person = new Player("Guest");

    //START GAME ON #NEWGAME BUTTON CLICKED!
    $('#newGame').click(function(){
        $('#newGame').hide();
        $('#buttons').show();
        $('#score').show();
        deck.shuffle();

        var name = prompt('What should we call You!');
        if(name == ''){
            name = 'Guest';
        }
        person.setName(name);

        alert('welcome ' + name);
        $('#playerName').text('Player Name: ' + name).show();
    });

    //DEAL A CARD WHEN #DEAL BUTTON IS CLICKED!
    $('#deal').click(function(){
        $(".content").hide();
        $('#single').show();
        if(person.handValue() < 21){
            var card = deck.deal();
            deck.discardCards.push(card);
            var img = document.createElement("img");
            img.setAttribute("src", "img/"+card[0]);
            $("#single").append(img);
            $('#scoreValue').text(person.takeCard(card).handValue().toString());
            if(person.handValue() > 21){
                person.aceCheck();
                $('#scoreValue').text(person.handValue().toString());
                if(person.handValue() > 21){
                    alert("BUSTED");
                }
            }
            else if(person.handValue() == 21){
                alert("BLACK JACK");
            }

        }
    });

    //SUFFLE DECK WHEN #SHUFFLE BUTTON IS CLICKED!
    $('#shuffle').click(function(){
        deck.shuffle();
        console.log(deck.cards);
        $('.content').text('');
        for(var i = 0; i < deck.cards.length; i++){
            var img = document.createElement("img");
            img.setAttribute("src", "img/"+deck.cards[i][0]);
            $(".content").append(img);
        }
    });

    //RESET GAME WHEN BUTTON #RESET IS CLICK
    $('#reset').click(function(){
        $('#single').text('');
        $('#scoreValue').text("0");
        if(deck.discardCards.length > 0){
            for(var i = 0; i < deck.discardCards.length; i++){
                deck.cards.push(deck.discardCards[i]);
            };
            deck.discardCards = [];
            console.log(deck.cards.length);
            console.log(deck.discardCards.length);
        }
        person.resetHand();
    });

    //DISPLAY DECK OF cards
    $('#show').click(function(){
        $('#single').hide();
        $('.content').show().text('');
        for(var i = 0; i < deck.cards.length; i++){
            var img = document.createElement("img");
            img.setAttribute("src", "img/"+deck.cards[i][0]);
            $(".content").append(img);
        }
    })

});
