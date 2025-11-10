"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function DeepEqual(a, b) {
    if (typeof a !== typeof b || a.length !== b.length)
        return false;
    if (typeof a === 'object') {
        let keyOfA = Object.keys(a);
        let valueOfA = Object.values(a);
        let keyOfB = Object.keys(b);
        let valueOfB = Object.values(b);
        for (let i = 0; i < keyOfA.length; i++) {
            if (keyOfA[i] !== keyOfB[i])
                return false;
        }
        for (let i = 0; i < valueOfA.length; i++) {
            if (valueOfA.length !== valueOfB.length)
                return false;
            if (typeof valueOfA[i] !== 'object') {
                if (valueOfA[i] !== valueOfB[i])
                    return false;
            }
            else {
                let values = Object.values(valueOfA);
                console.log(values);
            }
        }
        return 'true';
    }
}
console.log(DeepEqual({ x: 1, y: { z: 2 } }, { x: 1, y: { z: 2 } }));
//# sourceMappingURL=task3.js.map