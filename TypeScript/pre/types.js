"use strict";
// enum can be used instead of constant assignments
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;
// this is enum
// if enum variable index has to start with other than 0, it can be assigned manually like AMIN = 5 (desired starting number)
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: "Nara",
    age: 30,
    hobbies: ["Gaming", "Lifting"],
    role: Role.ADMIN,
};
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string]; // tuple with fixed length and type
// } = {
//   name: "Nara",
//   age: 30,
//   hobbies: ["Gaming", "Lifting"],
//   role: [2, "author"],
// };
// length is enforced when assigning or reassigning
// person.role.push("admin"); // push is allowed in tuples so ts won't catch this
// person.role[1] = 10;
var favoriteActivities;
favoriteActivities = ["Jogging"];
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
}
// explicit type assignment
// const person: {
//   name: string;
//   age: number;
// } = {
//   name: "Nara",
//   age: 30,
// };
console.log(person.name);
