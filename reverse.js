/* 
Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 

*/
function reverseString(str) {
    if (typeof str !== "string") {
        return "Enter A String";
    }
    const splitStr = str.split('');
    const reverseArray = [];
    for (let i = splitStr.length - 1; i >= 0; i--) {
        reverseArray.push(splitStr[i]);
    }
    return reverseArray.join('');
}
const result = reverseString(555);
console.log(result);