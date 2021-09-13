'use strict';


// HELPER METHOD RECURSION
const collectOddValues = num => {
    let oddValuesArr = [];

    // HELPER RECURSION METHOD
    const oddValues = num => {
        if ( num % 2 !== 0 ) oddValuesArr.push( num );
        if ( num === 0 ) return 1;
        oddValues(num-1);
    }
    oddValues(num);

    return oddValuesArr;
}
console.log('Helper Recursive Function : ', collectOddValues(10));


const collectOddValues2 = num => {
    let oddValuesArr = [];

    // HELPER RECURSION METHOD
    const oddValues = num => {

        if ( num.length === 0 ) return;

        if ( num[0] % 2 !== 0 ) oddValuesArr.push( num[0] );

        if ( num === 0 ) return;

        oddValues(num.slice(1));
    }
    oddValues(num);

    return oddValuesArr;
}

const arr = [1, 3, 4, 6, 7, 9, 12, 14, 17, 18, 22, 24, 23, 5, 40, 44, 69, 43, 57];
console.log('Helper Recursive Function : ', collectOddValues2(arr));



// Pure recursion function tp tabulate data instead of helper method recursion
function collectOddValues3(arr){
    let newArr = [];
    
    if(arr.length === 0) {
        return newArr;
    }
        
    if(arr[0] % 2 !== 0){
        newArr.push(arr[0]);
    }
        
    newArr = newArr.concat(collectOddValues3(arr.slice(1)));
    return newArr;
}

console.log('Pure recursion Data collection from Arrays : ', collectOddValues3([1,2,3,4,5]));


let fact = 1;
const factorial = num => {
    fact *= num;
    if (num === 1) return fact; 
    return factorial(--num);
}
console.log('Factorial Method 1 : ', factorial(5));



const factorial2 = (num, result = 1) => {
    if (num === 1) return result;
    return factorial2(num-1, num * result);
}
console.log('Factorial Method 2 : ', factorial2(10));



const countdown = (num, sum = 0) => {
    if (num === 0) return sum;
    return countdown(num-1, num+sum);
    // return countdown(num--, num + sum);
    // return countdown(--num, num + sum); gives wrong results
}
console.log('Sum value : ', countdown(10));



const countdownTime = (num) => {
    const timer = setInterval(() => {
        console.log('T-', num, 'Seconds to Launch');
        if (num === 0) clearInterval(timer);
        num--;
    }, 1000);
}
countdownTime(5);