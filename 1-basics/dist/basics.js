"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adding = void 0;
function adding(n1, n2, showResult, phrase) {
    const result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
exports.adding = adding;
const num1 = 5;
const num2 = 12;
const printResult = true;
const phrase = "Result is: ";
adding(num1, num2, printResult, phrase);
//# sourceMappingURL=basics.js.map