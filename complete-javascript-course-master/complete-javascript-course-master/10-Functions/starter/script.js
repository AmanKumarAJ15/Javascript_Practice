'use strict';

// Section 10.4 fucntion accepting callback function

// create a function which should accept a string and a function in the following way
//  1. create a function which should return remove all the space and make all the letters in lower case
// 2. create a function which should return the first word in upper case rest it should be as it is



// --->

function removeSpace(str) {
    return (`${str.replaceAll(' ', '').toLowerCase()}`);
}

removeSpace("I am the best")

function replaceFirstWord(str) {
     const [first, ...others] = str.split(' ');
    //  console.log(first , others);
    return [first.toUpperCase(), ...others].join(' ');
}

console.log(replaceFirstWord("javascript is the best"))

const transformer =  function(str, fn) {
    console.log(`Before Transformation : ${str}`);
    console.log(`After Transformation : ${fn(str)}`);
}

transformer('Javascript is the Best', removeSpace);
transformer('Javascript is the Best', replaceFirstWord);



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