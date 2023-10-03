// Find the Factorial of a Given Number
// A factorial of a number is easy to find on paper.
// For example, the factorial of 5 is 120.
// Calculated by multiplying 5 with 4 and its result with 3 and its result with 2
// and its result with 1. But writing code to find the factorial can be tricky.

// Here's simple way to complete this coding challenge is by using the while loop.

let number = 6;

// we start by declaring the original number
let sum = number;

// then we mulitiply that number by every number 
// under the original number
// example,
// say number = 6; 
// 6! = 6 x 5 x 4 x 3 x 2 x 1 = 720

while (number > 1) {
    number = number - 1;
    sum = sum * number; 
}


console.log(sum);
