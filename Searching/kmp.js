'use strict';

const computeLPSArray = function(pattern, lps) {
    let len = 0;
    let i = 1;
    lps[0] = 0;
    while (i < pattern.length) {
        if (pattern[i] === pattern[len]) {
            lps[i] = len + 1;
            len += 1;
            i += 1;
        }
        else {
            if ( len !== 0) len = lps[len - 1];
            else  {
                lps[i] = 0;
                i += 1;
           } 
        }
    }
    return lps;
}

const kmp = function(pattern, txt) {
    const indexArr = [];
    let lps = [];
    lps = computeLPSArray(pattern, lps);
    console.log(lps)
    let i = 0;
    let j = 0;
    while (i < txt.length - pattern.length + 1) {
        if (txt[i] === pattern[i]) {
            i+=1;
            j+=1;
        }
        else {
            if ( j !== 0)   j = lps[j-1];  // if the first values doesn't match we cannot find lps[-1]
            else i+=1; 
        }
        if (j === pattern.length) {
            console.log(i-j)
            indexArr.push(i - j);
            j = lps[j-1];
        } 
    }
    return indexArr;
}

console.log(kmp("lorie loled the loller", "lol"));
