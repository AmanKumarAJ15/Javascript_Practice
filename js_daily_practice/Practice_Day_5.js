// const color = ['red', 'green', 'blue', 'yelloww'];
// const [first, second] = color;
// console.log(first, second);
// const scores = [95, 82, 78, 64, 50];
// const [ frst,,third] = scores;
// console.log(frst, third);
// let a = 10;
// let b = 20;
// [a, b] = [b, a];
// console.log(a,b);
// const teams = ['Sam', 'Priyya', 'Leo', 'Mia', 'Zoe'];
// const duo = ['Alex'];
// const [captain, ...players] = teams;
// console.log(captain, players);

// const getRoute = function () {
// return ['Kolkata', ['Delhi', 'Mumbai', 'Chennai'], 450];
// }
//     const [start, [stop2], price] = getRoute();
// console.log(start,stop2,price);

// destructuring object

// Here are 10 practice questions on object destructuring, going from easy to harder.Try each one yourself first, then send me your answers and I'll check them.
//         ** Question 1: Basic extraction **
//             ```js
// const book = { title: 'Atomic Habits', author: 'James Clear', pages: 320 };
// ```
// Using destructuring, create variables `title` and`author`.Log both.
// ** Question 2: Renaming variables **
//         ```js
// const car = { brand: 'Toyota', model: 'Innova', year: 2022 };
// ```
//     Destructure `brand` into a variable called`company`, and`model` into a variable called`carModel`.Log both.
// ** Question 3: Default values **
//         ```js
// const phone = { name: 'Pixel', price: 50000 };
// ```
//     Destructure`name`, `price` and`color`.The object has no`color`, so give it a default value of`'Black'`.Log all three.
// ** Question 4: Renaming and default together **
//         ```js
// const student = { name: 'Riya', marks: 88 };
// ```
//     Destructure `marks` into a variable called`score`, and`grade` into a variable called `studentGrade` with a default value of`'Not assigned'`.Log both.
// ** Question 5: Mutating existing variables **
//         ```js
// let x = 1;
// let y = 2;
// const point = { x: 50, y: 75, z: 100 };
// ```
// Using destructuring(without`const` or`let`), update`x` and `y` with the values from`point`.After that, `x` should be `50` and `y` should be`75`.Log both.
// ** Question 6: Nested objects **
//         ```js
// const employee = {
// name: 'Arjun',
// address: {
// city: 'Kolkata',
// pincode: 700001,
// },
// };
// ```
// In one destructuring statement, extract`name`, `city` and`pincode`.Log all three.
// ** Question 7: Nested with renaming **
//     ```js
// const shop = {
// owner: 'Meena',
// timings: {
// mon: { open: 9, close: 18 },
// sun: { open: 10, close: 14 },
// },
// };
// ```
// Extract the Sunday timings into variables called `sundayOpen` and`sundayClose`.Log both.
// ** Question 8: Function parameter destructuring **
//         Write a function `introduce` that receives one object and destructures it in the parameter list:
//     ```js
// introduce({ name: 'Sam', age: 30, city: 'Delhi' });
// ```
// It should log: `Sam is 30 years old and lives in Delhi`
//         ** Question 9: Function parameter with defaults **
//         Write a function `createUser` that destructures its parameter with these defaults: `role` defaults to `'guest'` and `active` defaults to`true`. `username` has no default.
//     ```js
// createUser({ username: 'anita' });
// createUser({ username: 'ravi', role: 'admin' });
// ```
// Expected output:
//     ```
// anita guest true
// ravi admin true
// ```
//         ** Question 10: Rest pattern with objects **
//         ```js
// const settings = { theme: 'dark', fontSize: 16, language: 'en', autoSave: true };
// ```
// Extract `theme` into its own variable and collect all the remaining properties into an object called`others`.Log both.Expected output:
//     ```
// dark
// { fontSize: 16, language: 'en', autoSave: true }
// ```
// Note that Question 10 uses the rest pattern(`...`) with objects.It works the same way as with arrays, but the result is an object instead of an array.
// Send your solutions whenever you're ready and I'll review them.
//     const book = { title: 'Atomic Habits', author: 'James Clear', pages: 320 };
//     const { title, author } = book;
// console.log(title, author);

