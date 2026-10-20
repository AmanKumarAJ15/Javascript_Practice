// Q3 create a const variable and try to reassign it and check the error

// const birthYear = 1991;

// birthYear = 1000;

// console.log(birthYear);

//getting typeerror with const now checking with let


// let birthYear = 1991;

// birthYear = 1000;

// console.log(birthYear);

// reassignment is possible only in let and var not in const

// Q4 type checker using typeof

// const lang = "Javascript";
// const num = 23;
// const bool = true;
// const und = undefined;
// const n= null;

// console.log(typeof lang, typeof num, typeof bool, typeof und, typeof n);

// //same line output

// console.log(`${typeof lang},
// ${typeof num},
// ${typeof bool},
// ${typeof und},
// ${typeof n}
// `);
// output printed on new line using template literals



// Q6 age calculator create and print the age expected output is My Age is 27;

// const currentYear = 2026;
// const birthYear = 1999;

// console.log(`My age is ${currentYear-birthYear}`);




// // Q7 create two object named mark and john and add property mass and height and calculate there bmi and store 
// // as a property in respective objects and also check whos bmi is greater
// // BMI = mass/(height)^2
// const Mark = {
//     mass: 85,
//     height: 1.80,
//     BMI() {
//         return Number((this.mass/this.height**2).toFixed(2));
        
//     }
// };

// console.log(Mark.BMI(),typeof Mark);
 
// const John = {
//     mass : 92,
//     height: 1.70,
//     BMI() {
//         return Number((this.mass/this.height**2).toFixed(2));
//     }
// };

// if (Mark.BMI > John.BMI) 
//     console.log('Mark BMI is higher than John');
// else if (Mark.BMI < John.BMI)
//     console.log('John BMI is higher than Mark');
// else if (Mark.BMI === John.BMI)
//     console.log('Mark & John has same BMI');
    
    
    

