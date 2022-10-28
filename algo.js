// function sumUp(n){
//     let result = 0;

//     for (let i = 1; i <= n; i++){
//         result = result + i;
//     }
//     return result;
// }

//dependent of the value of n

// console.log(sumUp(5))
//calculate the time performance
let start = 0;
let end = 0;

//compare time performance

// start = performance.now();
// sumUp(6);
// end = performance.now();
// let timeEval = end - start 

// function sumUPP(n) {
//     return (n/2) * (1 + n);
// }
//not dependent of the value of n
//equation is a lot faster and works more efficiently - example of constant time vs linear time



//there is also quadratic time and cubic time

//we care about the trend/kind of function

//Big O Notation we care about


/*

Linear Time => O(n)

Constant Time => O(1)

Quadratic Time => O(n^2)

Cubic Time => O(n^3)


*/


//Write an algo that takes an array of numbers as input and calculates the sum of those numbers

//define the Time Complexity of that algo and determine th elowest possible time complexity for this problem

function sumNums(nums){
    let total = 0;
    nums.forEach(n => {
        total += n
    });
    return total;

   // return nums.reduce((sum, curNum) => sum + curNum, 0)
}
// one liners, where we just use reduce => constant time or O(1) or so we think
// this reduce is actually calling another function which doesn't make this faster
//appears faster but it's not - it's still doing a loop


function takeTwoSumNums(nums){
    let result = 0;
    for (const num of numbers){
        result += num
    }
    return result;
}

// T = 1 + 1 + 1 + n = 3 + n 
// T = 1 * n
//T = n => O(n) Linear Time Complexity
console.log(sumNums([1,3,10,50]))

