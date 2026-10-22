'use strict';

// // function expression
// function calcAge(birthYear) {
//     const age = 2037 -birthYear;
//     // console.log(firstName);
//     function printAge() {
//         const output = `${firstName}, You are ${age}, born in ${birthYear}.`;
//         console.log(output);

//         if(birthYear >= 1981 && birthYear <= 1996) {
//             const firstName = 'Steven';
//             var millenial = true;
//             const str = `oh, and you're a millenial, ${firstName}`;
//             console.log(str);

//         // function add(a,b) {
//         //     return a+b;
//         // }// this function wont work outside this if block because
//         }

//         // console.log(str) //not accessible because outside the scope
//         console.log(millenial); //as it is a blocked scope can be used outside the scope
//         // add(5,19);
//     }
//     printAge();

//     return age;
// }

// const firstName = "Jonas";
// // console.log(n);
// calcAge(1991);
// // console.log(age)   cant use because outside the scope

// hoisting

// // hoisting in var, const and let

// console.log(year);
// console.log(job);
// console.log(me);

// var me = 'Jonas';
// let job = "Teacher";
// const year = 1991;

// // function declaration and expression and arrow

// console.log(addDecl(5,10));
// console.log(addExpr(5,10));
// // console -script.js:53 Uncaught ReferenceError: Cannot access 'addExpr' before initialization
// //     at script.js:53:13
// console.log(addArrw(5,10));
// // console - script.js:54 Uncaught ReferenceError: Cannot access 'addArrw' before initialization
// //     at script.js:54:13

// // function declaration

// function addDecl(a,b) {
//     return a+b;
// }

// // function expression
// const addExpr = function() {
//     return a+b;
// }

// // arrow function
// const addArrw = (a,b) => a+b;

// // demo example

// if(numProduct === 10) {
//     DeleteAllProducts()
// }

// var numProduct = 10;

// function DeleteAllProducts() {
//     console.log("All product is deleted!")
// }

// var x =1;
// var y = 2;
// const z = 3;

// // this keyword practice

// console.log(this);//this contains window object as the global scope

// const calcAge = function(birthYear) {
//     console.log(2037-birthYear);
//     console.log(this); //getting undefined for this because this under strict mode is undefined when its sloppy mode(non strict mode) at that time this will be having window object
// }

// calcAge(1991);

// const calcAgeArrow = birthYear => {
//     console.log(2037-birthYear);
//     console.log(this);//for the arrow function here this will be taking the parent this i.e. the lexical this but as the parent scope is the global scope so it will be taking the this of global according to that is window object sothis takes the window object
// };
// calcAgeArrow(1986);

// const jonas = {
//     year: 1991,
//     calcAge: function() {
//         console.log(this);
//         console.log(2037-this.year);
//     }
// }

// jonas.calcAge()//{year: 1991, calcAge: ƒ}calcAge: ƒ ()year: 1991[[Prototype]]: 
// Objectconstructor: ƒ Object()hasOwnProperty: ƒ hasOwnProperty()isPrototypeOf: ƒ
//  isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ 
// toLocaleString()toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ 
// __defineGetter__()__defineSetter__: ƒ __defineSetter__()__lookupGetter__: ƒ
//  __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()__proto__: 
// (...)get __proto__: ƒ __proto__()set __proto__: ƒ __proto__()

// const matilda = {
//     year:2017,
// };

// matilda.calcAge = jonas.calcAge;

// matilda.calcAge();//as you can see that by calling this method we get the output
//  20 and the this present in the jonas object does not take the this value to 
// matilda object so for jonas object this.year is 1991 and for object matilda 
// this.year is 2017 as it referred matilda year

// //now we will have a look for the function getting error for this

// const f = jonas.calcAge;
// console.log(f);//f stores the complete function insidee it and lets call it and 
// check what happens

// f()//function giving undefiined and error becausefunction this is undefined 
// under strict mode

// object reference  in practice (shallow vs deep copies)

const jessica1 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 28,
};

//  one way to create another object and copy it directly
//  const marriedJessica = jessica;

//  marriedJessica.lastName = "Davis";

// second way by creating a function and then copying

function marryPerson(originalPerson, newLastName) {
  originalPerson.lastName = newLastName;
  return originalPerson;
}

const marriedJessica = marryPerson(jessica1, 'Methew');

console.log('before :', jessica1);
console.log('after :', marriedJessica);
//as both object are same using the reference pointing to the same object in heap

const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = { ...jessica2 }; //using the speard operator we will perform 
// a shallow copying to anew object that is created in heap and now if you will see the console they both are different
//  object and the object jessicaCopy does not impacted the object jessica so there is no changes in the older 
// object while changing the new object here now two object are created rather that changing the lines it is
//  good to create a new object becauses sometimes it might get confusion

// but still it is not the best way we will check what is the best way to copy an object
jessicaCopy.lastName = 'Davis';

// now we will see how shallow copy creates a problem in the code which in smaller code can be noticable
// but when it is a large application so at that time there will a lots of confusion and it will be impacted very much

jessicaCopy.family.push('Steve');
jessicaCopy.family.push('John');




// above i have addded two more elements in the family array we will check in the console what is happening

// {firstName: 'Jessica', lastName: 'Williams', age: 27, family: Array(4)}

// {firstName: 'Jessica', lastName: 'Davis', age: 27, family: Array(4)}
// as you can see in the above output how the array has been impacted for both oject
// this is the problem of shallow copy or you can say Spread Operator the primitive copy is fine there wont be 
// any issue but when comes to an object then there you will see both the files are impacted in the above example 
// as family is an array and it comes under object in js so it was unable to restrict the copying to the main object 
// so both the object's array got impacted
// and due to that Shallow copy is not the best way to copy the object

console.log(jessica2, jessicaCopy);

// Deep Copying concept 3

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};


const jessicaClone = structuredClone(jessica);
jessicaClone.family.push('Mark');
jessicaClone.family.push('John');

console.log(jessica, jessicaClone);

// {firstName: 'Jessica', lastName: 'Williams', age: 27, family: Array(2)}
 
// {firstName: 'Jessica', lastName: 'Williams', age: 27, family: Array(4)}
// ﻿

// now if you see then the array is only stored in jessicaClone and jessica object still not affected
// this is the example of Deep Copying and it is mostly due to "structuredClone"
// read about that in the notes what is that and how you can implement in you application 
// or solving your problem from making a big blunder
