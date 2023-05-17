/**
 * if num is 35132 then it's possible to separate the digits the following way, 3 - 5 + 1 + 3 - 2, and this expression equals zero. Your program should return a string of the signs you used, so for this example your program should return the string "-++-".
 * If it's not possible to get the digit expression to equal zero, return the string "not possible". If there are multiple ways to get the final expression to equal zero, choose the one that contains more minus characters. For example: if num is 26712 your program should return "-+--" and not "+-+-".
 * Example: plusMinus(35132) //-++-
 * plusMinus(199) //not possible
 * plusMinus(26712) //-+-- 
*/

function recursiveFunc(updatedArray, updatedSum) {
    if (updatedArray.length == 1) {
        if (updatedSum + updatedArray[0] === 0){
            return 'plus';
        } else if (updatedSum - updatedArray[0] === 0) {
            return 'minus';
        } else {
            return 'not possible';
        }
    }

    let string2 = recursiveFunc(updatedArray.slice(1), updatedSum - updatedArray[0]);

    if (string2 != 'not possible') {
        return '-' + string2;
    }

    let string1 = recursiveFunc(updatedArray.slice(1), updatedSum + updatedArray[0]);

    if (string1 != 'not possible') {
        return '+' + string1;
    }

    return 'not possible';
}

function plusMinus(num) {
    // convert to int
    var a = num.toString().split('').map(int => parseInt(int));

    if (a.length < 2) {
        return "not possible";
    }

    // del first element, take a[0]
    return recursiveFunc(a.slice(1), a[0]);
}