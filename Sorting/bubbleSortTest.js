'use strict';

const bubbleSort = function(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        for (let j = 0; j < i; j++) {
            console.log(arr[j], i);
            if ( arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

const numsArray = [15 ,5, 40, 50, 11, -6, 30, 23, -34, -7, -1,];
console.log(bubbleSort(numsArray));