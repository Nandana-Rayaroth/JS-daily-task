"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringDecode = StringDecode;
function StringDecode(str, item) {
    if (str.length === 0 || item.length === 0)
        return "Invalid input";
    if (item === "encrypt" || item === "Encrypt" || item === "ENCRYPT") {
        var code = "";
        var item_1 = str[0];
        var count = 0;
        for (var i = 0; i < str.length; i++) {
            if (item_1 === str[i])
                count = count + 1;
            else {
                code += "".concat(item_1).concat(count);
                item_1 = str[i];
                count = 1;
            }
            if (i === str.length - 1)
                code += "".concat(item_1).concat(count);
        }
        return code;
    }
    if (item === "decrypt" || item === "Decrypt" || item === "DECRYPT") {
        var outStr = "";
        for (var i = 0; i < str.length; i = i + 2) {
            if (!Number(str[i + 1]))
                return "Invalid code";
            outStr += str[i].repeat(Number(str[i + 1]));
        }
        return outStr;
    }
    else
        return "Invalid input";
}
// StringDecode("aaabbbbcc", "encrypt")
// StringDecode("a3b4c2", "decrypt")
