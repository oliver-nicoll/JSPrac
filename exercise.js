/*  Exercise One:
write a JS program to check two numbers and 
return true if one of the number is 100 
or if the sum of the two numbers is 100 
*/
const isEqualTo100 = (a, b) => a === 100 || b === 100 || (a + b) === 100;

// console.log(isEqualTo100(0 , 100))
// console.log(isEqualTo100(100 , 0))
// console.log(isEqualTo100(10 , 0))
// console.log(isEqualTo100(0 , 10))
// console.log(isEqualTo100(10 , 90))
// console.log(isEqualTo100(80 , 20))


/* Exercise Two:
write a JS program to get the extension of a filename.
*/

const getFileExtension = (str) => str.slice(str.lastIndexOf('.'))
// console.log(getFileExtension("index.html"))
// console.log(getFileExtension("webpack.config.js"))

const fileExt = (str) => str.slice(str.lastIndexOf('...'))
// console.log(fileExt('hey there...Nicoll'))
// console.log(fileExt('hey there... Lincoln'))
// console.log(fileExt('hey there ...Ezra'))
// console.log(fileExt('hey there...Test'))


/*
    Write a JS program to replace every character in a given 
    string with the character following it in the alphabet
*/

//string.fromCharCode
//charCodeAt

const moveCharsForward = (str) => 
    str
    .split('')
    .map(char => String.fromCharCode(char.charCodeAt(0) +  1))
    .join('');


const practice = (str) => {
    str
    .split('')
    .map(c => String.fromCharCode(c.charCodeAt(0) + 1))
    .join('')
}
// console.log(moveCharsForward('abcdefghi'));

/* Exercise Four:
write a JS program to get the current date.
Expected Output:
    mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

*/

const formatDate = (date = new Date()) => {
    const days = date.getDate();
    const months = date.getMonth() + 1;
    const years = date.getFullYear();

    return `${months}/${days}/${years}`
}

// console.log(formatDate())

/* Exercise Five:
write a JS program to create a new string adding "New!" in front of a given string.
if the given string begins with "New!" already then return the original string.
*/

const addNewStr = (str) => str.indexOf('New!') ===  0 ? str : `New! ${str}`;

// console.log(addNewStr('New! Offers'));
// console.log(addNewStr(' Cat Place'));
