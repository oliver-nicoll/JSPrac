const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
  ];

  const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ];

  // Some and Every Checks
  // Array.prototype.some() // is at least one person 19 or older?
// const isAdult = people.some(function(person) {
//   const currentYear = (new Date()).getFullYear();
//   if(currentYear - person.year >= 19) {
//     return true;
//   }
// })

// const isAdult = people.some(person => {
//   const currentYear = (new Date()).getFullYear();
//   return currentYear - person.year >= 19;
// })

const isAdult = people.some(person => ((new Date())
  .getFullYear()) - person.year >= 19 );

// console.log({isAdult})

  // Array.prototype.every() // is everyone 19 or older?

  const allAdults = people.every(person => ((new Date()).getFullYear()) - person.year >= 19)
// console.log({allAdults})
  // Array.prototype.find()

  // Find is like filter, but instead returns just the one you are looking for
  // find the comment with the ID of 823423

  const comment = comments.find(comment => comment.id === 823423 )
// console.log(comment)

  // Array.prototype.findIndex()
  // Find the comment with this ID
  // delete the comment with the ID of 823423

  const index = comments.findIndex(comment => comment.id === 823423)
// console.log(index)

comments.splice(index, 1);

console.table(comments);

const newComments = [
  ...comments.slice(0, index),
  ...comments.slice(index + 1)
]

console.table(newComments);
  // class Hex {
  //   constructor(r, g, b) {
  //     this.r = r;
  //     this.b = b;
  //     this.g = g;
  //   }
  
  //   toString() {
  //     return [
  //       "#",
  //       this.toHex(this.r),
  //       this.toHex(this.g),
  //       this.toHex(this.b),
  //     ].join("");
  //   }
  
  //   toHex(value) {
  //     return value.toString(16).padStart(2, "0").toUpperCase();
  //   }
  // }
  
  // // Don't edit below this, make them pass!
  
  // let assertions = {
  //   "#FF6347": new Hex(255, 99, 71),
  //   "#B8860B": new Hex(184, 134, 11),
  //   "#BDB76B": new Hex(189, 183, 107),
  //   "#0000CD": new Hex(0, 0, 205),
  //   "#0800CD": new Hex(8, 0, 205),
  // };
  
  // for (let expected in assertions) {
  //   let actual = assertions[expected].toString();
  
  //   if (actual === expected) {
  //     console.log("\u001b[32m%s\u001b[0m equals \u001b[34m%s\u001b[0m", actual, expected);
  //   } else {
  //     console.log("Expected \u001b[31m%s\u001b[0m to equal \u001b[34m%s\u001b[0m", actual, expected);
  //   }
  // }