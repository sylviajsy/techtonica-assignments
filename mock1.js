// Prompt 1: Create a function to find NaN in an array of numbers. The return value should be the index where NaN 
// is found. If NaN is not found in the array, then return -1.

//     findNaN([1, 2, NaN]) ➞ 2
//     findNaN([NaN, 1, 2, 3, 4]) ➞ 0
//     findNaN([0, 1, 2, 3, 4]) ➞ -1

// findIndex -- to find the index where NaN is found
// isNaN -- to find NaN

function findNaN (arr) {
    return arr.findIndex(num => Number.isNaN(num));
}
// console.log(findNaN([NaN, 1, 2, 3, 4]))

// Prompt 2: Check if One Array can be Nested in Another. Create a function that returns true if the first array can 
// be nested inside the second. arr1 can be nested inside arr2 if:
// - arr1's min is greater than arr2's min.
// - arr1's max is less than arr2's max.

//     canNest([3, 1], [4, 0]) ➞ true
//     canNest([9, 9, 8], [8, 9]) ➞ false
//     canNest([1, 2, 3, 4], [2, 3]) ➞ false

// Math.min and Math.max

function canNest(arr1, arr2){
    return Math.min(...arr1) > Math.min(...arr2) &&
        Math.max(...arr1) < Math.max(...arr2)
}
console.log(canNest([3, 1], [4, 0]));