const color = ['red', 'green', 'blue', 'yelloww'];
const [first, second] = color;
console.log(first, second);

const scores = [95, 82, 78, 64, 50];
const [ frst,,third] = scores;
console.log(frst, third);

let a = 10;
let b = 20;

[a, b] = [b, a];
console.log(a,b);

const teams= ['Sam', 'Priyya','Leo', 'Mia', 'Zoe'];
const duo = ['Alex'];

const [ captain, ...players] = teams;
console.log(captain, players); 


const getRoute = function () {
    return ['Kolkata', ['Delhi', 'Mumbai', 'Chennai'], 450];
}

const [start, [ stop2 ], price] = getRoute();
console.log(start,stop2,price);