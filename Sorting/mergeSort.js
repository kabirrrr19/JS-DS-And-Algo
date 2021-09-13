'use strict';

const merge = function(arr1, arr2) {
    let i = 0;
    let j = 0;
    const result = [];
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] > arr2[j]) {
            result.push(arr2[j]);
            j++;
        }
        else {
            result.push(arr1[i]);
            i++;
        }
    }
    while (i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }
    return result;
}

let i = 0;
let table = 0;
const mergeSort = function (arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    console.log(++table);
    return merge(left, right);
}


const arr1 = [3, 23, 5, 18, 26, 7, 9, 32, 1, 69, 2, 13, 8];
const arr2 = [12, 27, 23, 2, 51];
const arr = [
  3, 5, 7, 9, 23, 34, 45, 46, 49, 55, 66, 69, 2, 5, 8, 12, 18, 26, 40, 52,
];

console.log(mergeSort(arr2));

