"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UniqArr = UniqArr;
function UniqArr(arr) {
    var temp = [];
    for (var i = 0; i < arr.length; i++) {
        if (!temp.includes(arr[i])) {
            temp.push(arr[i]);
        }
    }
    return (temp);
}
// console.log(UniqArr([3, 34, 12, 54, 3, 12, 54]))
// console.log(UniqArr(["a", "b" , "a"]))
