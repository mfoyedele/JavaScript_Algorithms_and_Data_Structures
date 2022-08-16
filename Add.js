// Write a function which takes in a string and returns counts of each character in the string.

charCount("aaaa"); // (a:4)
charCount("hello"); // (h:1, e:1, l:2, e:1)

function charCount(str) {
    // make object to return at end
    // loop over string, for each character...     
        //if the char is a number/letter AND is a key in object, add one to count
       //if the char is a number/letter AND not in object, add it to object and set value to 1
       //if the character is something else (space, period, etc.) don't do anything
    // return object at end
}

function charCount(str) {
    // make object to return at end
    var result = {};
    // loop over string, for each character...
    for(var i = 0; i < str.length; i++) {
        var char = str[i].toLowerCase()
        //if the char is a number/letter AND is a key in object, add one to count
        if(result[char] > 0) {
            result[char]++;
        }
        //if the char is a number/letter AND not in object, add it to object and set value to 1
        else {
            result[char] = 1;
        }
    }       
       
       //if the character is something else (space, period, etc.) don't do anything
    // return object at end
    return result;
}
