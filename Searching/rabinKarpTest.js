'use strict';

const calculateHash = function(text) {
    let hash = 1;
    let randomNumber = 50;
    let largestPrimeNumber = 98689; 
    for (let i = 0; i < text.length - 1; i++) hash = hash * randomNumber * text.charCodeAt(i) % largestPrimeNumber;
    return hash;
}

const rabinKarp = function(str, subStr) {
    let indexArr = [];
    let hashedSubStr = calculateHash(subStr);
    for (let i = 0; i < str.length - subStr.length; i++) {
        let sentence = str.slice(i, i+subStr.length);
        let hashedSentence = calculateHash(sentence);
        
        if (hashedSentence !== hashedSubStr) continue;

        if (hashedSubStr === hashedSentence ) {
            for ( let j = 0; j < subStr.length; j++) {
                if ( sentence[j] !== subStr[j] ) return false;
            }
            indexArr.push(i, str.slice(i, i+subStr.length));
        }
    }
    return indexArr;
}

const str = "call me when you want call me when you need call me in the morning i'll be on my way";
const subStr = "call me";
console.log(rabinKarp(str, subStr));