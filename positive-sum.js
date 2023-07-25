/* 
Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 

*/
function arrSum(arr) {
    if (!Array.isArray(arr)) {
        return "Enter an array";
    }
    const positiveArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            positiveArr.push(arr[i])
        }
    }
    return positiveArr.reduce((previous, current) => previous + current, 0);
}
const result = arrSum([2, -5, 10, -3, 7])
console.log(result);