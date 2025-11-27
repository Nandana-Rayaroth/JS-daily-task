"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinearSearch = LinearSearch;
function LinearSearch(arr, item) {
    if (arr.length === 0)
        return "Invalid input";
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
            return "Value ".concat(item, " found at index ").concat(i);
        }
    }
    return "Value ".concat(item, " is not found");
}
// console.log(LinearSearch([7, 12, 9, 11, 3], 11));
// console.log(LinearSearch([81, 54, 32, 1, 98, 43], 43));
// console.log(LinearSearch([81, 54, 32, 1, 98, 43], 100));
