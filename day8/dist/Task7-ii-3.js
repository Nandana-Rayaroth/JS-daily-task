"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isAnagram(str1, str2) {
    let temp1 = str1.split("").sort().join("");
    let temp2 = str2.split("").sort().join("");
    if (str1.length === str2.length && temp1 === temp2) {
        console.log("True");
    }
    else {
        console.log("False");
    }
}
isAnagram("listen", "silent");
isAnagram("restful", "fluster");
isAnagram("hello", "world");
//# sourceMappingURL=Task7-ii-3.js.map