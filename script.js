// let js = 'amazing';
// console.log(40 + 10 + 23 - 10);
// console.log('Jonas');
// console.log(23);
// let firstname = 'bob';
// console.log(firstname);
// let country = 'INDIA';
// let continent = 'ASIA';
// let population = 100000;
// console.log(country);
// console.log(continent);
// console.log(population);
//let reqassianble  during the execution of the program(mutable)

/*let age = 30;
//const cannot be changed at any time(immutable)
const birthYear = 1991;
console.log(typeof birthYear);
var job = 'programmer';
console.log(typeof job);

//var*/
// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);
// console.log(ageJonas * 2, ageSarah / 2, 2 ** 3);

// const name1 = 'daya';
// const name2 = 'kar';
// const name3 = 'pattipati';
// console.log(`${name1 + name2 + ' ' + name3}`);

// let x = 10 + 5;
// x += 10;
// x *= 4;
// x += 1;
// x--;
// x--;
// console.log(x);

//comparator operators

// console.log(ageJonas > ageSarah);
// console.log(ageJonas < ageSarah);
// console.log(ageSarah >= 18);
// const isFullAge = ageSarah >= 18;
// console.log(isFullAge);

// let x, y;
// x = y = 25 - 10 - 5;
// console.log(x, y);

// const averageAge = (ageJonas + ageSarah) / 2;
// console.log(ageJonas, ageSarah, averageAge);
//test1
//let markHeight = 1.69, markweight = 78, johnHeight = 1.95, johnWeight = 92;
//test2
//let markHeight = 1.88, markweight = 95, johnHeight = 1.76, johnWeight = 85;
// let markBMI = markweight / (markHeight * markHeight);
// console.log(markBMI);
// let johnBMI = johnWeight / (johnHeight * johnHeight);
// console.log(johnBMI);
// //let isMarkHigherBMI =
// if (markBMI > johnBMI) {
//     console.log(`MarkBMI (${markBMI}) is higher than johnas (${johnBMI})`);
// } else {
//     console.log(`JohnasBMI (${johnBMI}) is higher than MarkBMI (${markBMI})`);
// }

//Strings

// const firstName = 'Jonas';
// const job = 'Teacher';
// const birthYear = 1991;
// const currentYear = 2037;
// const jonas = "I'am" + firstName + ',a ' + (currentYear - birthYear) + ' years old' + job + '!';
// console.log(jonas);

//type conversions

// const x = '1991';
// console.log(Number(x), x);

//falsy vqaalues 0 undefined {}''
//type coercison

// const dolphinsAvgScore = (96 + 108 + 89) / 3;
// console.log(team1AvgScore);
// const koalasAvgScore = (88 + 91 + 110) / 3;
// console.log(team2AvgScore);
// if (dolphinsAvgScore > koalasAvgScore) {
//     console.log("dolphins is the winner🏆");
// } else {
//     console.log("koalas is the winner🏆");
// }

// 
const billval = 430;
const tip = (billval >= 50 && billval <= 300) ? billval * 0.15 : billval * 0.2;
console.log(billval, tip);
const totalBill = billval + tip;
console.log(`The bill is ${billval}, The tip is ${tip},The totalBill is ${totalBill}`);
