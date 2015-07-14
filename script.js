// alert("House Rules:
//       \nAces count as 1 point.
//       \nDealer's moves are dictated by casino rules.
//       \nUser may choose to hit until he has five cards total.");
// global vars
var deckLength = 52;
var valLength = 52;
var userWins = 0;
var dealerWins = 0;
//var index = Math.floor((Math.random() * deckLength) + 1);
//var dealerCard1 = "";
//var dealerVal1 = 0;
//var dealerTotal = 0;
// var userTotal = 0;

// array for card deck
var cards = ["A-Spades", "2-Spades", "3-Spades", "4-Spades", "5-Spades", "6-Spades", "7-Spades", "8-Spades", "9-Spades", "10-Spades", "J-Spades", "Q-Spades",
            "K-Spades", "A-Clubs", "2-Clubs","3-Clubs", "4-Clubs", "5-Clubs", "6-Clubs", "7-Clubs", "8-Clubs", "9-Clubs", "10-Clubs", "J-Clubs",
            "Q-Clubs", "K-Clubs", "A-Hearts", "2-Hearts", "3-Hearts", "4-Hearts", "5-Hearts", "6-Hearts", "7-Hearts", "8-Hearts", "9-Hearts", "10-Hearts",
            "J-Hearts", "Q-Hearts", "K-Hearts", "A-Diamonds", "2-Diamonds", "3-Diamonds", "4-Diamonds", "5-Diamonds", "6-Diamonds", "7-Diamonds", "8-Diamonds", "9-Diamonds",
            "10-Diamonds", "J-Diamonds", "Q-Diamonds", "K-Diamonds"];

// array for values with corresponding index of cards array
var values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10,
              1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];

$( "#d-card1" ).html("");
$( "#d-card2" ).html("");
$( "#d-card3" ).html("");
$( "#d-card4" ).html("");
$( "#d-card5" ).html("");
$( "#d-total" ).html("");
$( "#u-card1" ).html("");
$( "#u-card2" ).html("");
$( "#u-card3" ).html("");
$( "#u-card4" ).html("");
$( "#u-card5" ).html("");
$( "#u-total" ).html("");

var dealerCard1 = cards[index];
var dealerVal1 = values[index];
//var dealerTotal = dealerVal1;
//var dealerTotal = dealerVal1;
var userTotal = 0;

var deckLength = cards.length;
var valLength = values.length;
var index = 0;
index = Math.floor((Math.random() * deckLength) + 1);
// deckInit(deckLength, valLength, index);

var dealerCard1 = cards[index];
var dealerVal1 = values[index];
cards.splice(index, 1);
values.splice(index, 1);
// deckDeal(dealerCard1, dealerVal1, dealerTotal);
$( "#d-card1" ).html("Card 1: " + dealerCard1);
$( "#d-total" ).html("");

// console.log("The cards array length is: " + deckLength);
// console.log("The values array length is: " + valLength);
// console.log("The random index value is: " + index);
// console.log("The dealerCard1 yields: " + dealerCard1);
// console.log("The dealerCard1 corresponding value yields: " + dealerVal1);

//console.log("The dealer point total is: " + dealerTotal);
//logOutput(dealerCard1, dealerVal1, dealerTotal);

deckLength = cards.length;
valLength = values.length;
index = 0;
index = Math.floor((Math.random() * deckLength) + 1);
//deckInit(deckLength, valLength, index);

var dealerCard2 = cards[index];
var dealerVal2 = values[index];
var dealerTotal = dealerVal1 + dealerVal2;
cards.splice(index, 1);
values.splice(index, 1);
//deckDeal(dealerCard2, dealerVal2, index, dealerTotal);
$( "#d-card2" ).html("Card 2: currently face-down");

// console.log("The cards array length is: " + deckLength);
// console.log("The values array length is: " + valLength);
// console.log("The random index value is: " + index);
// console.log("The dealerCard2 yields: " + dealerCard2);
// console.log("The dealerCard2 corresponding value yields: " + dealerVal2);
// console.log("The initial dealer point total is: " + dealerTotal);


deckLength = cards.length;
valLength = values.length;
index = 0;
index = Math.floor((Math.random() * deckLength) + 1);
//deckInit(deckLength, valLength, index);

var userCard1 = cards[index];
$( "#u-card1" ).html("Card 1: " + userCard1);
var userVal1 = values[index];
$( "#u-total" ).html("");
cards.splice(index, 1);
values.splice(index, 1);
// deckDeal(userCard1, userVal1, index, userTotal);

// console.log("The cards array length is: " + deckLength);
// console.log("The values array length is: " + valLength);
// console.log("The random index value is: " + index);
// console.log("The userCard1 yields: " + userCard1);
// console.log("The userCard1 corresponding value yields: " + userVal1);

