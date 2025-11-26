"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConvertToObj = ConvertToObj;
function ConvertToObj(str) {
    if (str[0] !== "?")
        return "Invalid URL";
    var sample = str;
    var obj = {};
    sample = sample.slice(1);
    if (sample.includes("&")) {
        var splitted = sample.split("&");
        for (var i = 0; i < splitted.length; i++) {
            if (!splitted[i].includes("="))
                return "Invalid URL";
            var sub = splitted[i].split("=");
            for (var j = 0; j < sub.length; j = j + 2) {
                obj[sub[j]] = sub[j + 1];
            }
        }
    }
    else {
        if (!sample.includes("="))
            return "Invalid URL";
        var sub = sample.split("=");
        if (sub.length > 2 || sub.length < 2)
            return "Invalid URL";
        obj[sub[0]] = sub[1];
    }
    return obj;
}
// console.log(ConvertToObj("?name=John&age=20&active=true"))
// console.log(ConvertToObj("?name=John"))
