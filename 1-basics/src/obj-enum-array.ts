// TS can infer the values for name, age
// can use type object or {} but use {} and
// define the object.

enum Role {
  ADMIN = 5,
  // this will be 6
  READ_ONLY,
  // this will be 7
  AUTHOR,
}

// by default you start with ADMIN = 0 and they go 1, 2 etc., 
// you can even mix and use text. ADMIN = 'ADMIN' and READ_ONLY = 100

const person: {
  name: string;
  age: number;
  hobbies: {
    hobby: string;
  }[];
  // tuple
  likes: [number, string];
  // enum
  role: Role;
} = {
  name: "Mike",
  age: 30,
  hobbies: [{ hobby: "sports" }, { hobby: "art" }],
  likes: [2, "ace"],
  role: Role.ADMIN,
};

console.log(person.name);

export { person };
