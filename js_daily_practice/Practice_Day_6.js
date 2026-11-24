// 1. Write a function declaration calcAge(birthYear) that returns the current age
// (use 2026 as the current year). Call it with 1998 and log the result.
function calcAge(birthYear) {
  return 2026 - birthYear;
}

console.log(calcAge(1998));

// 2. Write the same function as a function expression, then as an arrow function.
// Call each and confirm they give the same result.
const calcAge2 = function (birthYear) {
  return 2026 - birthYear;
};

const calcAge3 = birthYear => 2026 - birthYear;

console.log(calcAge2(1998));
console.log(calcAge3(1998));

// 3. Write a function isEven(num) that returns true if the number is even,
// false otherwise. Use the ternary operator inside it.
// Test it with 4 and 7.
const isEven = function (num) {
  return num % 2 === 0 ? true : false;
};

console.log(isEven(4));
console.log(isEven(7));

// 4. Write a function describeCountry(country, population, capital) that
// returns a template literal like:
// India has 1400 million people and its capital city is New Delhi.
const describeCountry = function (country, population, capital) {
  return `${country} has ${population} million people and its capital city is ${capital}.`;
};

console.log(describeCountry('India', 1400, 'New Delhi'));

// 5. Write two functions:
// percentageOfWorld(population) returns (population / 7900) * 100.
// describePopulation(country, population) calls percentageOfWorld and returns:
// China has 1441 million people, which is about 18.24% of the world.
const percentageOfWorld = function (population) {
  return (population / 7900) * 100;
};

const describePopulation = function (country, population) {
  return `${country} has ${population} million people, which is about ${percentageOfWorld(population).toFixed(2)} of the world.`;
};

console.log(describePopulation('China', 1441));

// 6. Write a function getGrade(marks) that returns 'A' for 90+, 'B' for 75+,
// 'C' for 50+, otherwise 'Fail'. Use if / else if / else.
// Log the result for three different marks.
const getGrade = function (marks) {
  if (marks >= 90) {
    return 'A';
  } else if (marks >= 75) {
    return 'B';
  } else if (marks >= 50) {
    return 'C';
  } else {
    return 'Fail';
  }
};

console.log(getGrade(95));
console.log(getGrade(85));
console.log(getGrade(55));

// Arrays

// 7. Create an array colors = ['red', 'green', 'blue']. Log the first element,
// the last element (without hardcoding the index 2), and the array length.
const colors = ['red', 'green', 'blue'];

console.log(colors[0]);
console.log(colors[colors.length - 1]);
console.log(colors.length);

// 8. Using the same array, perform each operation and log the array after:
colors.push('Yellow');
console.log(colors);

colors.unshift('black');
console.log(colors);

console.log(colors.pop());
console.log(colors);

console.log(colors.shift());
console.log(colors);

// 9. Given const friends = ['Amit', 'Sara', 'John'], log the index of 'Sara',
// and log whether 'Zoe' is in the array using includes.
// Then write an if / else that logs 'You have a friend called Sara'
// if she's in the array.
const friends = ['Amit', 'Sara', 'John'];

console.log(friends.indexOf('Sara'));
console.log(friends.includes('Zoe'));

if (friends.includes('Sara')) {
  console.log('You have a friend called Sara.');
} else {
  console.log('Sara is not in the friend list.');
}

// 10. Write a function calcTip(bill) that returns 15% of the bill if the bill
// is between 50 and 300 (inclusive), and 20% otherwise.
// Test it with 275, 40, and 430.
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill;
};

console.log(calcTip(275));
console.log(calcTip(40));
console.log(calcTip(430));

// 11. Create an array bills = [125, 555, 44].
// Create a tips array by calling calcTip on each bill.
// Then create a totals array with bill + tip for each.
const bills = [125, 555, 44];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(bills[i] + tips[i]);
}

console.log(bills);
console.log(tips);
console.log(totals);

// Objects

// 12. Create an object myCountry with country, capital, language, population,
// and neighbours (an array). Log the whole object.
const myCountry = {
  country: 'India',
  capital: 'New Delhi',
  language: [
    'English',
    'Hindi',
    'Marathi',
    'Tamil',
    'Sanskrit',
    'Telugu',
    'Bengali',
    'Bhojpuri',
  ],
  population: 1481000000,
  neighbours: ['Sri Lanka', 'Nepal', 'Bangladesh', 'Pakistan', 'Bhutan'],
};

console.log(myCountry);

// 13. Using myCountry: log the capital with dot notation, then log the language
// with bracket notation. Then increase population by 2 million and decrease
// it by 1 million using any notation.
console.log(myCountry.capital);
console.log(myCountry['language']);

myCountry.population += 2000000;
console.log(myCountry.population);

myCountry.population -= 1000000;
console.log(myCountry.population);

// 14. Use bracket notation with a variable:
// create const key = 'capital' and log myCountry[key].
// Then use a template literal to log:
// India has 5 neighbouring countries and a capital called New Delhi.
const key = 'capital';

console.log(myCountry[key]);
console.log(
  `${myCountry.country} has ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`,
);

// 15. Add a method describe to myCountry that uses this to log:
// India has 1481 million English-speaking people, 5 neighbouring countries
// and a capital called New Delhi. Call it.
myCountry.describe = function () {
  console.log(
    `${this.country} has ${this.population / 1000000} million ${this.language[0]}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`,
  );
};

myCountry.describe();

// 16. Add a method checkIsland to myCountry that sets a new property
// this.isIsland to true if neighbours.length === 0, otherwise false.
// Call it and log the property.
myCountry.checkIsland = function () {
  this.isIsland = this.neighbours.length === 0;
};

myCountry.checkIsland();
console.log(myCountry.isIsland);

// Loops

// 17. Use a for loop to log 'Lifting weights repetition 1'
// through 'Lifting weights repetition 10'.
for (let i = 1; i <= 10; i++) {
  console.log(`Lifting weights repetition ${i}`);
}

// 18. Given const nums = [10, 20, 30, 40, 50], use a for loop to log each
// element, then use another loop to calculate and log the sum.
const nums = [10, 20, 30, 40, 50];
let sum = 0;

for (let i = 0; i < nums.length; i++) {
  console.log(nums[i]);
  sum += nums[i];
}

console.log(sum);

// 19. Loop through friends array backwards and log each name.
// Then use continue to skip 'Sara', and break to stop when 'John' is found.
for (let i = friends.length - 1; i >= 0; i--) {
  console.log(friends[i]);
}

for (let i = 0; i < friends.length; i++) {
  if (friends[i] === 'Sara') {
    continue;
  }

  console.log(friends[i]);
}

for (let i = 0; i < friends.length; i++) {
  if (friends[i] === 'John') {
    break;
  }

  console.log(friends[i]);
}

// 20. Use a while loop to keep rolling a dice until you roll a 6.
// Log 'Loop is about to end...' when a 6 appears.
let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;

  if (dice === 6) {
    console.log('Loop is about to end...');
  }
}
