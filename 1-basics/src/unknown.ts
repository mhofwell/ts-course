// we don't know what the user will enter

let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Max";

// string userName not assignbale to unknown userInput
// if we typecheck userInput to guarantee its a string, then we can assign userName to userInput because
// TS is certain it will recieve a string from userInput.

if (typeof userInput === "string") {
  userName = userInput;
}

// unknown better than any because you can use type checking to guarantee variable types.


// using Never type. Void is typically assumed, but for utlity functions like this that throw errors, 
// it will never return anything. 

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

// also a good case for NEVER
// while (true) {}; 

generateError("An error!", 500);

export default { generateError };
