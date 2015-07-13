var deckLength = 52;
var index = Math.floor((Math.random() * deckLength) + 1);

// array for card deck
var cards = ["A-Spades", "2-Spades", "3-Spades", "4-Spades", "5-Spades", "6-Spades", "7-Spades", "8-Spades", "9-Spades", "10-Spades", "J-Spades", "Q-Spades",
            "K-Spades", "A-Clubs", "2-Clubs","3-Clubs", "4-Clubs", "5-Clubs", "6-Clubs", "7-Clubs", "8-Clubs", "9-Clubs", "10-Clubs", "J-Clubs",
            "Q-Clubs", "K-Clubs", "A-Hearts", "2-Hearts", "3-Hearts", "4-Hearts", "5-Hearts", "6-Hearts", "7-Hearts", "8-Hearts", "9-Hearts", "10-Hearts",
            "J-Hearts", "Q-Hearts", "K-Hearts", "A-Diamonds", "2-Diamonds", "3-Diamonds", "4-Diamonds", "5-Diamonds", "6-Diamonds", "7-Diamonds", "8-Diamonds", "9-Diamonds",
            "10-Diamonds", "J-Diamonds", "Q-Diamonds", "K-Diamonds"];

// array for values with corresponding index of cards array
var values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10,
              1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];

// var deckLength = cards.length;
// var index = 0;
// index = Math.floor((Math.random() * deckLength) + 1);
deckInit(deckLength, index);

var dealerCard1 = cards[index];
var dealerVal1 = values[index];

console.log("The cards array length is: " + deckLength);
console.log("The values array length is: " + values.length);
console.log("The random index value is: " + index);
console.log("The dealerCard1 yields: " + dealerCard1);
console.log("The dealerCard1 corresponding value yields: " + dealerVal1);

cards.splice(index, 1);
values.splice(index, 1);

deckLength = cards.length;
index = 0;
index = Math.floor((Math.random() * deckLength) + 1);
//deckInit(deckLength, index);

var dealerCard2 = cards[index];
var dealerVal2 = values[index];
var dealerTotal = dealerVal1 + dealerVal2;


console.log("The cards array length is: " + deckLength);
console.log("The values array length is: " + values.length);
console.log("The random index value is: " + index);
console.log("The dealerCard2 yields: " + dealerCard2);
console.log("The dealerCard2 corresponding value yields: " + dealerVal2);
console.log("The initial dealer point total is: " + dealerTotal);

cards.splice(index, 1);
values.splice(index, 1);

deckLength = cards.length;
index = 0;
index = Math.floor((Math.random() * deckLength) + 1);
//deckInit(deckLength, index);

var userCard1 = cards[index];
var userVal1 = values[index];

console.log("The cards array length is: " + deckLength);
console.log("The values array length is: " + values.length);
console.log("The random index value is: " + index);
console.log("The userCard1 yields: " + userCard1);
console.log("The userCard1 corresponding value yields: " + userVal1);

cards.splice(index, 1);
values.splice(index, 1);

deckLength = cards.length;
index = 0;
index = Math.floor((Math.random() * deckLength) + 1);
//deckInit(deckLength, index);

var userCard2 = cards[index];
var userVal2 = values[index];
var userTotal = userVal1 + userVal2;

console.log("The cards array length is: " + deckLength);
console.log("The values array length is: " + values.length);
console.log("The random index value is: " + index);
console.log("The userCard2 yields: " + userCard2);
console.log("The userCard 2 corresponding value yields: " + userVal2);
console.log("The initial user point total is: " + userTotal);

cards.splice(index, 1);
values.splice(index, 1);


var userChoice1 = prompt("User point total: " + userTotal +
                          "\nDealer's first card: " + dealerCard1 +
                          "\nHit? yes/no");

var userCard3 = "";
var userVal3 = 0;

if (userChoice1 == "yes"){
  deckLength = cards.length;
  index = 0;
  index = Math.floor((Math.random() * deckLength) + 1);
  //deckInit(deckLength, index);

  userCard3 = cards[index];
  userVal3 = values[index];
  userTotal = userTotal + userVal3;

  console.log("The cards array length is: " + deckLength);
  console.log("The values array length is: " + values.length);
  console.log("The random index value is: " + index);
  console.log("The userCard3 yields: " + userCard3);
  console.log("The userCard3 corresponding value yields: " + userVal3);
  console.log("The user point total is: " + userTotal);

  cards.splice(index, 1);
  values.splice(index, 1);

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
      index = 0;
      index = Math.floor((Math.random() * deckLength) + 1);
      //deckInit(deckLength, index);

      userCard4 = cards[index];
      userVal4 = values[index];
      userTotal = userTotal + userVal4;

      console.log("The cards array length is: " + deckLength);
      console.log("The values array length is: " + values.length);
      console.log("The random index value is: " + index);
      console.log("The userCard3 yields: " + userCard4);
      console.log("The userCard3 corresponding value yields: " + userVal4);
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
          index = 0;
          index = Math.floor((Math.random() * deckLength) + 1);
          //deckInit(deckLength, index);

          userCard4 = cards[index];
          userVal4 = values[index];
          userTotal = userTotal + userVal4;


          console.log("The cards array length is: " + deckLength);
          console.log("The values array length is: " + values.length);
          console.log("The random index value is: " + index);
          console.log("The userCard3 yields: " + userCard3);
          console.log("The userCard3 corresponding value yields: " + userVal3);
          console.log("The user point total is: " + userTotal);
        }
      }
    }
  }
}

function deckInit( dLength, i){
  var dLength = cards.length;
  var i = 0;
  i = Math.floor((Math.random() * dLength) + 1);
}
