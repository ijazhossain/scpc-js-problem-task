/* 
Task 3: Write a JavaScript program to find the most frequent element in an array and return it. 

*/
function findFrequent(arr) {
    const frequency = {};
    for (let i = 0; i < arr.length; i++) {
        frequency[arr[i]] = (frequency[arr[i]] || 0) + 1;
    }
    let mostFrequentElement = arr[0];
    let maxFrequency = 1;
    for (const element in frequency) {
        if (frequency[element] > maxFrequency) {
            mostFrequentElement = element;
            maxFrequency = frequency[element]
        }
    }
    return maxFrequency;
}
const result = findFrequent([3, 5, 2, 5, 3, 3, 1, 4, 5])
console.log(result);