// function logger() {
//     console.log('My Name is Daya');
// }
// //calling function/running/invoking function
// logger();
// logger();
// logger();


// function fruitProcessor(apples, oranges) {
//     const juice = `jucice with ${apples} apples and ${oranges} oranges`
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// function calAge(birthYear) {
//     return 2022 - birthYear;
// }
// const age = calAge(1991);
// console.log('Dayakar age', age);

// const calAge1 = function calAge(birthYear) {
//     return 2022 - birthYear;
// }
// const age1 = calAge1(1991);
// console.log(age, age1);

// const calAge2 = birthYear => 2022 - birthYear;
// const age2 = calAge2(1991);
// console.log('arrowfunction response', age2);

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age3 = 2022 - birthYear;
//     const retirement = 65 - age3;
//     return `${firstName} retires in ${retirement}`;
// }
// console.log('yearsUntilRetirementLeft', yearsUntilRetirement(1991, 'daya'));
// const retirementage = yearsUntilRetirement(1991, 'daya');
// console.log('retirementage', retirementage);
// console.log('retirementage', retirementage);

// function cutPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutPieces(apples);
//     const orangePieces = cutPieces(oranges);

//     const juice = `jucice with ${applePieces} apples and ${orangePieces} oranges`
//     return juice;
// };
// console.log(fruitProcessor(2, 3));

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀
*/
const calcAverage = (x, y, z) => (x + y + z) / 3;
//console.log(calcAverage(44, 23, 71));
let avgDolphins = calcAverage(44, 23, 71);
let avgKoalas = calcAverage(65, 54, 49);
checkWinner(avgDolphins, avgKoalas);

function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win 🏆 ${avgDolphins} vs. ${avgKoalas}`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win 🏆 ${avgKoalas} vs. ${avgDolphins}`);
    } else {
        console.log(`No one winner 😢 Koalas ${avgKoalas} vs.Dolphins ${avgDolphins}`);
    }

}

avgDolphins = calcAverage(85, 54, 41);
avgKoalas = calcAverage(23, 34, 27);
checkWinner(avgDolphins, avgKoalas);


