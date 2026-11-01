'use strict';



// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

// Data needed for first part of the section
const openingHours= {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  };

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],


  // now we will create a function to see how a function when an arguments are passed then how multiple values can be passed in return
  order: function(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // creating function for understanding destructuring object with function parameter

  orderDelivery: function({time,address,starterIndex,mainIndex}) {
    console.log(`Order Recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at time ${time}`);
  },

  orderPasta: function(ing1,ing2,ing3) {
    console.log(`Here is your Delicious Pasta with ingrediants ${ing1}, ${ing2} and ${ing3}`);
  },

  orderPizza: function(mainIngredient, ...otherIngredient) {
            console.log(mainIngredient);
            console.log(otherIngredient);
  },

  openingHours,
};




// ==========================================================================================================================

// Sets


// const orderSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Pizza',
//   'Pasta',
//   'Rissoto',
//   'Pasta',
// ])
// console.log(orderSet);
// console.log(orderSet.size);// gives you the size of sets
// console.log(orderSet.has("Pasta"));
// console.log(orderSet.has("Garlic Bread"));// return boolean values
// const x1= orderSet.add("Lasangne");
// // const x1= orderSet.add("Lasangne", "brownie", "lasangne");// as yo can see only one value is added and rest are left this is the right way to add multiple values const x1 = orderSet.add('Lasagne').add('brownie').add('lasagne');
// console.log(x1);
// console.log(orderSet);// added a new value to the sets
// const x2 = orderSet.delete("Lasangne")
// console.log(x2);
// // console.log(orderSet.delete("Lasangne"));// return boolean value
// console.log(orderSet);
// console.log(orderSet.clear);

// // as it removes the duplicate value


// const oobj = {a:1,b:2,c:3};

// const oset = new Set();
// console.log(oset);
// console.log(oset.add({a:1}));
// console.log(oset.add({a:1}));

 



// const sstring = new Set("Jonasss")
// console.log(sstring);// each letter is now a element of the set and duplicate is now removed

// const empts = new Set()
// console.log(empts);

const staff = ['Waiter','Manager', 'Waiter', 'Chef', 'Waiter', 'Gaurd'];
console.log(staff);// array staff now we will see array to set conversion

const staffUnique = new Set(staff);
console.log(staffUnique);// all the duplicate values are removed and array become set now
console.log(typeof staff, typeof staffUnique);// both belong to object type 

// now we will see set to array conversion

const staffArr = [...staffUnique];
console.log(staffArr);

// ==========================================================================================================================






// // looping object

// const properties = Object.keys(openingHours);
// // console.log(properties); // arrays of the property name of an object

// const value = Object.values(openingHours);
// // console.log(value);

// const entry = Object.entries(openingHours);
// // console.log(entry);

// // we use destructuring and nested destructuring and also looping through object using entries

// for (const [key, {open, close}] of Object.entries(openingHours)) {
//   console.log(`On ${key} we can open at ${open} and close at ${close}`);
// }

// for(const [day, {opens}] of Object.entries({fri:{opens:11}})) {
//   console.log(day,opens);
// }
// //as it stores null and undefined value as an array  
 

// ==========================================================================================================================

// // optional chaining

// // console.log(restaurant.openingHours.mon.open);// you will get runtime typeerror so to avoid you use chaining optional operator

// console.log(restaurant.openingHours?.mon?.open); // as now output gets undefined it avoid the typeerror

// console.log(restaurant.openingHours?.fri?.open);// wihtout stopping the execution flow it give the output 11 as if you get error then JS automatically stops at that line and will not execute the next line but using (?. ) operator that error is avoided and now you we be getting no error and it will execute the next line

// // it is similar to the below thing

// if(restaurant.openingHours && restaurant.openingHours.mon) 
//   console.log(restaurant.openingHours.mon.open);


// // as the if blocks avoid the error similarly the optional chaining operator is very much useful 

// console.log(restaurant.order?.(0,1)); // as it  is giving output but if your code is not having that method then without optional chaining you will get again typeerror if that method does not exist inside that object'

// // console.log(restaurant.orderRissotto(0,1)); // now gets the error so to avoid use optional chaining as it will give undefined or null for the property or method which is not defined or is null

// console.log(restaurant.orderRissotto?.(0,1));// gets undefined now and wont stop the execution flow

// // same thing we can perform in array


