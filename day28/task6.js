"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveFalsy = RemoveFalsy;
function RemoveFalsy(arr) {
    if (arr.length === 0)
        return "Invalid input";
    var temp = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i]) {
            temp.push(arr[i]);
        }
    }
    return temp;
}
// console.log(RemoveFalsy([1, 0, 2, "", 3, null, 4]))
