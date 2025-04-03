/**
 * 1. Create an array of strings with the names of some items in the room you
 *    are sitting in right now. For example "chair", "keyboard" etc
 * 2. Now think of 3 drawers or shelves or boxes that you have nearby. Make an
 *    array with a sub-array for each drawer or box, and add 5 things in each
 *    sub-array. Do this for 3 boxes. You should have a two dimensional array.
 * 3. Pick 5 things from the two dimensional array just created, and log them to
 *    the console using array referencing.
 * 4. Use a for loop to create a array of the numbers from 1 to 100.
 * 5. Use another for loop to go through the array of numbers just created and
 *    log the sum of all the numbers.
 * 6. Use the random number generator from previous labs and another for loop to
 *    create a array of 100 random numbers.
 * 7. Use another for loop to go over each of these random numbers and put them
 *    in one of two arrays. One for odd numbers, and one for even numbers.
 * 8. Make the for loop that logs the sum of all the numbers in an array into a
 *    function that takes an array as an argument and returns the sum. Use this
 *    function to log the sum of the two arrays of odd and even numbers.
 */

// 1
let roomItems = ["chair", "desk", "heater", "rug"];

// 2
let drawers = [
  ["11", "12", "13", "14", "15"],
  ["21", "22", "23", "24", "25"],
  ["31", "32", "33", "34", "35"],
];

//3
console.log(drawers[0][0]);
console.log(drawers[0][4]);
console.log(drawers[1][1]);
console.log(drawers[2][2]);
console.log(drawers[2][4]);

//4
let hundreds = [];
for (let i = 0; i < 100; i++) {
  hundreds.push(i + 1);
}

//5
let sum = 0;
for (let i = 0; i < 100; i++) {
  sum += hundreds[i];
}
console.log(`sum = ${sum}`);

//6
function randomNumber() {
  return Math.floor(Math.random() * 100 + 1);
}

let randoms = [];
for (let i = 0; i < 100; i++) {
  randoms.push(randomNumber());
}

//7
let odds = [];
let evens = [];
for (let i = 0; i < 100; i++) {
  if (randoms[i] % 2 == 0) {
    evens.push(randoms[i]);
  } else {
    odds.push(randoms[i]);
  }
}

//8
function sumArray(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

console.log(`evens sum: ${sumArray(evens)}`);
console.log(`odds sum: ${sumArray(odds)}`);