// // const users = [{name: "jonas", email:"jonas@io.in"}]
// const users = []

// console.log(users[0]?.name);

// const weekdays = ['mon', 'tues', 'wed', 'thu', 'fri', 'sat', 'sun'];

// const openingHours= {
//     [weekdays[3]]: {
//       open: 12,
//       close: 22,
//     },
//     [weekdays[4]]: {
//       open: 11,
//       close: 23,
//     },
//     [weekdays[5]]: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   };
// // Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],


//   // now we will create a function to see how a function when an arguments are passed then how multiple values can be passed in return
//   order: function(starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   // creating function for understanding destructuring object with function parameter

//   orderDelivery: function({time,address,starterIndex,mainIndex}) {
//     console.log(`Order Recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at time ${time}`);
//   },

//   orderPasta: function(ing1,ing2,ing3) {
//     console.log(`Here is your Delicious Pasta with ingrediants ${ing1}, ${ing2} and ${ing3}`);
//   },

//   orderPizza: function(mainIngredient, ...otherIngredient) {
//             console.log(mainIngredient);
//             console.log(otherIngredient);
//   },

//   // openingHours: {
//   //   thu: {
//   //     open: 12,
//   //     close: 22,
//   //   },
//   //   fri: {
//   //     open: 11,
//   //     close: 23,
//   //   },
//   //   sat: {
//   //     open: 0, // Open 24 hours
//   //     close: 24,
//   //   },
//   // },
//   // in place of defining the complete object you can just specify the property name
//   openingHours,
// };

// const days = ['mon', 'tues', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? "closed";
//   console.log(`On ${day}, we open at ${open}`);
// }





// ==========================================================================================================================


// enhanced object literals


// 1. property short hand

// const openingHours= {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   };
// // Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],


//   // now we will create a function to see how a function when an arguments are passed then how multiple values can be passed in return
//   order: function(starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   // creating function for understanding destructuring object with function parameter

//   orderDelivery: function({time,address,starterIndex,mainIndex}) {
//     console.log(`Order Recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at time ${time}`);
//   },

//   orderPasta: function(ing1,ing2,ing3) {
//     console.log(`Here is your Delicious Pasta with ingrediants ${ing1}, ${ing2} and ${ing3}`);
//   },

//   orderPizza: function(mainIngredient, ...otherIngredient) {
//             console.log(mainIngredient);
//             console.log(otherIngredient);
//   },

//   // openingHours: {
//   //   thu: {
//   //     open: 12,
//   //     close: 22,
//   //   },
//   //   fri: {
//   //     open: 11,
//   //     close: 23,
//   //   },
//   //   sat: {
//   //     open: 0, // Open 24 hours
//   //     close: 24,
//   //   },
//   // },
//   // in place of defining the complete object you can just specify the property name
//   openingHours,
// };


// 2. Method ShortHand


// const openingHours= {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   };
// // Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],


//   // now we will create a function to see how a function when an arguments are passed then how multiple values can be passed in return
//   order(starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   // creating function for understanding destructuring object with function parameter

//   orderDelivery({time,address,starterIndex,mainIndex}) {
//     console.log(`Order Recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at time ${time}`);
//   },

//   orderPasta(ing1,ing2,ing3) {
//     console.log(`Here is your Delicious Pasta with ingrediants ${ing1}, ${ing2} and ${ing3}`);
//   },

//   orderPizza(mainIngredient, ...otherIngredient) {
//             console.log(mainIngredient);
//             console.log(otherIngredient);
//   },

//   // openingHours: {
//   //   thu: {
//   //     open: 12,
//   //     close: 22,
//   //   },
//   //   fri: {
//   //     open: 11,
//   //     close: 23,
//   //   },
//   //   sat: {
//   //     open: 0, // Open 24 hours
//   //     close: 24,
//   //   },
//   // },
//   // in place of defining the complete object you can just specify the property name
//   openingHours,
// };
// as new features is added that for every method we dont need to property property name with ": function keyword " you can directly write the porperty name that is the method name and direcrtly under {} you can provide the function simialrly like function expression
// method will work by this also 


// 3. Computed ShortHand 


// //here you can see inside the object property name the names are not mentioned instead the array is giving the property name using [] still it gets the value

// const weekdays = ['mon', 'tues', 'wed', 'thu', 'fri', 'sat', 'sun'];

