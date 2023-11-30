// generating an array between given numbers

let num1 = 10;
let num2 = 25;

// let num_array = []

// while(num1<num2)
// {
//     num1 = num1 + 1;
//     num_array.push(num1)
// }
// console.log(num_array);

// single random generator
let random = Math.random() * (num2 - num1) + num1;

let result_random = Math.floor(random)
console.log(result_random);