//     const car = { brand: 'Toyota', model: 'Innova', year: 2022 };
// const {brand: company, model: carModel} = car
//     console.log(company, carModel)
//     const phone = { name: 'Pixel', price: 50000 };
// const {name:name, price:price, color:color='Black' } = phone;
// console.log(name, price, color)
//     const student = { name: 'Riya', marks: 88 };
// const { marks:marks, grade:studentGrade= 'Not Assigned'} = student;
//     console.log(marks, studentGrade)
//     let x = 1;
// let y = 2;
// const point = { x: 50, y: 75, z: 100 };
//     ({ x, y } = point)
//     console.log(x, y)
//     const employee = {
// name: 'Arjun',
// address: {
// city: 'Kolkata',
// pincode: 700001,
// },
// };
//         const { name, address: { city, pincode } } = employee;
//         const shop = {
// owner: 'Meena',
// timings: {
// mon: { open: 9, close: 18 },
// sun: { open: 10, close: 14 },
// },
// };
//             const { timings: { sun: { open: sundayOpen, close: sundayClose } } } = shop;
//             console.log(sundayClose, sundayOpen)

// Sam is 30 years old and lives in Delhi
// const introduce = function (obj) {
// const {name, age, city} = obj;
//                 console.log(`${name} is ${age} years old and live in ${city}`);
// }
//                 introduce({ name: 'Sam', age: 30, city: 'Delhi' });

//                 const createUser = function (obj) {
// const { username, role = 'guest', active=true} = obj;
// console.log(username, role, active);
// }
//                     createUser({ username: 'anita' });
// createUser({ username: 'ravi', role: 'admin' });

//                     const settings = { theme: 'dark', fontSize: 16, language: 'en', autoSave: true };
//                     const { theme, ...others } = settings;
// console.log(theme, others);

// Here are 10 more object destructuring questions.This set puts extra weight on function parameters, since that was the weak spot last time.Try each yourself, then send your answers.
// ** Question 1: Basic with a method result **
//                         ```js
// const getProduct = function () {
// return { id: 101, name: 'Keyboard', price: 1500, stock: 12 };
// };
// ```
//                     Call `getProduct()` and destructure `name` and `price` directly from the returned object in one statement.Log both.
// ** Question 2: Rename and default together **
//                 ```js
// const profile = { username: 'dev_raj', followers: 250 };
// ```
// Destructure `username` into `handle`, `followers` into`fans`, and`bio` into `about` with a default of`'No bio yet'`.Log all three.
// ** Question 3: Function parameter(basic) **
//         Write a function `showBook` that destructures `title` and`price` **in the parameter list ** and logs: `Atomic Habits costs 499`
//             ```js
// showBook({ title: 'Atomic Habits', price: 499, pages: 320 });
// ```
//             ** Question 4: Function parameter with defaults **
//             Write a function `bookTable` that destructures`name`, `guests` and`time` in the parameter list. `guests` defaults to `2` and `time` defaults to`'19:00'`.
// ```js
// bookTable({ name: 'Anita' });
// bookTable({ name: 'Ravi', guests: 5, time: '21:30' });
// ```
// Expected output:
//     ```
// Table for Anita: 2 guests at 19:00
// Table for Ravi: 5 guests at 21:30
// ```
//         ** Question 5: Function parameter with renaming **
//         Write a function `printPoint` that destructures`x` as `horizontal` and`y` as `vertical` in the parameter list and logs both.
// ```js
// printPoint({ x: 10, y: 20 });
//
// Horizontal: 10, Vertical: 20
// ```
//             ** Question 6: Nested in a function parameter**
//                 ```js
// const order = {
// id: 7,
// customer: { name: 'Meera', city: 'Pune' },
// };
// ```
// Write a function `showOrder` that destructures`id`, and from the nested `customer` object, `name` and`city`, all in the parameter list.Expected output:
//     ```
// Order 7 for Meera from Pune
// ```
//         ** Question 7: Mutating existing variables **
//             ```js
// let width = 5;
// let height = 8;
// const box = { width: 40, height: 60, depth: 20 };
// ```
//     Update `width` and `height` from `box` using destructuring (no`const` / `let`).Log both.Remember the parentheses and the semicolon.
// ** Question 8: Rest pattern **
//         ```js
// const user = { id: 1, name: 'Sara', email: 'sara@mail.com', age: 27, city: 'Delhi' };
// ```
//     Extract `id` and `name` into variables, and collect everything else into an object called`details`.Log`details`.Expected:
//     ```
// { email: 'sara@mail.com', age: 27, city: 'Delhi' }
// ```
//         ** Question 9: Destructuring in a loop **
//             ```js
// const students = [
// { name: 'Asha', marks: 90 },
// { name: 'Bimal', marks: 72 },
// { name: 'Chitra', marks: 85 },
// ];
// ```
// Use a `for...of` loop that destructures `name` and `marks` directly in the loop header, and logs`Asha scored 90`(and so on for each student).
// ** Question 10: Default for the whole parameter **
//         Write a function `greet` that destructures`name`(default `'Guest'`) and`greeting`(default `'Hello'`) in the parameter list.It must also work when called with ** no argument at all **.
// ```js
// greet({ name: 'Ravi', greeting: 'Hi' });
// greet({ name: 'Anita' });
// greet();
// ```
// Expected output:
//     ```
// Hi, Ravi!
// Hello, Anita!
// Hello, Guest!
// ```
// Hint for Q10: the last call passes nothing, so the parameter itself needs a default value too(we touched on this earlier with `= {}`).
// Send your solutions whenever you're ready and I'll review them.

