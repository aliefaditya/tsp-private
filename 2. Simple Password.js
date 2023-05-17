/**
 * Have the function SimplePassword(str) take the str parameter being passed and determine if it passes as a valid password that follows the list of constraints:

 * It must have a capital letter.
 * It must contain at least one number.
 * It must contain a punctuation mark => (. , ! ? : ; )
 * It cannot have the word "password" in the string.
 * It must be longer than 7 characters and shorter than 31 characters.
 * If all the above constraints are met within the string, the your program should return the string true, otherwise your program should return the string false. 
 * For example: if str is "apple!M7" then your program should return "true".
 */

function simplePassword(password){
    statCapital = /[A-Z]/g.test(password);
    statDec = /\d/g.test(password);
    statMark = /[.,!?:;]/g.test(password);
    statLength = (password.length > 7) && (password.length < 31);
    statContain = !/password/gi.test(password);
    return statCapital && statDec && statMark && statLength && statContain;
}