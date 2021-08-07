// arrays:
const people = [
    'Nicoll, Oliver', 
    'Nicholas, Oliver', 
    'Isabella, Donayre-Ramos', 
    'Luis, Donayre', 
    'Lincoln, Oliver',
    'Ezra, Wyatt, Oliver',
    'Ylia, Ramos de Donayre',
    'Luis, Donayre'
];

const nameObj = [
    {first: 'Nicholas', last: 'Oliver', year: 1996, passed: 2099 },
    {first: 'Nicoll', last: 'Oliver', year: 1996, passed: 2099},
    {first: 'Dominic', last: 'Sonnie', year: 1906, passed: 1986},
    {first: 'Tracie', last: 'Tilly', year: 1926, passed: 1996},
    {first: 'Patricia', last: 'Summer', year: 2000, passed: 2021},
    {first: 'Erica', last: 'Summer', year: 2003, passed: 2100},
    {first: 'Timothy', last: 'Smith', year: 2001, passed: 2100},


]

//one: Filter the list of people who were born in the 1900's

const born1900 = nameObj.filter((person) => person.year >= 1900 && person.year <= 1999)

// console.log(born1900);
// console.table(born1900);

//two: Give an array of the first and last names

const fullNames = nameObj.map(name => name.first + ' ' + name.last)
//or 
const fullNameBackTick = nameObj.map(name => `${name.first} ${name.last}`)

// console.log(fullNameBackTick)

//three: sort the people by birthdate, oldest to youngest

const oldestToYoungestAge = nameObj.sort((personA, personB) => personA.year - personB.year)
const otherWay = nameObj.sort((a, b) => a.year > b.year ? 1 : -1)
// console.log(otherWay)

//four: how many years did all of the people live? use reduce

const totalYears = nameObj.reduce((total, person) => {
    return total + (person.passed - person.year);
}, 0 )

// console.log(totalYears)

//five: sort object by years lived

const yearsLived = nameObj.sort((a, b) => {
    const lastGuy = a.passed - a.year;
    const nextGuy = b.passed - b.year;

    return lastGuy > nextGuy ? -1 : 1;
})

// console.log(yearsLived)

//six: creat a list of boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// const category = document.querySelector('.mw-category');
// const links = [...category.querySelectorAll('a')] //change nodelist to array or use Array.from(category.querySelectorAll('a"))

// const de = links
//     .map(link => link.textContent)
//     .filter(streetName => streetName.includes('de'))

//seven: sort the people alphabetically by last name

const alphaLastName = people.sort((a, b) => {
    const [aFirst, aLast] = a.split(', ');
    const [bFirst, bLast] = b.split(', ');

    return aLast > bLast ? 1 : -1;
})

// console.log(alphaLastName)

//eight: reduce - sum up the instances of each of these

const data = ['car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck']

const transportation = data.reduce((obj, item) => {
    if(!obj[item]) {
        obj[item] = 0;
    }
    obj[item]++
    return obj
}, {})

// console.log(transportation)