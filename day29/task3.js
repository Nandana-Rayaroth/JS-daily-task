"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToSingleObject = ToSingleObject;
function ToSingleObject(arr) {
    var Obj = {};
    for (var i = 0; i < arr.length; i++) {
        // if(typeof(arr[i].key) === 'string'){
        //     if(arr[i].key.trim() === "") return "Invalid input"
        // }
        var value = Object.values(arr[i]);
        for (var i_1 = 0; i_1 < value.length; i_1 = i_1 + 2) {
            if (typeof (value[i_1]) === 'string' && value[i_1].trim() === "")
                return "Invalid input";
            if (typeof (value[i_1 + 1]) === 'string' && value[i_1 + 1].trim() === "")
                return "Invalid input";
            Obj[value[i_1]] = value[i_1 + 1];
        }
    }
    return Obj;
}
// console.log(ToSingleObject([{key: "", value: 32}]))
