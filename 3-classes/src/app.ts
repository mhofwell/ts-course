// // interfaces

// interface Greetable extends Named {
//   readonly name: string;
//   greet(phrase: string): void;
// }

// interface Named {
//     readonly name: string;
// }

// // Greetable is the contract to share functionality across multiple classes.
// class Person implements Greetable {
//   name: string;
//   age = 30;

//   constructor(n: string) {
//     this.name = n;
//   }
//   greet(phrase: string): void {
//     console.log(phrase + " " + this.name);
//   }
// }

// // can use Person or Greetable here.
// let user1: Greetable;

// // user1 = {
// //   name: "Mike",
// //   greet(phrase: string) {
// //     console.log(phrase + " " + this.name);
// //   },
// // };

// user1 = new Person("Mike");

// user1.greet("Hi!");
// console.log(user1);

// type AddFn = (a: number, b: number) => number;
interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
  return n1 + n2;
};

// interfaces

interface Greetable extends Named {
  greet(phrase: string): void;
}

interface Named {
  readonly name?: string;
  outputName?: string;
}

// Greetable is the contract to share functionality across multiple classes.
class Person implements Greetable {
  name?: string;
  age = 30;

  constructor(n?: string) {
    if (n) {
      this.name = n;
      return;
    }
    throw new Error("No name");
  }
  greet(phrase: string): void {
    console.log(phrase + " " + this.name);
  }
}

// can use Person or Greetable here.
let user1: Greetable;

// user1 = {
//   name: "Mike",
//   greet(phrase: string) {
//     console.log(phrase + " " + this.name);
//   },
// };

user1 = new Person();

user1.greet("Hi!");
console.log(user1);
