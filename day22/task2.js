"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeatingArrangement = SeatingArrangement;
function SeatingArrangement(people) {
    if (people.length === 0 || people.trim() === "")
        return 'Invalid input';
    var arr = people.toString().replaceAll(",", "").split(" ");
    var sample = [];
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        sample.push(arr[i]);
        for (var j = i + 1; j < arr.length; j++) {
            if (!sample.includes(arr[j])) {
                sample.push(arr[j]);
            }
        }
        for (var k = 0; k < arr.length; k++) {
            if (!sample.includes(arr[k])) {
                sample.push(arr[k]);
            }
        }
        // console.log(sample);
        result.push(sample);
        sample = [];
    }
    return (result);
}
// console.log(SeatingArrangement("A, B"))
