function calculateTax(income){
    if (income<=250000){
        return 0;
    }
    else if (income>250000 && income <=500000) {
        return 0.05*income ;
    }
    else if (income>500000 && income <=750000) {
        return 0.1*income ;
    }
    else if (income>750000 && income <=1000000) {
        return 0.15*income ;
    }
    else if (income>1000000 && income <=1250000) {
        return 0.2*income ;
    }
    else if (income>1250000 && income <=1500000) {
        return 0.25*income ;
    }
    else{
        return 0.30*income ;
    }
}

const taxToBePaid = calculateTax(1000000);
console.log(`he amount of tax to be paid  is ${taxToBePaid}`);

// console.log(calculateTax(1000000));
// console.log(calculateTax(1200000));
// console.log(calculateTax(200000));
// console.log(calculateTax(1500000));
// console.log(calculateTax(1400000));