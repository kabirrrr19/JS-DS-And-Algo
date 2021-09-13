'use strict';

const insertionSort = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
            if ( j === arr.length - 1 ) {
                let temp = arr[i];
                arr[i] = arr[minIndex];
                arr[minIndex] = temp;
            }
        }
    }
    return arr;
}


const numsArray = [15 ,5, 40, 50, 11, -6, 30, 23, -34, -7, -1,];
console.log(insertionSort(numsArray));