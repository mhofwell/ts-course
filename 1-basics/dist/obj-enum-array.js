"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.person = void 0;
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 5] = "ADMIN";
    Role[Role["READ_ONLY"] = 6] = "READ_ONLY";
    Role[Role["AUTHOR"] = 7] = "AUTHOR";
})(Role || (Role = {}));
const person = {
    name: "Mike",
    age: 30,
    hobbies: [{ hobby: "sports" }, { hobby: "art" }],
    likes: [2, "ace"],
    role: Role.ADMIN,
};
exports.person = person;
console.log(person.name);
//# sourceMappingURL=obj-enum-array.js.map