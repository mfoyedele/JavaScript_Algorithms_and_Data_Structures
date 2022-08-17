// FREQUENCY COUNTERS II
// ANAGRAMS

// Que: Given two strings, write a function to determine if the second string is an anagram of the first.
// An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

function validAnagram(first, second) {
    if (first.length !== second.length) {
        return false;
    }
    
    const lookup = {};

    for (let i = 0; i < first.length; i++) {
        let letter = first[i];
        // if letter exists, increment, otherwise set to 1
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] =1;
    }
    console.log(lookup)

        for (let i = 0; i < second.length; i++) {
        let letter = second[i];
        // can't find letter or letter is zero then it's not an anagram
        if (!lookup[letter]) {
            return false
        } else {
            lookup[letter] -= 1;
        }
    }
    return true;
}

// {a: 3, n: 1, g: 1, r: 1, m: 1}

validAnagram('anagram', 'nagrama')
