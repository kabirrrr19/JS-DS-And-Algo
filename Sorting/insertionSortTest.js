'use strict';

const insertionSort = function (arr) {
    for (let i = 1; i < arr.length; i++) {
        let currentVal = arr[i];
        for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            console.log(arr[j+1], arr[j]);
            arr[j + 1] = arr[j];
        }
        arr[j+1] = currentVal;
    }
    return arr;
}

console.log(insertionSort([12, 22, 10, 19, 17, -3]));
