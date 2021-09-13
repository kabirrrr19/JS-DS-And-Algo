'use strict';

// here the first if condition is baseless we can modify it like the below case

// const stringSearch = function(str, pattern) {
//     let matchCount = 0;
//     for (let i = 0; i < str.length; i++) {
//         if ( str[i] === pattern[0] ) {
//             for (let j = 0; j < pattern.length; j++) {
//                 if ( str[i+j] === pattern[j] ) {
//                     if ( j === pattern.length - 1 ) matchCount++;
//                 }
//                 else break;
//             }
            
//         }
//     }
//     return matchCount;
// }



const stringSearch = function(str, pattern) {
    let matchCount = 0;
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < pattern.length; j++) {
            if ( str[i+j] !== pattern[j] ) break;
            if(j === pattern.length - 1) matchCount++;
        }
    }
    return matchCount;
}


console.log(stringSearch("kabhi kabhi aditi zindagi me yuhi koi apna lagta hai", "aditi"));
console.log(stringSearch("lorie loled the loller", "lol"));