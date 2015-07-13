// global vars
var deckLength = 52;
var valLength = 52;
//var index = Math.floor((Math.random() * deckLength) + 1);
//var dealerCard1 = "";
// var dealerVal1 = 0;
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
values.splice(index, 1)
// deckDeal(dealerCard1, dealerVal1, dealerTotal);

console.log("The cards array length is: " + deckLength);
console.log("The values array length is: " + valLength);
console.log("The random index value is: " + index);
console.log("The dealerCard1 yields: " + dealerCard1);
console.log("The dealerCard1 corresponding value yields: " + dealerVal1);
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

console.log("The cards array length is: " + deckLength);
console.log("The values array length is: " + valLength);
console.log("The random index value is: " + index);
console.log("The dealerCard2 yields: " + dealerCard2);
console.log("The dealerCard2 corresponding value yields: " + dealerVal2);
console.log("The initial dealer point total is: " + dealerTotal);


deckLength = cards.length;
valLength = values.length;
index = 0;
index = Math.floor((Math.random() * deckLength) + 1);
//deckInit(deckLength, valLength, index);

var userCard1 = cards[index];
var userVal1 = values[index];
cards.splice(index, 1);
values.splice(index, 1);
// deckDeal(userCard1, userVal1, index, userTotal);

console.log("The cards array length is: " + deckLength);
console.log("The values array length is: " + valLength);
console.log("The random index value is: " + index);
console.log("The userCard1 yields: " + userCard1);
console.log("The userCard1 corresponding value yields: " + userVal1);

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

console.log("The cards array length is: " + deckLength);
console.log("The values array length is: " + valLength);
console.log("The random index value is: " + index);
console.log("The userCard2 yields: " + userCard2);
console.log("The userCard 2 corresponding value yields: " + userVal2);
console.log("The initial user point total is: " + userTotal);

var userChoice1 = prompt("User point total: " + userTotal +
                          "\nDealer's first card: " + dealerCard1 +
                          "\nHit? yes/no");

var userCard3 = "";
var userVal3 = 0;

if (userChoice1 == "yes"){
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

  console.log("The cards array length is: " + deckLength);
  console.log("The values array length is: " + valLength);
  console.log("The random index value is: " + index);
  console.log("The userCard3 yields: " + userCard3);
  console.log("The userCard3 corresponding value yields: " + userVal3);
  console.log("The user point total is: " + userTotal);

  if (userTotal > 21){
    alert("USER JUST BUSTED BRO! DEALER WINS!");
  }
  else if ((userTotal === 21) && dealerTotal !== 21){
    alert("BLACKJACK! USER WINS!")
  }
  else{
    var userChoice2 = prompt("User point total: " + userTotal +
                              "\nDealer's first card: " + dealerCard1 +
                              "\nHit? yes/no");

    if (userChoice1 == "yes"){
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

      console.log("The cards array length is: " + deckLength);
      console.log("The values array length is: " + valLength);
      console.log("The random index value is: " + index);
      console.log("The userCard4 yields: " + userCard4);
      console.log("The userCard4 corresponding value yields: " + userVal4);
      console.log("The user point total is: " + userTotal);

      if (userTotal > 21){
        alert("USER JUST BUSTED BRO! DEALER WINS!");
      }
      else if ((userTotal === 21) && dealerTotal !== 21){
        alert("BLACKJACK! USER WINS!")
      }
      else{
        var userChoice2 = prompt("User point total: " + userTotal +
                                  "\nDealer's first card: " + dealerCard1 +
                                  "\nHit? yes/no");

        if (userChoice1 == "yes"){
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

          console.log("The cards array length is: " + deckLength);
          console.log("The values array length is: " + valLength);
          console.log("The random index value is: " + index);
          console.log("The userCard5 yields: " + userCard3);
          console.log("The userCard5 corresponding value yields: " + userVal3);
          console.log("The user point total is: " + userTotal);
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
