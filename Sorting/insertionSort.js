'use strict';

// MY APPROACH TOWARDS THIS PROBLEM
const insertionSort = function (arr) {
    for (let i = 1; i < arr.length; i++) {
        let currentVal = i;
        for ( let j = i - 1; j >= 0 && arr[j] > arr[currentVal]; j-- ) { 
            [ arr[j], arr[currentVal] ] = [ arr[currentVal], arr[j] ]
            currentVal = j;
        }
    }
    return arr;
}

// My approach modified
const insertionSort = function (arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = i;
    for (let j = i - 1; j >= 0 && arr[j] > arr[j + 1]; j--) {
      [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }
  }
  return arr;
};


// JONAS'S APPROACH : here we have to use var variable
// const insertionSort = function (arr) {
//     for (var i = 1; i < arr.length; i++) {
//         let currentVal = arr[i];
//         for ( var j = i - 1; j >= 0 && arr[j] > currentVal; j-- ) {
//                 arr[j+1] = arr[j];
//         }
//         arr[j+1] = currentVal;
//     }
//     return arr;
// }


console.log(insertionSort([12, 22, 10, 19, 17]));

const arrNum = [10, 9, 23, -6, 7, 101, 23, 44, -17, 12, 78, -21, 34, 35];
const arrStr = ["Volvo", "BMW", "Ford", "Aston Martin", "Porsche", "Rollce Royce", "Bentley",
                "Tesla", "Lamborghinni", "Koenigsegg", "Pagani Huayara", "Ferrari"];


// console.log(insertionSort(arrNum));
// console.log(insertionSort(arrStr));