// const openingHours= {
//     [weekdays[3]]: {
//       open: 12,
//       close: 22,
//     },
//     [weekdays[4]]: {
//       open: 11,
//       close: 23,
//     },
//     [weekdays[5]]: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   };
// // Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],


//   // now we will create a function to see how a function when an arguments are passed then how multiple values can be passed in return
//   order: function(starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   // creating function for understanding destructuring object with function parameter

//   orderDelivery: function({time,address,starterIndex,mainIndex}) {
//     console.log(`Order Recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at time ${time}`);
//   },

//   orderPasta: function(ing1,ing2,ing3) {
//     console.log(`Here is your Delicious Pasta with ingrediants ${ing1}, ${ing2} and ${ing3}`);
//   },

//   orderPizza: function(mainIngredient, ...otherIngredient) {
//             console.log(mainIngredient);
//             console.log(otherIngredient);
//   },

//   // openingHours: {
//   //   thu: {
//   //     open: 12,
//   //     close: 22,
//   //   },
//   //   fri: {
//   //     open: 11,
//   //     close: 23,
//   //   },
//   //   sat: {
//   //     open: 0, // Open 24 hours
//   //     close: 24,
//   //   },
//   // },
//   // in place of defining the complete object you can just specify the property name
//   openingHours,
// };


// console.log(restaurant);

 
// ==========================================================================================================================

// // the for - of loop

// const menu1 = [...restaurant.starterMenu, ... restaurant.mainMenu];
// for (const item of menu1.entries()) {
//   console.log(item);
// }
// // the above you get all the elements of the array menu but we cant access the index number using for of loop so now we will see one example how we will access index using entries method()


// const menu2 = [...restaurant.starterMenu, ... restaurant.mainMenu];
// for (const [i, item] of menu2.entries()) {
//   console.log(`${i +1}: ${item}`);
// }
// // you would have seen how we used destructuring to get the element as well as the element
// // as earlier item was an string but if we use entries then item becomes an array which contain the index and value in this way [index, value]

// // give the sum
// const prices = [ 250, 100, 480, 75, 320];
// let total = 0;
// for(const el of prices) {
//   total+= el;
// }
// console.log(total);

// //find the first match

// const students = [ 'Riya', 'Aman', 'Sorav', 'Priya', 'Karan']
// for (const std of students) {
//   if(std[0] === 'P') {
//     console.log(std);
//     break;
//   }
// }
// // skip invalid data

// const ages = [25,-3,40,0,17,-8,60]
// for(const a of ages) {
//   if(a<=0) 
//     continue;
//   console.log(a);
// }

// // count the vowels in string;

// const word = "Javascript";
// const vowels ="aeiou";
// let n=0;

// for(const c of word.toLowerCase()) {
//   if(vowels.includes(c)) {
//     n++;
//   }
// }
// console.log(n);



// ==========================================================================================================================



///////////////////////////////////////
// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/




const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};



// 1.


















// ======================================================================================================================================================




// // logical assignment operator

// const rest1 = {
//   name: 'Capri',
//   // numGuests: 10,
//   numGuests: 0
// };

// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Giovanni Rossi'
// };

// // OR Assignment Operator

// // rest1.numGuests = rest1.numGuests || 10;// using the or operator it gets the same value as numGuest property already exist and it is not a falsy value so it gets the same value 
// // rest2.numGuests = rest2.numGuests || 10;// here the numGuests is undefined so it gets the next truthy value as it check for the truthy value and it assign 10 to numGuests and now rest2 has 3 property

// // but same we can do using OR Assignment Operator

// // rest1.numGuests ||= 10;
// // rest2.numGuests ||= 10;
// // but same issue as we give 0 as a value so bydefault 0 comes under falsy value it will assign 10 to it for the numGuest


// // but if using NUllish Assignment Operator

// rest1.numGuests ??= 10;// as now value can use 0, '' and false and now we are using Nullish Assignment Operator so rest1 numGuest is 0 as we have value 0
// rest2.numGuests ??= 10;// as it is undefined so it gets 10 with the help of Nullish Assignment Operator

// // AND Assignment Operator

// // rest1.owner = rest1.owner && "Anonymous";// here you can see the property has been added with value undefined as here it picks the first one as it is a falsy value
// // rest2.owner = rest2.owner && "Anonymous";// here the value of owner has been changed as the first one is a truthy value so it didnt picked that and it assigns the last value to it


