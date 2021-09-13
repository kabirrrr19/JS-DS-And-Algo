'use strict';

const binarySearch = function(arr, value) {
    let left  = 0;
    let right = arr.length - 1;
    let middle = Math.floor( (left + right) / 2 );

    while ( arr[middle] !== value && left <= right ) {
        if ( arr[middle] !== value ) {
            if ( arr[middle] < value ) left = middle + 1;
            if ( arr[middle] > value ) right = middle - 1;
        }
        middle = Math.floor( (left + right)/2);
    }
    if ( arr[middle] === value ) return middle;
    return 'value does not exist';
}

const numsArray = [5, 11,
    16,
    23,
    45,
    63,
    81,
    113,
    125,
    153,
    157,
    160,
    204,
    205,
    234,
    237,
    275,
    280,
    285,
    305,
    309,
    313,
    324,
    359,
    362,
    373,
    387,
    405,
    418,
    423,
    436,
    447,
    465,
    515,
    537,
    543,
    554,
    560,
    561,
    578,
    676,
    680,
    684,
    712,
    767,
    768,
    813,
    830,
    961,
    965,
    972];

console.log(binarySearch(numsArray, 972));
console.log(binarySearch(numsArray, 124444));
