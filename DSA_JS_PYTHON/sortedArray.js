function sortedSquared(array)
    {
        const newArray = new Array(array.length).fill(0);
        
        for (let i = 0; i < array.length; i++)
            {
                newArray[i] = Math.pow(array[i], 2);
            }
        newArray.sort(function(a, b)
                      {
                          return a - b
                      })
        return newArray;
    }

a = [1, 3, 4, 5];
b = [-7, -2, 3, 4, 9];
c = [];

console.log(sortedSquared(a));
console.log(sortedSquared(b));
console.log(sortedSquared(c));