// factorial using recursion

function factorial(n){
    if(n===0){
        return 1;
    }
    else{
        return n * factorial(n-1);
    }

}
let a = 10;
let result_fact = factorial(a);
console.log(`The factorial of ${a} is ${result_fact}`);