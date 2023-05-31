"use strict";
// we don't know what the user will enter
Object.defineProperty(exports, "__esModule", { value: true });
var userInput;
var userName;
userInput = 5;
userInput = "Max";
// string userName not assignbale to unknown userInput
// if we typecheck userInput to guarantee its a string, then we can assign userName to userInput because
// TS is certain it will recieve a string from userInput.
if (typeof userInput === "string") {
    userName = userInput;
}
// unknown better than any because you can use type checking to guarantee variable types.
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError("An error!", 500);
exports.default = { generateError: generateError };
