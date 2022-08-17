// FREQUENCY COUNTERS
// This pattern uses objects or sets to collect values/frequencies of values.
// This can often avoid the need for nested loops or O(N^2) operations with arrays/string.

// Que: Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.

function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if(correctIndex === -1) {
            return false;
        }
        arr2.splice(correctIndex, 1)
    }
    return true;
}

same([1,2,4,3], [9,4,16,1])
