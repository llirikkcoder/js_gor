// Given a 32-bit signed integer, reverse digits of an integer.

// Example 1:
// Input: 123 Output: 321 -- DONE!

// Example 2:
// Input: -123 Output: -321 

// Example 3:
// Input: 120 Output: 21

let digits = 00321456;

const inverser = (data) => { // data - любое целое число
    let stringOfDigits = data.toString();
    let amountOfDigits = data.toString().length;
    let reversedString = '';

    if ( stringOfDigits[0]=='-' ){
        reversedString = reversedString.concat('-', reversedString); 
        for(let i = amountOfDigits - 1; i > 0; i--) {           
            reversedString = reversedString.concat(stringOfDigits[i]); 
        }
        return reversedString;
    }
    else if ( stringOfDigits[0]=='0' ){
        for( let i = amountOfDigits - 1; i > 0; i-- ) { 
            reversedString = reversedString.concat(stringOfDigits[i]); 
        }
        return reversedString;
    }
    else if ( stringOfDigits ==''|| stringOfDigits==undefined ){
        return "Введите целое число!";
    }
    else {
        for( let i = amountOfDigits - 1; i >= 0; i-- ) {    
            reversedString = reversedString.concat(stringOfDigits[i]); 
        }
        return reversedString;
    }
}

console.log("Rerersed digits:", inverser(digits));