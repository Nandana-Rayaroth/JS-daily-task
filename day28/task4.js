"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CamelCase = CamelCase;
function CamelCase(str) {
    var temp = "";
    for (var i = 0; i < str.length; i++) {
        if (str[i] === " ")
            return "Invalid snake case";
        else {
            if (str[i - 1] === "_") {
                if (str[i].toUpperCase() === str[i])
                    return "Invalid snake case";
                temp += str[i].toUpperCase();
            }
            else if (str[i] !== "_") {
                if (str[i].toUpperCase() === str[i])
                    return "Invalid snake case";
                temp += str[i];
            }
        }
    }
    return temp;
}
// console.log(CamelCase("hello_world_fron_js"))
