/* create a book class where each book has a title, author, ISBN, and numCopies. 
Functions should include: 
getAvailability() => "OOS" if 0 available, 
    "ls" if < 10 available and
    "instock" otherwise
sell(numSold)

restock(numCopies)
    add to total num of copies
    default num to 5 if no number is passed.
 */

// function Book(title, author, ISBN, numCopies) {
//     this.title = title;
//     this.author = author;
//     this.ISBN = ISBN;
//     this.numCopies = numCopies;
// }

// Book.prototype.getAvailability = function() {
//     if (this.numCopies === 0) {
//         return "Out of Stock";
//     } else if (this.numCopies < 10) {
//         return "Low stock"
//     }
//     return "instock"
// }

// Book.prototype.sell = function(numCopiesSold = 1) {
//     this.numCopies -= numCopiesSold;
// }

// Book.prototype.restock = function(numCopiesStocked = 5) {
//     this.numCopies += numCopiesStocked;
// }



// class component below

class Book {
    constructor(title, author, ISBN, numCopies) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.numCopies = numCopies;
    }

    get availability() {
        return this.getAvailability();
    }

    getAvailability() {
        if (this.numCopies === 0) {
            return 'Out of Stock'
        } else if (this.numCopies < 10) {
            return "Low Stock";
        }
        return "In stock";
    }

    sell(numCopiesSold = 1) {
        this.numCopies -= numCopiesSold;
    }

    restock(numCopiesRestocked = 5) {
        this.numCopies += numCopiesRestocked;
    }
}

const HungerGames = new Book("Hunger Games", "Suzanne Collins", 123919, 5);
console.log(HungerGames.getAvailability());
HungerGames.restock(12);
console.log(HungerGames.getAvailability());
HungerGames.sell(17);
console.log(HungerGames.getAvailability());