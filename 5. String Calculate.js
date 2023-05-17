// Input: "6 * (4/2) + 3 * 1"
// Output: 15

// Input: "6/3-1"
// Output: 1

/**
 * 1. parse string to int
 * 2. 
 */

var stack = [];
var lastToken;

function performFunc(a, b, func){
    if (func == "+") {
        return a + b;
    } else if (func == "/") {
        return a / b;
    } else if (func == "*") {
        return a * b;
    } else if (func == "-") {
        return a - b;
    }
}

function processChar(char) {
    if(char == "+") {
        stack.push("+");
    } else if(char == "-") {
        stack.push("-");
    } else if(char == "/") {
        stack.push("/");
    } else if(char == "*") {
        stack.push("*");
    } else if(char == "(") {
        // case when (4)2, so 4 * 2
        if(lastToken === ")" || ( lastToken !== undefined && lastToken.match(/d+/g) != null)) {
            stack.push("*");
        }
        stack.push("(");
    } else if(char == ")") {
        // case when: special operation dgn operand dalam kurung sehingga diutamakan
        var parenStack = [];
        while( (char = stack.pop()) != "(") {
            // unshift: add new element -- "("
            parenStack.unshift(char);
        }
        stack.push(processStack(parenStack).pop());
    } else {
        // angka masuk kesini
        stack.push(parseInt(char));
    }
};

function processStack(stack){
    var i = 0

    if (stack.length == 0) {
        return NaN;
    }

    if (stack.length == 1){
        return stack;
    }

    while (i < stack.length && stack.length > 2) {
        if (stack[i+1] == '*' || stack[i+1] == '/') {
            var a = stack[i];
            var b = stack[i+2];
            var expr = stack[i+1];
            var value = performFunc(a, b, expr);
            // stack.splice(idx to the new value, howmany items to be removed, what items to be add)
            stack.splice(i, 3, value);
        }
        else {
            // next to another number and skip operand
            i += 2;
        }
    }

    while (i < stack.length && stack.length > 2) {
        if (stack[i+1] == '+' || stack[i+1] == '-') {
            var a = stack[i];
            var b = stack[i+2];
            var expr = stack[i+1];
            var value = performFunc(a, b, expr);
            stack.splice(i, 3, value);
        }
        else {
            i += 2;
        }
    }
    return stack;
}

function Calculator(str){
    var tokens = str.match(/\d+|[()+\-*/]/g);

    for(var i = 0; i < tokens.length; i++) {
        processChar(tokens[i]);
        lastToken = tokens[i];
    }

    stack = processStack(stack);
    return stack.pop();
}

// call the function
console.log(Calculator(readline()));