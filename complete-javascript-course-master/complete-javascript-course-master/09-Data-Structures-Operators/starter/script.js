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

  openingHours: {
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
  },
};




// =====================================================================================================================================================

// Destructuring Object

const {name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories);

const { name:restaurantName, openingHours: hours, categories: tags} = restaurant;


// Default value
console.log(restaurantName, hours, tags);

const { menu = [], starterMenu: starter = []} = restaurant;//as now the vlaue is having a default as menu porperty is not present in the resturant array

console.log(menu,starter);

// Mutating variable

let a = 111;
let b = 999;

const obj = { a:23, b: 7, c:14};


({a,b} = obj);//we have to use parentheses for mutating the existing value and get the value from the destructuring the object's property

console.log(a,b);


// Nested Object

const {fri} = openingHours;// before we were destructuring from obj object but now we are destructuring from the ensted object named openingHours and fri is the porperty of that

// now we will rename the fri object and also we will extract the value of fri object and assign it to different variable

const {fri: {open:o, close:c} }= openingHours;

console.log(fri,o,c);// the value are assigned to o and c from the fri object also


// destructuring function parameter

restaurant.orderDelivery({
  time:"22:30",
  address: "Via del Sole,22",
  mainIndex:2,
  starterIndex:2
})


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

