// // const color = ['red', 'green', 'blue', 'yelloww'];
// // const [first, second] = color;
// // console.log(first, second);

// // const scores = [95, 82, 78, 64, 50];
// // const [ frst,,third] = scores;
// // console.log(frst, third);

// // let a = 10;
// // let b = 20;

// // [a, b] = [b, a];
// // console.log(a,b);

// // const teams= ['Sam', 'Priyya','Leo', 'Mia', 'Zoe'];
// // const duo = ['Alex'];

// // const [ captain, ...players] = teams;
// // console.log(captain, players); 


// // const getRoute = function () {
// //     return ['Kolkata', ['Delhi', 'Mumbai', 'Chennai'], 450];
// // }

// // const [start, [ stop2 ], price] = getRoute();
// // console.log(start,stop2,price);

// const fullName = 'Rahul Kumar Sharma';
// const [ firstName, middleName, lastName ] = fullName.split(' ');
// console.log(firstName,middleName,lastName);

// const menu = ['Soup', 'Salad', 'Pasta', 'Pizza', 'Cake', 'Ice Cream'];
// const [ starter, , , ...others] = menu;
// console.log(starter);
// console.log(others);


// const getUser = function() {
//     return ['Anita', 28];
// }

// const getGuest = function() {
//     return ['Guest'];
// }

// const [name, age] = getUser();
// const [guestName, guestAge = 18] = getGuest();
// console.log(name, age);
// console.log(guestName, guestAge); 

// const data = ['Delhi', [28.6,77.2], 'India', 'Asia'];

// const [ city, [lat, long], ...rest] = data;

// console.log(`
// City = ${city},
// lat = '${lat},
// long = ${long},
// rest = ${rest}`);


// const players = ['Messi', 'Ronaldo', 'Neymar'];
// let mainPlayer = players[0];
// let substitute = players[2];

// [mainPlayer, substitute] = [substitute, mainPlayer];
// console.log(mainPlayer, substitute);

// const [c, b, a] = players
// console.log(a,b,c);


//Destructuring Object


const books = [
  {
    title: 'Algorithms',
    author: ['Robert Sedgewick', 'Kevin Wayne'],
    publisher: 'Addison-Wesley Professional',
    publicationDate: '2011-03-24',
    edition: 4,
    keywords: ['computer science', 'programming', 'algorithms', 'data structures', 'java', 'math', 'software', 'engineering'],
    pages: 976,
    format: 'hardcover',
    ISBN: '9780321573513',
    language: 'English',
    programmingLanguage: 'Java',
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.41,
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13
      }
    },
    highlighted: true
  },
  {
    title: 'Structure and Interpretation of Computer Programs',
    author: ['Harold Abelson', 'Gerald Jay Sussman', 'Julie Sussman (Contributor)'],
    publisher: 'The MIT Press',
    publicationDate: '2022-04-12',
    edition: 2,
    keywords: ['computer science', 'programming', 'javascript', 'software', 'engineering'],
    pages: 640,
    format: 'paperback',
    ISBN: '9780262543231',
    language: 'English',
    programmingLanguage: 'JavaScript',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.36,
        ratingsCount: 14,
        reviewsCount: 3,
        fiveStarRatingCount: 8,
        oneStarRatingCount: 0
      }
    },
    highlighted: true
  },
  {
    title: 'Computer Systems: A Programmer\'s Perspective',
    author: ['Randal E. Bryant', 'David Richard O\'Hallaron'],
    publisher: 'Prentice Hall',
    publicationDate: '2002-01-01',
    edition: 1,
    keywords: ['computer science', 'computer systems', 'programming', 'software', 'C', 'engineering'],
    pages: 978,
    format: 'hardcover',
    ISBN: '9780130340740',
    language: 'English',
    programmingLanguage: 'C',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 1010,
        reviewsCount: 57,
        fiveStarRatingCount: 638,
        oneStarRatingCount: 16
      }
    },
    highlighted: true
  },
  {
    title: 'Operating System Concepts',
    author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
    publisher: 'John Wiley & Sons',
    publicationDate: '2004-12-14',
    edition: 10,
    keywords: ['computer science', 'operating systems', 'programming', 'software', 'C', 'Java', 'engineering'],
    pages: 921,
    format: 'hardcover',
    ISBN: '9780471694663',
    language: 'English',
    programmingLanguage: 'C, Java',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 3.9,
        ratingsCount: 2131,
        reviewsCount: 114,
        fiveStarRatingCount: 728,
        oneStarRatingCount: 65
      }
    }
  },
  {
    title: 'Engineering Mathematics',
    author: ['K.A. Stroud', 'Dexter J. Booth'],
    publisher: 'Palgrave',
    publicationDate: '2007-01-01',
    edition: 14,
    keywords: ['mathematics', 'engineering'],
    pages: 1288,
    format: 'paperback',
    ISBN: '9781403942463',
    language: 'English',
    programmingLanguage: null,
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.35,
        ratingsCount: 370,
        reviewsCount: 18,
        fiveStarRatingCount: 211,
        oneStarRatingCount: 6
      }
    },
    highlighted: true
  },
  {
    title: 'The Personal MBA: Master the Art of Business',
    author: 'Josh Kaufman',
    publisher: 'Portfolio',
    publicationDate: '2010-12-30',
    keywords: ['business'],
    pages: 416,
    format: 'hardcover',
    ISBN: '9781591843528',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.11,
        ratingsCount: 40119,
        reviewsCount: 1351,
        fiveStarRatingCount: 18033,
        oneStarRatingCount: 1090
      }
    }
  },
  {
    title: 'Crafting Interpreters',
    author: 'Robert Nystrom',
    publisher: 'Genever Benning',
    publicationDate: '2021-07-28',
    keywords: ['computer science', 'compilers', 'engineering', 'interpreters', 'software', 'engineering'],
    pages: 865,
    format: 'paperback',
    ISBN: '9780990582939',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.7,
        ratingsCount: 253,
        reviewsCount: 23,
        fiveStarRatingCount: 193,
        oneStarRatingCount: 0
      }
    }
  },
  {
    title: 'Deep Work: Rules for Focused Success in a Distracted World',
    author: 'Cal Newport',
    publisher: 'Grand Central Publishing',
    publicationDate: '2016-01-05',
    edition: 1,
    keywords: ['work', 'focus', 'personal development', 'business'],
    pages: 296,
    format: 'hardcover',
    ISBN: '9781455586691',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.19,
        ratingsCount: 144584,
        reviewsCount: 11598,
        fiveStarRatingCount: 63405,
        oneStarRatingCount: 1808
      }
    },
    highlighted: true
  }
];


console.log(books);


const { title: title, author: author, ISBN: ISBN} = books[0];
console.log(title, author, ISBN);

const {keywords: tags} = books[0];
console.log(tags);

console.log(books[6]);

const { language, programmingLanguage='unknown'} = books[6];
books[6].language ??='unknown'; 
books[6].programmingLanguage ??='unknown'; 

console.log(books[6]);
console.log(language, programmingLanguage);

