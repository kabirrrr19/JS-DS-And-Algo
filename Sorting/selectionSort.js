'use strict';


const selectionSort = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if ( arr[j] < arr[minIndex] )   minIndex = j;
        }
        if ( minIndex !== i ) [ arr[i], arr[minIndex] ] = [ arr[minIndex], arr[i] ];
    }
    return arr;
}


// const selectionSort = function (arr) {

//     for (let i = 0; i < arr.length; i++) {
//         let minIndex = i;
//         for (let j = i + 1; j < arr.length; j++) {
//             if ( arr[j] < arr[minIndex] )   minIndex = j;
//             if ( j === arr.length - 1 )     [ arr[i], arr[minIndex] ] = [ arr[minIndex], arr[i] ];
//         }
//     }
//     return arr;
// }


const arrNum = [10, 9, 23, -6, 7, 101, 23, 44, -17, 12, 78, -21, 34, 35];
const arrStr = ["Volvo", "BMW", "Ford", "Aston Martin", "Porsche", "Rollce Royce", "Bentley",
                "Tesla", "Lamborghinni", "Koenigsegg", "Pagani Huayara", "Ferrari"];


console.log(selectionSort(arrNum));
console.log(selectionSort([0, 1, 2,  34, 22, 5,  10, 19, 17]));
console.log(selectionSort(arrStr));