// Palindrome Checker
// Return true if the given string is a palindrome. Otherwise, return false.

// A palindrome is a word or sentence that's spelled the same way both forward
// and backward, ignoring punctuation, case, and spacing.

// Note
// You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols)
// and turn everything into the same case (lower or upper case) in order to check for palindromes.

// We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.

// We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".
function palindrome(str) {
    let firstStepArr = str.toLowerCase().split('');
    let testArr =[];
    
    for (let i = 0; i < firstStepArr.length; i ++){
      if (/[a-z0-9]/.test(firstStepArr[i])){
        testArr.push(firstStepArr[i])
      }
    }
    
    
    let resultArr=[];
    for (let i = 0; i < testArr.length; i++){
      resultArr.unshift(testArr[i]);
    }
    
    if (testArr.join('') === resultArr.join('')){
      return true;
    }else{
      return false;
    }
      
    }
    
    
    
    console.log(palindrome("eye"));
    console.log(palindrome("_eye"));
    console.log(palindrome("never odd or even"));
    console.log(palindrome("never odd or even"));
    console.log(palindrome("A man, a plan, a canal. Panama"));
    console.log(palindrome("My age is 0, 0 si ega ym."));