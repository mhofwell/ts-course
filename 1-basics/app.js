"use strict";
// TS can infer the values for name, age
// can use type object or {} but use {} and
// define the object. 
Object.defineProperty(exports, "__esModule", { value: true });
exports.person = void 0;
var person = {
    name: "Mike",
    age: 30,
};
exports.person = person;
console.log(person);
