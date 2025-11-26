"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonKey = CommonKey;
function CommonKey(obj1, obj2) {
    var key1 = Object.keys(obj1);
    var key2 = Object.keys(obj2);
    if (key1.length === 0 || key2.length === 0)
        return "Invalid input";
    var result = [];
    var small;
    var large;
    key1.length > key2.length ? small = key2 : small = key1;
    JSON.stringify(small) === JSON.stringify(key1) ? large = key2 : large = key1;
    for (var i = 0; i < small.length; i++) {
        if (large.includes(small[i]))
            result.push(small[i]);
    }
    if (result.length !== 0)
        return result;
    else
        return "No common keys";
}
// console.log(CommonKey({name: "Brad", age: "24"}, {name: "Titan", place: "mars"}))