// // but using AND Assignment Operator we use the same thing but resolve one issue 
// rest1.owner &&= "Anonymous";// using this method has removed the owner property with the undefined value so its the better approach as it does not include into the object when the property is undefined or falsy values
// rest2.owner &&= "Anonymous";// same method replaces the original name with it


// console.log(rest1);
// console.log(rest2);





// ======================================================================================================================================================



// // nullish coalescing operator



// // restaurant.numGuests = 0
// const guest =  restaurant.numGuests ? restaurant.numGuests : 0;
// console.log(guest); 

// // Nullish : null and undefined (NOT 0 or '')
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);



// ======================================================================================================================================================




// // Short Circuiting (|| OR Operator and && AND operator/)

// // OR we can use to assign default value and AND we can use for execute code if the first is true
// // AND returns the first falsy value if nothing found then last value and OR operator give first truthy value if nothing found then it also give the last value

// console.log(0 && "Jonas"); // return the first matched falsy value
// console.log(7 && 0); // returns 0 as it gets the first falsy value
// console.log(7 && "JOnas"); // if no falsy value found it will return the last value

// // if (restaur`ant.orderPizza) {
// //   restaurant.orderPizza("Mushroom", "Spinach");
// // }

// // we can use the above if block directly using short circuiting using AND operator

// restaurant.orderPizza && restaurant.orderPizza("Mushroom", "Spinach");
// // we will see same output because as AND operator is seeing for the falsy value and as in the first operator it gets the truthy value so it just executed the last value

// console.log("---------OR-------");
// // restaurant.numGuests = 23
// const guest =  restaurant.numGuests ? restaurant.numGuests : 0;
// console.log(guest); // getting value 0 but after assigning the value it gets 23

// //now we willsee how we assign default value using short circuiting
// const guest2 = restaurant.numGuests || 15 // as numGuest is undefined so 15 is assignedd to guest2
// console.log(guest2);
 
// console.log(0 || 1); //1 as 1 is a truthy value
// console.log("Jonas" || ''); // Jonas as it is a truthy value 
// //  so OR operator returns the truthy value and when all the values are falsy value then it returns the last value

// console.log(undefined || null || "" || 0 || NaN || 0);// as you can see all these values are falsy value so it return 0 the last value after checking every operands

// // remember one thing empty string is an falsy value but empty object and empty array are not falsy values they comes under truthy values
// console.log(undefined || null || {} || "" || 0 || NaN || 0);// as you can see all these values are falsy value so it return 0 the last value after checking every operands
// console.log(undefined || null || [] || "" || 0 || NaN || 0);// as you can see all these values are falsy value so it return 0 the last value after checking every operands
// // as you can see it return [] and {} as they are truthy values




// ======================================================================================================================================================

// // Rest Pattern & Parameter 

// const arr = [1,2,3,4, ...[5,6]];
// const [a,b, ...others] = [1,2,3,4,5,6]
// console.log(arr, others); // you can see the first two elements went under a and b respectively and the rest of the elements belong to the array others and others is now an array with 4 elements which is all the rest of the elements



// //now we will doing a handson with the above object's array how to join two array and also how to use rest operator

// //assign first element to a variable named pizza and then skip the second element and third element to a variable and rest should be to an array otherFoods
// const [pizza, , risotto, ...otherFoods]= [...restaurant.mainMenu, ...restaurant.starterMenu]

// console.log(pizza, risotto, otherFoods);

// const {sat, ...weekdays} = restaurant.openingHours;
// console.log(weekdays);

// // function using the rest parameters

// const add = function(...numbers) {
// console.log(numbers);
// let sum =0;
// for(let i=0;i<numbers.length;i++) {
//   sum+=numbers[i];
// }
// console.log(sum);           
// return sum;
// }

// //below is the example how spread is opposite to rest
// const ary= [1,23,56,39];
// add(...ary);

// add(2,3,4);
// add(2,3,4,6,7,8,9);
// add(2,3,4,5,6,7,8,9);


// restaurant.orderPizza('Mushroom', 'onion', 'garlic', 'olives');




// ======================================================================================================================================================



// // Spread Operator

// const arr = [7,8,9];

// const badNewArr = [1,2,arr[0],arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1,2,...arr];// a new array with all the elements of arr array using the spread operator
// console.log(newArr);

