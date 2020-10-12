// Roman Numeral Converter
// Convert the given number into a roman numeral.
// All roman numerals answers should be provided in upper-case.

function convertToRoman(num) {
    let arabArr = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
    let romanArr = [ "I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"];

    let res = "";
    let index = arabArr.length-1;
    while(num > 0){
        if (num >= arabArr[index]){
            res += romanArr[index];
            num -= arabArr[index];
        }else{
            index--;
        }
    }


 return res;
}

console.log(convertToRoman(36));