/* one:
write a JS program to create a new string
from a given string taking the first 3 characters and the last 
3 characters of a string and adding them together. The string length must be 3 or more,
if not, the original string is returned 
*/

const buildNewStr = (str) => 
    str.length < 3 ? str : str.slice(0, 3) + str.slice(-3);

// console.log(buildNewStr('abc'))
// console.log(buildNewStr('abcdefg'))
// console.log(buildNewStr('123abc123'))
// console.log(buildNewStr('123456789'))


const testSlice = [1, 2, 3, 4, 5, 6]
// console.log(testSlice.slice(2, 4))

/* two:
write a JS program to extract the first half of a string of even length
*/

const halfExtract = (str) => str.slice(0, str.length/2)

// console.log(halfExtract('Miss'))
// console.log(halfExtract('Mississ'))
// console.log(halfExtract('Mississippi'))

/* three:
    Write a JS program to concatenate two strings except their first character.
*/

const concatStrButOne = (str1, str2) => 
    str1.slice(1) + str2.slice(1);

// console.log(concatStrButOne('One', 'Two'))
// console.log(concatStrButOne('Nicoll', 'Oliver'))

/*  Four:
Given two values, 
write a JS program to find out which one is nearest to 100
*/

const nearestTo100 = (a, b) => (100 - a) < (100 - b) ? a : b;

// console.log(nearestTo100(99, 1))
// console.log(nearestTo100(9, 1))
// console.log(nearestTo100(50, 50))

/* Five:
Write a JS program to check a given string contains
2 to 4 occurrences of a specified character
*/

const countChars = (str, char) => 
    str.split('').filter(ch => ch === char).length;

const repeatLetter = (str, char) => 
    countChars(str, char) >= 2 && countChars(str, char) <= 4

console.log(repeatLetter('oooh', 'o'))
console.log(repeatLetter('oh', 'o'))
console.log(repeatLetter('ooooooh', 'o'))
console.log(repeatLetter('ooooh', 'o'))