// // console.log(...arr); whenever we require the element of an array for passing the argument in a function we can seperate it using spread operator as you can see now arr elemtnes are seperated and it is just like the below statement each represents an individual elemtnts
// console.log(7,8,9);


// const newMenu = [...restaurant.mainMenu, 'Gnocci']; // taking an existing element and adding one more element and made a new array with 4 elements
// console.log(newMenu);


// // copy array

// const mainMenuCopy = [...restaurant.mainMenu];

// // join array 

// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu]
// console.log(menu);

// // interables are arrays, strings, maps, sets but not object

// const str ="Jonas";
// const letter = [...str, ' ', 'S. '];
// console.log(letter);
// console.log(...str);

// // console.log(`${...str}`);//we cant use this one because we will get an syntaxerror if we write spread operator under template literals


// const ingrediants = [
//   // prompt('Let\'s make pasta with Ingredient 1?'),
//   // prompt('Let\'s make pasta with Ingredient 2?'),
//   // prompt('Let\'s make pasta with Ingredient 3?'),
// ];

// restaurant.orderPasta(...ingrediants);//as you can see how spread operator is making the array elements individual and now we can use each elements as a variable and these can be passed as arguments in the functiopn with three parameters and they takes these values

// // using spread in an object

// const restaurantNew = {foundedIn:1998, ...restaurant, founder: "Albert Einstein"};
// console.log(restaurantNew);// as you can see how the object is copied using spread operator


// restaurantNew.name = "Ristorante Roma"

// console.log(restaurantNew);



// =====================================================================================================================================================

// // Destructuring Object

// const {name, openingHours, categories} = restaurant;
// console.log(name, openingHours, categories);

// const { name:restaurantName, openingHours: hours, categories: tags} = restaurant;


// // Default value
// console.log(restaurantName, hours, tags);

// const { menu = [], starterMenu: starter = []} = restaurant;//as now the vlaue is having a default as menu porperty is not present in the resturant array

// console.log(menu,starter);

// // Mutating variable

// let a = 111;
// let b = 999;

// const obj = { a:23, b: 7, c:14};


// ({a,b} = obj);//we have to use parentheses for mutating the existing value and get the value from the destructuring the object's property

// console.log(a,b);


// // Nested Object

// const {fri} = openingHours;// before we were destructuring from obj object but now we are destructuring from the ensted object named openingHours and fri is the porperty of that

// // now we will rename the fri object and also we will extract the value of fri object and assign it to different variable

// const {fri: {open:o, close:c} }= openingHours;

// console.log(fri,o,c);// the value are assigned to o and c from the fri object also


// // destructuring function parameter

// restaurant.orderDelivery({
//   time:"22:30",
//   address: "Via del Sole,22",
//   mainIndex:2,
//   starterIndex:2
// })

// const person ={
//   nam:"aman",
//   age:27,
//   marks: {
//      matriculation: 89,
//      intermediate: 81
//   }
// }
// const {nam:n} = person;
// console.log(n);


// const library = {
//   nameL: 'City Library',
//   books: ['Dune', 'Emma', 'Helmet', "ulysses", 'Beloved'],
//   magazines: ['Wired', 'Time', 'Nautre'],
//   checkout: function({
//     member = "Anonymous",
//     bookIndex = 0,
//     magazineIndex = 1,
//     days:loanDays=14,
//   }) {
//     console.log(`${member} borrowed ${this.books[bookIndex]} and ${this.magazines[magazineIndex]} for ${loanDays} days.`);
//   }
// }

// library.checkout({
//   // member:"Aman",
//   // bookIndex: 2,
//   // MagazineIndex: 1,
//   // days: 30,
// })

// const gym = {
//   nameG: 'FitZone',
//   classes: ['Yoga', 'Spin', 'Boxing', 'Pilates'],
//   trainer: ['Maya', 'Omar', 'Lena'],

//   book: function({mem='Guest', classIndex=0, trainerIndex, minutes:duration = 45}) {
//       console.log(`${mem} booked ${this.classes[classIndex]} with ${this.trainer[trainerIndex]} for duration of ${duration} minutes`);
//   }
// }

// gym.book({
//   mem:"nina",
//   classIndex:2,
//   trainerIndex:0,
//   minutes: 60
// });






// ======================================================================================================

// Destructuring Array

// const arr = [2,3,4];



