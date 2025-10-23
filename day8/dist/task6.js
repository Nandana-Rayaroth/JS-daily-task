"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Directions;
(function (Directions) {
    Directions["Up"] = "Up";
    Directions["Down"] = "Down";
    Directions["Left"] = "Left";
    Directions["Right"] = "Right";
})(Directions || (Directions = {}));
function directionSelector(direction) {
    return `You moved ${direction}`;
}
console.log(directionSelector(Directions.Down));
//# sourceMappingURL=task6.js.map