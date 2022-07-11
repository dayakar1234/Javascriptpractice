function logger() {
    console.log('My Name is Daya');
}
//calling function/running/invoking function
logger();
logger();
logger();


function fruitProcessor(apples, oranges) {
    const juice = `jucice with ${apples} apples and ${oranges} oranges`
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

function calAge(birthYear) {
    return 2022 - birthYear;
}
const age = calAge(1991);
console.log('Dayakar age', age);

const calAge1 = function calAge(birthYear) {
    return 2022 - birthYear;
}
const age1 = calAge1(1991);
console.log(age, age1);

const calAge2 = birthYear => 2022 - birthYear;
const age2 = calAge2(1991);
console.log('arrowfunction response', age2);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age3 = 2022 - birthYear;
    const retirement = 65 - age3;
    return `${firstName} retires in ${retirement}`;
}
console.log('yearsUntilRetirementLeft', yearsUntilRetirement(1991, 'daya'));
const retirementage = yearsUntilRetirement(1991, 'daya');
console.log('retirementage', retirementage);
console.log('retirementage1', retirementage);