// // tradition way to extract value from the array
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x,y,z] = arr;
// console.log(x,y,z, typeof x, typeof y, typeof z); // destrtucturing the array

// let [first, second] = restaurant.categories;  // it automaticallly takes the value as the first element is assigned to first and the 2nd element is assigned to second
// console.log(first, second);

// [first, , second] = restaurant.categories;
// console.log(first, second); // as you can see the index  number has changed the value the element 0 is assigned to first 2nd is left balnk and 3rd element is now assigned to second

// // // earlier if we want to replace the value with one another for eg a = 1 b=2 after replacing a=2 and b =1

// // const temp = first;
// // first = second;
// // second = temp;
// // console.log(first, second);

// // the way modern JS replace the values

// [first, second] = [second, first]
// console.log(first,second, typeof first, typeof second);
// // before flipping Italian Vegetarian after flipping the value Vegetarian Italian

// // now we will see destructuring is possible from function also as below the value returned from the function are now assigned to started and main variable
// const [starter, main] = restaurant.order(2,0);

// console.log(starter, main, typeof starter, typeof main);


// // destructuring nested array

// const nested = [2,3,[5,6]];

// const [i, j, k] = nested;

// console.log(i,j,k);//as you can see as k is a new array and i and j are number type variable

// const [p, , [l,m]] = nested;
// console.log(p,l,m); // we can also get the value from the nested array as l,m are ahving the vlaue which are present in the nested array

// // Default value 

// //just assume we dont know how many values are coming from the apis so what will happen at that time lets see

// let [q,r,o] = [8,9];

// console.log(q,r,o); //as we can see p and q gets the value and r is undefined so there no value is assigned to prevent this issue we can do one thing


// [q=1,r=1,o=1]= [8,9];
// console.log(q,r,o);// now the value is r is 1 not undefined so we have avoided the error which might have caused due to undefined also q,r was also assigned 

// const [aa,bb,cc] = "ABC";
// console.log(aa,bb,cc,typeof aa,typeof bb,typeof cc);// as you can see now aa,bb,cc has a value from the string also aa , bb, cc is seperated from string also like ABC has been breaked and assigned to aa bb cc

