/**
 * In these questions you will be practicing how to use the forEach syntax.
 *
 * 1. Use a random number generator to generate an array of 100 values.
 * 2. Use forEach on the array to output the sum, count and average.
 * 3. Use forEach to create a new array from the first one that halves all the
 *    values.
 * 4. Use forEach on the new array to output the sum, count and average again.
 * 5. Refactor: define the sum, count and average function as a separate
 *    function and pass it to the forEach functions as a name.
 */

//1. Use a random number generator to generate an array of 100 values.
function randomNumber() {
  return Math.floor(Math.random() * 100 + 1);
}

let nums = [];
for (let i=0;i<100;i++) {
    nums.push(randomNumber());
}

//2 Use forEach on the array to output the sum, count and average.
let sum = 0;
nums.forEach(num => sum += num);

let count = 0;
nums.forEach(num => count++);

console.log(`Array has ${count} elements with a sum of ${sum} and average value ${sum/count}`);

//3 Use forEach to create a new array from the first one that halves all the values.
let halfNums = [];
nums.forEach(num => halfNums.push(num/2));

//Use forEach on the new array to output the sum, count and average again.
sum = 0;
halfNums.forEach(num => sum += num);

count = 0;
halfNums.forEach(num => count++);

console.log(`New array has ${count} elements with a sum of ${sum} and average value ${sum/count}`);

//5. Refactor: define the sum, count and average function as a separate
//  *    function and pass it to the forEach functions as a name.

function doStuff(array) {
    let sum = 0;
    array.forEach(num => sum += num);

    let count = 0;
    array.forEach(num => count++);

    console.log(`Array has ${count} elements with a sum of ${sum} and average value ${sum/count}`);
}

function sumValues(num) {
    sum += num;
}

function countValues() {
    count++;
}

sum=0;
count=0;

nums.forEach(sumValues);
nums.forEach(countValues);

console.log(`Array has ${count} elements with a sum of ${sum} and average value ${sum/count}`)