//     const getProduct = function () {
// return { id: 101, name: 'Keyboard', price: 1500, stock: 12 };
// };
//         const { name, price } = getProduct();
// console.log(name, price)
//         const profile = { username: 'dev_raj', followers: 250 };
// const { username: handle, followers:fans, bio:about = 'No bio yet'} = profile;
// console.log(handle, fans, about);
//         const showBook = function ({ title, price }) {
// console.log(`${title} costs ${price}`)
// }
//             showBook({ title: 'Atomic Habits', price: 499, pages: 320 });
//
// Atomic Habits costs 499

//             const bookTable = function ({ name, guest = 2, time = '19:00' }) {
// console.log(`Table for ${name}: ${guest} guests at ${time}`)
// }
//                 bookTable({ name: 'Anita' });
// bookTable({ name: 'Ravi', guests: 5, time: '21:30' });
//
// Table for Anita: 2 guests at 19:00
//
// Table for Ravi: 5 guests at 21:30
//                 const printPoint = function ({ x: horizontal, y: vertical }) {
// console.log(`Horizontal: ${horizontal}, Vertical: ${vertical}`)
// }
//                     printPoint({ x: 10, y: 20 });
//
// Horizontal: 10, Vertical: 20
//                     const order = {
// id: 7,
// customer: { name: 'Meera', city: 'Pune' },
// };

//                         const showOrder = function ({ id, customer: { name, city } }) {
// console.log(`Order ${id} for ${name} from ${city}`)
// }
//                             showOrder(order)
//
// Order 7 for Meera from Pune
//                             let width = 5;
// let height = 8;
// const box = { width: 40, height: 60, depth: 20 };
//                             ({ width, height } = box);
// console.log(width, height)
//                             const user = { id: 1, name: 'Sara', email: 'sara@mail.com', age: 27, city: 'Delhi' };
//
// { email: 'sara@mail.com', age: 27, city: 'Delhi' }
//                             const { id, name, ...details } = user;
// console.log(details);

//                             const students = [
// { name: 'Asha', marks: 90 },
// { name: 'Bimal', marks: 72 },
// { name: 'Chitra', marks: 85 },
// ];

// for (const student of students) {
// const {name, marks} = student;
// console.log(`${name} scored ${marks}`)
// }
//                                 or
//                                 for (const { name, marks } of students) {
// console.log(`${name} scored ${marks}`)
// }

//                                     const greet = function ({ name = 'Guest', greeting = 'Hello' } = {}) {
// console.log(`${greeting}, ${name}!`);
// }
//                                         greet({ name: 'Ravi', greeting: 'Hi' });
// greet({ name: 'Anita' });
// greet();
//                                         Hi, Ravi!
// Hello, Anita!
// Hello, Guest!
