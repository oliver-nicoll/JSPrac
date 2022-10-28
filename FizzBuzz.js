// traditional solution - loop

function FizzBuzzA(num1, num2) {
    let returnVal = '';

    for(let i = 1; i <= 100; i++) {
        if(i % num1 == 0 && i % num2 == 0) {
            returnVal += ' FizzBuzz ';
        } else if ( i % num1 == 0 ) {
            returnVal += ' Fizz ';
        } else if ( i % num2 == 0 ) {
            returnVal += ' Buzz ';
        } else {
            returnVal += i + " ";
        }
    }
    return returnVal
}

console.log(FizzBuzzA(3, 5))

