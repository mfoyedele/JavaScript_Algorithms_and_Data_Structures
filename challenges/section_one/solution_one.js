// sameFrequecy Solution
// Que: Write a function called sameFrequecy. Given two positive integers, find out if the two numbers have the same frequency of digits.
function sameFrequecy(num1, num2) {
    let strNum1 = num1.toString();
    let strNum2 = num2.toString();
    if(strNum1.length !== strNum2.length) return false;

    let countNum1 = {};
    let countNum2 = {};

    for (let i = 0; i < strNum1.length; i++) {
        countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1;
    }
    for (let j = 0; j < strNum1.length; j++) {
        countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1;        
    }

    for (let key in countNum1) {
        if (countNum1[key] !== countNum2[key]) return false;
    }

    return true;
}

sameFrequecy(423, 342)

// areThereDuplicates Solution (Frequency Counter)
// Que: Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in. You can solve this using the frequency counter pattern OR the multiple pointers pattern.
function areThereDuplicates() {
    let collection = {};
    for (let val in arguments) {
        collection[arguments[val]] = (collection[arguments[val]] || 0) + 1;
    }

    for (let key in collection) {
        if (collection[key] > 1) return true;
    }
    return false;
}

areThereDuplicates(1,2,3,2,4)

// areThereDuplicates Solution (Multiple Pointers)
function areThereDuplicates(...args) {
    // Two Pointers
    args.sort((a,b) => a > b);
    let start = 0;
    let next = 1;
    while (next < args.length) {
        if (args[start] === args[next]) {
            return true;
        }

        start++
        next++
    }
    return false;
}

areThereDuplicates(1,2,2,3,5)

// areThereDuplicates One Liner Solution
function areThereDuplicates() {
    return new Set(arguments).size !== arguments.length;
}

areThereDuplicates(1,2,3,2)
