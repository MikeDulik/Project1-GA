// array for card deck
var cards = ["A-Spades", "2-Spades", "3-Spades", "4-Spades", "5-Spades", "6-Spades", "7-Spades", "8-Spades", "9-Spades", "10-Spades", "J-Spades", "Q-Spades",
            "K-Spades", "A-Clubs", "2-Clubs","3-Clubs", "4-Clubs", "5-Clubs", "6-Clubs", "7-Clubs", "8-Clubs", "9-Clubs", "10-Clubs", "J-Clubs",
            "Q-Clubs", "K-Clubs", "A-Hearts", "2-Hearts", "3-Hearts", "4-Hearts", "5-Hearts", "6-Hearts", "7-Hearts", "8-Hearts", "9-Hearts", "10-Hearts",
            "J-Hearts", "Q-Hearts", "K-Hearts", "A-Diamonds", "2-Diamonds", "3-Diamonds", "4-Diamonds", "5-Diamonds", "6-Diamonds", "7-Diamonds", "8-Diamonds", "9-Diamonds",
            "10-Diamonds", "J-Diamonds", "Q-Diamonds", "K-Diamonds"];

// array for values with corresponding index of cards array
var values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10,
              1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];

var deckLength = cards.length;
var index = 0;
index = Math.floor((Math.random() * deckLength) + 1);

var dealerCard1 = cards[index];
var dealerVal1 = values[index];

console.log("The cards array length is: " + deckLength);
console.log("The values array length is: " + values.length);
console.log("The random index value is: " + index);
console.log("The " + index + " index of cards yields: " + dealerCard1);
console.log("The " + index + " index of corresponding values yields: " + dealerVal1);

cards.splice(index, 1);
values.splice(index, 1);

deckLength = cards.length;
index = 0;
index = Math.floor((Math.random() * deckLength) + 1);

var dealerCard2 = cards[index];
var dealerVal2 = values[index];

console.log("The cards array length is: " + deckLength);
console.log("The values array length is: " + values.length);
console.log("The random index value is: " + index);
console.log("The " + index + " index of cards yields: " + dealerCard2);
console.log("The " + index + " index of corresponding values yields: " + dealerVal2);
console.log("The initial dealer point total is: " + (dealerVal1 + dealerVal2));
// console.log("Type of val1: " + typeof(val1));
// console.log("Type of val2: " + typeof(val2));
