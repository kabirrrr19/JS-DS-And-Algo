'use strict';


const bubbleSort = function(arr) {
    for (let i = arr.length ; i >= 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]; 
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

const arrNum = [10, 9, 23, -6, 7, 101, 23, 44, -17, 12, 78, -21, 34, 35];
const arrStr = ["Volvo", "BMW", "Ford", "Aston Martin", "Porsche", "Rollce Royce", "Bentley",
                "Tesla", "Lamborghinni", "Koenigsegg", "Pagani Huayara", "Ferrari"];

console.log(bubbleSort(arrNum));
console.log(bubbleSort(arrStr));



// OPTIMIZED CODE FOR ALMOST SORTED ARRAY AS IT LOOPS THROUGH THE ARRAY EVEN THOUGH IT'S SORTED IN STARTING
const bubbleSortOptimized = function(arr) {
    let noSwaps;

    for (let i = arr.length ; i >= 0; i--) {
        noSwaps = true;
        for (let j = 0; j < i - 1; j++) {
            // console.log( arr );
            if (arr[j] > arr[j + 1]) {
                [ arr[j], arr[j + 1] ] = [ arr[j + 1], arr[j] ];
                noSwaps = false;
            }
        }
    if ( noSwaps ) break;
    }

    return arr;
}

// comment out the if (noswaps) break and check the difference betweeen number of console.logs
console.log(bubbleSortOptimized([8, 1, 2, 3, 4, 5, 6, 7]));



// const bubbleSort = function(arr) {
//     for (let i = arr.length ; i >= 0; i--) {
//         for (let j = 0; j < i - 1; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 let temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }
//         }
//     }
//     return arr;
// }