// function currying
function curry(num1){
    return function(num2){
        return num1+num2;
    };
}

const addNumbers = curry(10)(20);
console.log(addNumbers);