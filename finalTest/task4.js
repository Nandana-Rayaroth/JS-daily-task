"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.templateParser = templateParser;
function templateParser(str, obj) {
    var splitted = str.split(" ");
    var Keys = Object.keys(obj);
    var Value = Object.values(obj);
    for (var i = 0; i < splitted.length; i++) {
        var temp = splitted[i].split("");
        var item = splitted[i];
        if (temp[temp.length - 1] === "," || temp[temp.length - 1] === ".") {
            temp.splice(temp.length - 1, 1);
            item = temp.join("");
        }
        if (temp[0] === "{" &&
            temp[1] === "{" &&
            temp[temp.length - 1] === "}" &&
            temp[temp.length - 2] === "}") {
            temp.splice(0, 1);
            temp.splice(0, 1);
            temp.splice(temp.length - 1, 1);
            temp.splice(temp.length - 1, 1);
            for (var j = 0; j < Keys.length; j++) {
                if (temp.join("") === Keys[j]) {
                    str = str.replaceAll(item, Value[j]);
                }
            }
        }
    }
    return str;
}
// console.log(templateParser("Hello {{name}}, you have {{count}} new messages.", {name: "John", count: 3}))
// console.log(templateParser("Welcome to {{name}}, You have so many {{item}} here, also we arranged {{complement}}", {name: "Wonderland", item: "fun", complement: "food"}))
