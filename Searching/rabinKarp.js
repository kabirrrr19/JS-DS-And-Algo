'use strict';

const calculateHash = function (myText, largePrime) {
    let hash = 0;
    let randomNumber = 50;
    for (let i = 0; i <= myText.length - 1; i++)    hash = (hash * randomNumber + myText.charCodeAt(i)) % largePrime;
    // for (let i =  myText.length - 1; i > 0; i--)    hash += Math.pow(2, i) * Math.pow(10, i);
    return hash;
  };


  const rabinKarp = function (str, subStr) {
    str = str.toLowerCase();
    subStr = subStr.toLowerCase();
    let largePrime = 337;
    let count = 0;
    let stringPositions = [];
    let stringToSearchHash = calculateHash(subStr, largePrime);
    let text, sentenceHash;
    // Loop through our sentence
    for (let i = 0; i <= str.length - subStr.length; i++) {
      text = str.slice(i, i + subStr.length);
      sentenceHash = calculateHash(text, largePrime);
      
      if ( text !== subStr ) continue;
      else {
          for ( let j = 0; j < subStr.length; j++) {
              if ( text[j] !== subStr[j] ) return false;
            }
            stringPositions.push(i), count++;
        }
        
        if (stringToSearchHash !== sentenceHash) continue;
    }

    return { stringPositions, count };
  }

  let str = "Early to bed and Early to rise Makes a man healthy, wealthy and wise."
  let subStr = "early";
  
  console.log(rabinKarp(str, subStr));