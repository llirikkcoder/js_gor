// Given a 32-bit signed integer, reverse digits of an integer.

// Example 1:
// Input: 123 Output: 321 -- DONE!

// Example 2:
// Input: -123 Output: -321 

// Example 3:
// Input: 120 Output: 21

let digits = process.argv[2];

const inverser = (data) => {
    let string_of_digits = data.toString();
    let amount_of_digits = data.toString().length;
    let reversed_string = '';

    if (string_of_digits[0]=='-'){
        reversed_string = reversed_string.concat('-', reversed_string); 
        for(let i = amount_of_digits - 1; i > 0; i--) {
            
            reversed_string = reversed_string.concat(string_of_digits[i]); 
        }
        return reversed_string;
    }
    else if (string_of_digits[0]=='0'){

        for(let i = amount_of_digits - 1; i > 0; i--) {
            
            reversed_string = reversed_string.concat(string_of_digits[i]); 
        }
        return reversed_string;
    }
    else {
        for(let i = amount_of_digits - 1; i >= 0; i--) {    
            reversed_string = reversed_string.concat(string_of_digits[i]); 
        }
        return reversed_string;
    }
}

console.log("Rerersed digits:", inverser(digits));