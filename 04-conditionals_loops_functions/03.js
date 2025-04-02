function getRandomNumber(){
    return Math.floor((Math.random() * 100) + 1);
}

/**
 * 1. Create while loop equivalents of the loops in the previous exercises!
 *
 * 2. Using the random number generator above, write a while loop that generates
 *    random numbers until it has generated one that is divisible by 11. Do you
 *    remember what operator to use?
 */

 console.log("************** 5's **********************")
// for (let i=5; i<1000; i += 5) {
//     console.log(i);
// }
let i=5;
while (i<1000) {
    console.log(i);
    i += 5;
}

console.log("************** 100 downTo -100 **********************")
// for (let i=100; i>=-100; i--) {
//     console.log(i);
// }
i=100;
while (i>=-100){
    console.log(i);
    i--;
}

console.log("************** REDICULOUS COUNT!! **********************")
let newCounter=0;
// for (let i=0; i <= 5000; i++) {
//     newCounter += (i%2 ==0 ? 3 : -1);
//     console.log(newCounter);
// }
i=0;
while (i<=5000) {
    newCounter += (i%2 ==0 ? 3 : -1);
    console.log(newCounter);
    i++;
}

let divisibleBy11;
do {
    divisibleBy11 = getRandomNumber();
    console.log(divisibleBy11);
} while(divisibleBy11 % 11 != 0);
console.log(`${divisibleBy11} is divisible by 11!`)