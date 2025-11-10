"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Once(fn) {
    return fn;
}
const initialize = Once(() => console.log("Initialized"));
initialize();
initialize();
//# sourceMappingURL=task4.js.map