deckLength = cards.length;
valLength = values.length;
index = 0;
index = Math.floor((Math.random() * deckLength) + 1);
//deckInit(deckLength, valLength, index);

var userCard2 = cards[index];
var userVal2 = values[index];
var userTotal = userVal1 + userVal2;
cards.splice(index, 1);
values.splice(index, 1);
// deckDeal(userCard2, dealerVal2, index, userTotal);
$( "#u-card2" ).html("Card 2: " + userCard2);
$( "#u-total" ).html("Point Total: " + userTotal);

// console.log("The cards array length is: " + deckLength);
// console.log("The values array length is: " + valLength);
// console.log("The random index value is: " + index);
// console.log("The userCard2 yields: " + userCard2);
// console.log("The userCard 2 corresponding value yields: " + userVal2);
// console.log("The initial user point total is: " + userTotal);

var userChoice1 = prompt("User point total: " + userTotal +
                          "\nDealer's first card: " + dealerCard1 +
                          "\nhit/stand");

var userCard3 = "";
var userVal3 = 0;

if (userChoice1 == "stand"){
  $( "#d-card2" ).html("Card 2: " + dealerCard2);
  $( "#d-total" ).html("Point Total: " + dealerTotal);
  if (dealerTotal > userTotal){
    dealerWins++;
    alert("DEALER WINS!");
  }
  else if (dealerTotal < 17){
    deckLength = cards.length;
    valLength = values.length;
    index = 0;
    index = Math.floor((Math.random() * deckLength) + 1);
    //deckInit(deckLength, valLength, index);

    dealerCard3 = cards[index];
    dealerVal3 = values[index];
    dealerTotal = dealerTotal + dealerVal3;
    cards.splice(index, 1);
    values.splice(index, 1);
    // deckDeal(dealerCard3, dealerVal3, index, dealerTotal);

    $( "#d-card3" ).html("Card 3: " + dealerCard3);
    $( "#d-total" ).html("Point Total: " + dealerTotal);
//
    if (dealerTotal > 21){
      userWins++;
      alert("DEALER BUSTS! USER WINS!");
    }
    else if (dealerTotal > userTotal){
      dealerWins++;
      alert("DEALER WINS!");
    }
    else if ((dealerTotal < userTotal) && (dealerTotal < 17)){
      deckLength = cards.length;
      valLength = values.length;
      index = 0;
      index = Math.floor((Math.random() * deckLength) + 1);
      //deckInit(deckLength, valLength, index);

      dealerCard4 = cards[index];
      dealerVal4 = values[index];
      dealerTotal = dealerTotal + dealerVal4;
      cards.splice(index, 1);
      values.splice(index, 1);
      // deckDeal(dealerCard4, dealerVal4, index, dealerTotal);

      $( "#d-card4" ).html("Card 4: " + dealerCard4);
      $( "#d-total" ).html("Point Total: " + dealerTotal);

      if (dealerTotal > 21){
        userWins++;
        alert("DEALER JUST BUSTED! USER WINS!");
      }
      else if (userTotal === dealerTotal){
        alert("PUSH! DEALER AND USER TIE!");
      }
      else if (userTotal > dealerTotal){
        userWins++;
        alert("USER WINS!");
      }
      else {
        dealerWins++;
        alert("DEALER WINS!");
      }
    }
  }
  // if (dealerTotal > 21){
  //   userWins++;
  //   alert("DEALER JUST BUSTED! USER WINS!");
  // }
  // else if (userTotal === dealerTotal){
  //   alert("PUSH! DEALER AND USER TIE!");
  // }
  // else if (userTotal > dealerTotal){
  //   userWins++;
  //   alert("USER WINS!");
  // }
  // else {
  //   dealerWins++;
  //   alert("DEALER WINS!");
  // }
}
else if (userChoice1 == "hit"){
  deckLength = cards.length;
  valLength = values.length;
  index = 0;
  index = Math.floor((Math.random() * deckLength) + 1);
  //deckInit(deckLength, valLength, index);

  userCard3 = cards[index];
  userVal3 = values[index];
  userTotal = userTotal + userVal3;
  cards.splice(index, 1);
  values.splice(index, 1);
  // deckDeal(userCard3, userVal3, index, userTotal);
  $( "#u-card3" ).html("Card 3: " + userCard3);
  $( "#u-total" ).html("Point Total: " + userTotal);

  // console.log("The cards array length is: " + deckLength);
  // console.log("The values array length is: " + valLength);
  // console.log("The random index value is: " + index);
  // console.log("The userCard3 yields: " + userCard3);
  // console.log("The userCard3 corresponding value yields: " + userVal3);
  // console.log("The user point total is: " + userTotal);
    if (dealerTotal < 17){
      deckLength = cards.length;
      valLength = values.length;
      index = 0;
      index = Math.floor((Math.random() * deckLength) + 1);
      //deckInit(deckLength, valLength, index);

      dealerCard4 = cards[index];
      dealerVal4 = values[index];
      dealerTotal = dealerTotal + dealerVal4;
      cards.splice(index, 1);
      values.splice(index, 1);
      // deckDeal(dealerCard4, dealerVal4, index, dealerTotal);

      $( "#d-card3" ).html("Card 3: " + dealerCard4);
      $( "#d-total" ).html("Point Total: " + dealerTotal);
    }

  if (userTotal > 21){
    $( "#d-card2" ).html("Card 2: " + dealerCard2);
    $( "#d-total" ).html("Point Total: " + dealerTotal);
    alert("USER JUST BUSTED BRO! DEALER WINS!");
    dealerWins++;
  }
  else if ((userTotal === 21) && dealerTotal !== 21){
    $( "#d-card2" ).html("Card 2: " + dealerCard2);
    $( "#d-total" ).html("Point Total: " + dealerTotal);
    userWins++;
    alert("BLACKJACK! USER WINS!")
  }
  else{
    var userChoice2 = prompt("User point total: " + userTotal +
                              "\nDealer's first card: " + dealerCard1 +
                              "\nhit/stand");

  if (userChoice2 == "stand"){
    $( "#d-card2" ).html("Card 2: " + dealerCard2);
    $( "#d-total" ).html("Point Total: " + dealerTotal);
    if (dealerTotal > userTotal){
      dealerWins++;
      alert("DEALER WINS!");
    }
    else if (dealerTotal < 17){
      deckLength = cards.length;
      valLength = values.length;
      index = 0;
      index = Math.floor((Math.random() * deckLength) + 1);
      //deckInit(deckLength, valLength, index);

      dealerCard3 = cards[index];
      dealerVal3 = values[index];
      dealerTotal = dealerTotal + dealerVal3;
      cards.splice(index, 1);
      values.splice(index, 1);
      // deckDeal(dealerCard3, dealerVal3, index, dealerTotal);

      $( "#d-card3" ).html("Card 3: " + dealerCard3);
      $( "#d-total" ).html("Point Total: " + dealerTotal);
      if (dealerTotal < 17){
        deckLength = cards.length;
        valLength = values.length;
        index = 0;
        index = Math.floor((Math.random() * deckLength) + 1);
        //deckInit(deckLength, valLength, index);

        dealerCard4 = cards[index];
        dealerVal4 = values[index];
        dealerTotal = dealerTotal + dealerVal4;
        cards.splice(index, 1);
        values.splice(index, 1);
        // deckDeal(dealerCard4, dealerVal4, index, dealerTotal);

        $( "#d-card4" ).html("Card 4: " + dealerCard4);
        $( "#d-total" ).html("Point Total: " + dealerTotal);
      }
    }
    if (dealerTotal > 21){
      userWins++;
      alert("DEALER JUST BUSTED! USER WINS!");
    }
    else if (userTotal === dealerTotal){
      alert("PUSH! DEALER AND USER TIE!");
    }
    else if (userTotal > dealerTotal){
      userWins++;
      alert("USER WINS!");
    }
    else {
      dealerWins++;
      alert("DEALER WINS!");
    }
  }
  else if (userChoice2 == "hit"){
    deckLength = cards.length;
    valLength = values.length;
    index = 0;
    index = Math.floor((Math.random() * deckLength) + 1);
    //deckInit(deckLength, valLength, index);

    userCard4 = cards[index];
    userVal4 = values[index];
    userTotal = userTotal + userVal4;
    cards.splice(index, 1);
    values.splice(index, 1);
    // deckDeal(userCard4, userVal4, index, userTotal);
    $( "#u-card4" ).html("Card 4: " + userCard4);
    $( "#u-total" ).html("Point Total: " + userTotal);


    // console.log("The cards array length is: " + deckLength);
    // console.log("The values array length is: " + valLength);
    // console.log("The random index value is: " + index);
    // console.log("The userCard4 yields: " + userCard4);
    // console.log("The userCard4 corresponding value yields: " + userVal4);
    // console.log("The user point total is: " + userTotal);

    if (userTotal > 21){
      $( "#d-card2" ).html("Card 2: " + dealerCard2);
      $( "#d-total" ).html("Point Total: " + dealerTotal);
      alert("USER JUST BUSTED BRO! DEALER WINS!");
      dealerWins++;
    }
    else if ((userTotal === 21) && dealerTotal !== 21){
      $( "#d-card2" ).html("Card 2: " + dealerCard2);
      $( "#d-total" ).html("Point Total: " + dealerTotal);
      userWins++;
      alert("BLACKJACK! USER WINS!")
    }
    else{
      var userChoice3 = prompt("User point total: " + userTotal +
                                  "\nDealer's first card: " + dealerCard1 +
                                  "\nhit/stand");

    if (userChoice3 == "stand"){
      $( "#d-card2" ).html("Card 2: " + dealerCard2);
      $( "#d-total" ).html("Point Total: " + dealerTotal);
      if (dealerTotal > userTotal){
        dealerWins++;
        alert("DEALER WINS!");
      }
      else if (dealerTotal < 17){
        deckLength = cards.length;
        valLength = values.length;
        index = 0;
        index = Math.floor((Math.random() * deckLength) + 1);
        //deckInit(deckLength, valLength, index);

        dealerCard3 = cards[index];
        dealerVal3 = values[index];
        dealerTotal = dealerTotal + dealerVal3;
        cards.splice(index, 1);
        values.splice(index, 1);
        // deckDeal(dealerCard3, dealerVal3, index, dealerTotal);

        $( "#d-card3" ).html("Card 3: " + dealerCard3);
        $( "#d-total" ).html("Point Total: " + dealerTotal);

        if (dealerTotal < 17){
          deckLength = cards.length;
          valLength = values.length;
          index = 0;
          index = Math.floor((Math.random() * deckLength) + 1);
          //deckInit(deckLength, valLength, index);

          dealerCard4 = cards[index];
          dealerVal4 = values[index];
          dealerTotal = dealerTotal + dealerVal4;
          cards.splice(index, 1);
          values.splice(index, 1);
          // deckDeal(dealerCard4, dealerVal4, index, dealerTotal);

          $( "#d-card4" ).html("Card 4: " + dealerCard4);
          $( "#d-total" ).html("Point Total: " + dealerTotal);
        }
      }
        if (userTotal === dealerTotal){
          alert("PUSH! DEALER AND USER TIE!");
        }
        else if (usertTotal > dealerTotal){
          userWins++;
          alert("USER WINS!");
        }
        //else if ()
      }
      else if (userChoice3 == "hit"){
        deckLength = cards.length;
        valLength = values.length;
        index = 0;
        index = Math.floor((Math.random() * deckLength) + 1);
        //deckInit(deckLength, valLength, index);

        userCard5 = cards[index];
        userVal5 = values[index];
        userTotal = userTotal + userVal5;
        cards.splice(index, 1);
        values.splice(index, 1);
        // deckDeal(userCard5, userVal5, index, userTotal);
        $( "#u-card5" ).html("Card 5: " + userCard5);
        $( "#u-total" ).html("Point Total: " + userTotal);

        // console.log("The cards array length is: " + deckLength);
        // console.log("The values array length is: " + valLength);
        // console.log("The random index value is: " + index);
        // console.log("The userCard5 yields: " + userCard3);
        // console.log("The userCard5 corresponding value yields: " + userVal3);
        // console.log("The user point total is: " + userTotal);

        if (userTotal > 21){
          $( "#d-card2" ).html("Card 2: " + dealerCard2);
          $( "#d-total" ).html("Point Total: " + dealerTotal);
          alert("USER JUST BUSTED BRO! DEALER WINS!");
          dealerWins++;
        }
        else if ((userTotal === 21) && (dealerTotal !== 21)){
          $( "#d-card2" ).html("Card 2: " + dealerCard2);
          $( "#d-total" ).html("Point Total: " + dealerTotal);
          userWins++;
          alert("BLACKJACK! USER WINS!")
        }
        else if ((dealerTotal === 21) && (userTotal !== 21)){
          $( "#d-card2" ).html("Card 2: " + dealerCard2);
          $( "#d-total" ).html("Point Total: " + dealerTotal);
          alert("BLACKJACK! DEALER WINS!");
          dealerWins++;
        }
        else if (dealerTotal > userTotal){
          alert("DEALER HAS " + dealerTotal +
                "\nUSER HAS " + userTotal +
                "\nDEALER WINS!");
          dealerWins++;
        }
        else if (userTotal > dealerTotal){
          alert("DEALER HAS " + dealerTotal +
                "\nUSER HAS " + userTotal +
                "\nUSER WINS!");
          userWins++;
        }
      }
    }
  }
  }
}

function deckInit( dLength, vLength, i){
  var dLength = cards.length;
  var vLength = values.length;
  var i = 0;
  i = Math.floor((Math.random() * dLength) + 1);
}

function deckDeal( card, val, total){
  index = Math.floor((Math.random() * cards.length) + 1);
  var card = cards[index];
  var val = values[index];
  cards.splice(index, 1);
  values.splice(index, 1);
  total = total + val;
}
