'use strict';

// Section 10.7 bind() method


const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    // book: function() { .. }//old method of writing the methods below is the new way to write the methods from now use the below syntax for writing the methods

    book(flightNum, name)  {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.bookings.push({flight: `${this.iataCode}${flightNum}`, name});
    },
}




lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'John Smith');
// console.log(lufthansa);

const eurowing = {
    airline: 'Eurowing',
    iataCode: 'EW',
    bookings: [],
}




const book = lufthansa.book;

book.call(eurowing, 23, 'Sarah Williams');

// console.log(eurowing);

book.call(lufthansa, 239, 'Mary Cooper');
// console.log(lufthansa);


const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'LX',
    bookings: [],
};

book.call(swiss, 583, 'Mary Cooper');
// console.log(swiss);


const emirates = {
    airline: 'Emirates Dubai Pvt',
    iataCode: 'EU',
    bookings: [],
};

lufthansa.book.call(emirates, 229, 'John Doe');// without transfering into variable directly used the methods and also here this got the emirates object literals and also it worked correctly
// console.log(emirates);// this object's booking property has now 1 elements and lufthansa has 0 elements

// console.log(lufthansa);


// when we use call method it is not adding the function as a method into the object it is just using it or you can say calling it 
//  book is one of the property of lufthansa object literals but it is not a property of eurowing and swiss but they are using or calling this functions to use this keyword and its working this is the main advantage of call method

const custData = [249, 'Martha Williams'];

book.apply(swiss, custData);

// console.log(swiss);


// apply() method not much used in modern JS

// call method using spread operator

book.call(eurowing, ...custData);
// console.log(eurowing);

const bookEW = book.bind(eurowing);

bookEW(23, 'Steven Williams');
console.log(eurowing);


// partial function 
const bookEW23 = book.bind(eurowing, 23);
bookEW23('Mathew Williams');
console.log(eurowing);

//with Event Listener

lufthansa.planes = 300;
lufthansa.buyPlane = function() {
    console.log(this);

    this.planes++;
    console.log(this.planes);
}


document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa))



// Section 10.6

// const lufthansa = {
//     airline: 'Lufthansa',
//     iataCode: 'LH',
//     bookings: [],
//     // book: function() { .. }//old method of writing the methods below is the new way to write the methods from now use the below syntax for writing the methods

//     book(flightNum, name)  {
//         console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
//         this.bookings.push({flight: `${this.iataCode}${flightNum}`, name});
//     },
// }




// lufthansa.book(239, 'Jonas Schmedtmann');
// lufthansa.book(635, 'John Smith');
// // console.log(lufthansa);

// const eurowing = {
//     airline: 'Eurowing',
//     iataCode: 'EW',
//     bookings: [],
// }




// const book = lufthansa.book;

// book.call(eurowing, 23, 'Sarah Williams');

// console.log(eurowing);

// book.call(lufthansa, 239, 'Mary Cooper');
// console.log(lufthansa);


// const swiss = {
//     airline: 'Swiss Air Lines',
//     iataCode: 'LX',
//     bookings: [],
// };

// book.call(swiss, 583, 'Mary Cooper');
// console.log(swiss);


// const emirates = {
//     airline: 'Emirates Dubai Pvt',
//     iataCode: 'EU',
//     bookings: [],
// };

// lufthansa.book.call(emirates, 229, 'John Doe');// without transfering into variable directly used the methods and also here this got the emirates object literals and also it worked correctly
// console.log(emirates);// this object's booking property has now 1 elements and lufthansa has 0 elements

// console.log(lufthansa);


// // when we use call method it is not adding the function as a method into the object it is just using it or you can say calling it 
// //  book is one of the property of lufthansa object literals but it is not a property of eurowing and swiss but they are using or calling this functions to use this keyword and its working this is the main advantage of call method

// const custData = [249, 'Martha Williams'];

// book.apply(swiss, custData);

// console.log(swiss);


// // apply() method not much used in modern JS

// // call method using spread operator

// book.call(eurowing, ...custData);
// console.log(eurowing);





// section 10.5

// const greet = function(greeting) {
//     return function(name) {
//         console.log(`${greeting} ${name}`);
//     }
// }

// const greeter = greet('Hello') // the greeter is the function which is having the value of the greet function 
// greeter('Jonas');
// greeter('Steven');
// greet('Hello')('Jonas');//all are same the first one is returning a function which is calling the second argument and returning something

// // task is to convert the greet function into an arrow function

// const greetArr = (greeting) => (name) => console.log(`${greeting} ${name}`);

// Section 10.4 fucntion accepting callback function

// create a function which should accept a string and a function in the following way
//  1. create a function which should return remove all the space and make all the letters in lower case
// 2. create a function which should return the first word in upper case rest it should be as it is



// --->

// function removeSpace(str) {
//     return (`${str.replaceAll(' ', '').toLowerCase()}`);
// }

// removeSpace("I am the best")

// function replaceFirstWord(str) {
//      const [first, ...others] = str.split(' ');
//     //  console.log(first , others);
//     return [first.toUpperCase(), ...others].join(' ');
// }

// console.log(replaceFirstWord("javascript is the best"))

// const transformer =  function(str, fn) {
//     console.log(`Before Transformation : ${str}`);
//     console.log(`After Transformation : ${fn(str)}`);
// }

// transformer('Javascript is the Best', removeSpace);
// transformer('Javascript is the Best', replaceFirstWord);



// Sectio 10.3 theory part First Class Functions vs Higher Order Function



// Section 10.2 How passign arguments works value vs Reference

// const flight = 'LH234';
// const jonas = {
//     name: 'Jonas Schmedtmann',
//     passport: 2473944658239,
// };

// const checkIn = function(flightNum, passenger) {
//     flightNum = 'LH999',
//     passenger.name = 'Mr. '+passenger.name;

//     if (passenger.passport === 2473944658239) {
//         alert('Checked in');
//     } else {
//         alert('Wrong Passport!')
//     }
// }


// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);


/////////////////////////////////////////////////////////////////////////////////////////////////////////

//Section 10.1 Default Parameters

// const bookings = [];

// const createBooking = function(flightNum,
//     // price=199 * numPassengers,//Error --> ReferenceError: Cannot access 'numPassengers' before initialization
//     numPassengers=2,
//     price=199 * numPassengers// it will work dynamically and calculation will be done correctly but if you define this variable with operation before defining the numPassenger then you would not be able to run the code as it will give error because right now JS wont be able to get the value of numPassengers 
// ) {
//    // old way to give the default value before ES6
// //    numPassengers = numPassengers || 1;
// //    price ||= 199;


// // in ES6 we directly mention in the parameter section itself where we are defining the variable in the function





//    const booking = {
//     flightNum,
//     numPassengers,
//     price
//    };

//    console.log(booking);
//    bookings.push(booking);

// };

// createBooking('LH123');
// createBooking('LH123', 2);
// createBooking('LH123',1000)//here we want to assign 1000 to price but it got assign to numPassenger as it denoting the second value to parameter

// createBooking('LH123',undefined, 1000)// after giving undefined to numPassenger it takes the default value and 1000 is assign to price as we wanted
// // createBooking('LH123', , 5000)//DO NOT use this method for passing the arguments as it is a syntax ERror 