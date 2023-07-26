/* Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.*/

function findSecondSmallest(arr) {
    if (arr.length < 2) {
        return "Array should have at least two elements.";
    }

    let smallest = Infinity;
    let secondSmallest = Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            secondSmallest = smallest;
            smallest = arr[i];
        } else if (arr[i] < secondSmallest && arr[i] !== smallest) {
            secondSmallest = arr[i];
        }
    }

    if (secondSmallest === Infinity) {
        return "There is no second smallest element.";
    }

    return secondSmallest;
}
const inputArray = [3, 7, 1, 5, 9, 2];
console.log(findSecondSmallest(inputArray)); 