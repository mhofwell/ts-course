// TS can infer the values for name, age
// can use type object or {} but use {} and
// define the object. 

const person: {
  name: string;
  age: number;
} = {
  name: "Mike",
  age: 30,
};

console.log(person.name);

export { person };
