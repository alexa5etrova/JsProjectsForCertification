// Caesars Cipher
// One of the simplest and most widely known ciphers is a Caesar cipher, 
// also known as a shift cipher. In a shift cipher the meanings of 
// the letters are shifted by some set amount.

// A common modern use is the ROT13 cipher, where the values of 
// the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' 
// and so on.

// Write a function which takes a ROT13 encoded string as 
// input and returns a decoded string.

// All letters will be uppercase. Do not transform any 
// non-alphabetic character (i.e. spaces, punctuation), 
// but do pass them on.

function rot13(str) {
    let testArr = str.split("");
    let resultArr = [];
  
    for (let i = 0; i < testArr.length; i ++){
      if (/[^A-Z]/.test(testArr[i])){
        resultArr.push(testArr[i]);
        
      } else {
        if(testArr[i].charCodeAt(0) >= 78){
          resultArr.push(String.fromCharCode(testArr[i].charCodeAt(0) - 13));
  
        }else{
          resultArr.push(String.fromCharCode(testArr[i].charCodeAt(0) + 13));
        }
  
      }
    }
    return resultArr.join('');
  }
  
  console.log(rot13("SERR PBQR PNZC"));
  