// const books = [
//   {
//     title: 'Algorithms',
//     author: ['Robert Sedgewick', 'Kevin Wayne'],
//     publisher: 'Addison-Wesley Professional',
//     publicationDate: '2011-03-24',
//     edition: 4,
//     keywords: ['computer science', 'programming', 'algorithms', 'data structures', 'java', 'math', 'software', 'engineering'],
//     pages: 976,
//     format: 'hardcover',
//     ISBN: '9780321573513',
//     language: 'English',
//     programmingLanguage: 'Java',
//     onlineContent: true,
//     thirdParty: {
//       goodreads: {
//         rating: 4.41,
//         ratingsCount: 1733,
//         reviewsCount: 63,
//         fiveStarRatingCount: 976,
//         oneStarRatingCount: 13
//       }
//     },
//     highlighted: true
//   },
//   {
//     title: 'Structure and Interpretation of Computer Programs',
//     author: ['Harold Abelson', 'Gerald Jay Sussman', 'Julie Sussman (Contributor)'],
//     publisher: 'The MIT Press',
//     publicationDate: '2022-04-12',
//     edition: 2,
//     keywords: ['computer science', 'programming', 'javascript', 'software', 'engineering'],
//     pages: 640,
//     format: 'paperback',
//     ISBN: '9780262543231',
//     language: 'English',
//     programmingLanguage: 'JavaScript',
//     onlineContent: false,
//     thirdParty: {
//       goodreads: {
//         rating: 4.36,
//         ratingsCount: 14,
//         reviewsCount: 3,
//         fiveStarRatingCount: 8,
//         oneStarRatingCount: 0
//       }
//     },
//     highlighted: true
//   },
//   {
//     title: 'Computer Systems: A Programmer\'s Perspective',
//     author: ['Randal E. Bryant', 'David Richard O\'Hallaron'],
//     publisher: 'Prentice Hall',
//     publicationDate: '2002-01-01',
//     edition: 1,
//     keywords: ['computer science', 'computer systems', 'programming', 'software', 'C', 'engineering'],
//     pages: 978,
//     format: 'hardcover',
//     ISBN: '9780130340740',
//     language: 'English',
//     programmingLanguage: 'C',
//     onlineContent: false,
//     thirdParty: {
//       goodreads: {
//         rating: 4.44,
//         ratingsCount: 1010,
//         reviewsCount: 57,
//         fiveStarRatingCount: 638,
//         oneStarRatingCount: 16
//       }
//     },
//     highlighted: true
//   },
//   {
//     title: 'Operating System Concepts',
//     author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
//     publisher: 'John Wiley & Sons',
//     publicationDate: '2004-12-14',
//     edition: 10,
//     keywords: ['computer science', 'operating systems', 'programming', 'software', 'C', 'Java', 'engineering'],
//     pages: 921,
//     format: 'hardcover',
//     ISBN: '9780471694663',
//     language: 'English',
//     programmingLanguage: 'C, Java',
//     onlineContent: false,
//     thirdParty: {
//       goodreads: {
//         rating: 3.9,
//         ratingsCount: 2131,
//         reviewsCount: 114,
//         fiveStarRatingCount: 728,
//         oneStarRatingCount: 65
//       }
//     }
//   },
//   {
//     title: 'Engineering Mathematics',
//     author: ['K.A. Stroud', 'Dexter J. Booth'],
//     publisher: 'Palgrave',
//     publicationDate: '2007-01-01',
//     edition: 14,
//     keywords: ['mathematics', 'engineering'],
//     pages: 1288,
//     format: 'paperback',
//     ISBN: '9781403942463',
//     language: 'English',
//     programmingLanguage: null,
//     onlineContent: true,
//     thirdParty: {
//       goodreads: {
//         rating: 4.35,
//         ratingsCount: 370,
//         reviewsCount: 18,
//         fiveStarRatingCount: 211,
//         oneStarRatingCount: 6
//       }
//     },
//     highlighted: true
//   },
//   {
//     title: 'The Personal MBA: Master the Art of Business',
//     author: 'Josh Kaufman',
//     publisher: 'Portfolio',
//     publicationDate: '2010-12-30',
//     keywords: ['business'],
//     pages: 416,
//     format: 'hardcover',
//     ISBN: '9781591843528',
//     language: 'English',
//     thirdParty: {
//       goodreads: {
//         rating: 4.11,
//         ratingsCount: 40119,
//         reviewsCount: 1351,
//         fiveStarRatingCount: 18033,
//         oneStarRatingCount: 1090
//       }
//     }
//   },
//   {
//     title: 'Crafting Interpreters',
//     author: 'Robert Nystrom',
//     publisher: 'Genever Benning',
//     publicationDate: '2021-07-28',
//     keywords: ['computer science', 'compilers', 'engineering', 'interpreters', 'software', 'engineering'],
//     pages: 865,
//     format: 'paperback',
//     ISBN: '9780990582939',
//     language: 'English',
//     thirdParty: {
//       goodreads: {
//         rating: 4.7,
//         ratingsCount: 253,
//         reviewsCount: 23,
//         fiveStarRatingCount: 193,
//         oneStarRatingCount: 0
//       }
//     }
//   },
//   {
//     title: 'Deep Work: Rules for Focused Success in a Distracted World',
//     author: 'Cal Newport',
//     publisher: 'Grand Central Publishing',
//     publicationDate: '2016-01-05',
//     edition: 1,
//     keywords: ['work', 'focus', 'personal development', 'business'],
//     pages: 296,
//     format: 'hardcover',
//     ISBN: '9781455586691',
//     language: 'English',
//     thirdParty: {
//       goodreads: {
//         rating: 4.19,
//         ratingsCount: 144584,
//         reviewsCount: 11598,
//         fiveStarRatingCount: 63405,
//         oneStarRatingCount: 1808
//       }
//     },
//     highlighted: true
//   }
// ];

// // assignment 1.1
// const [firstBook, secondBook]= books;
// console.log(firstBook, secondBook); 


// // assignment 1.2
// const [ , , thirdBook] = books;
// console.log(thirdBook);


// // assignment 1.3
// const ratings = [['rating', 4.19], ['ratingsCount', 144584]];

// const [ [ , rating] , [ , ratingsCount]] = ratings;
// console.log(rating, ratingsCount);


// // assignment 1.4
// const ratingStars = [63405, 1808];
// const [fiveStarRatings, oneStarRatings, threeStarRatings=0] = ratingStars;
// console.log(fiveStarRatings,oneStarRatings,threeStarRatings); 

