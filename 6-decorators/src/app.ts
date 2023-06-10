// function Logger(logString: string) {
//   console.log("LOGGER FACTORY");
//   return function (constructor: Function) {
//     console.log(logString);
//     console.log(constructor);
//   };
// }

// function WithTemplate(template: string, hookId: string) {
//   console.log("TEMPLATE FACTORY");
//   return function <T extends { new (...args: any[]): { name: string } }>(
//     originalConstructor: T
//   ) {
//     return class extends originalConstructor {
//       // _ we know we need to accept it, but I won't use it parameter
//       // replaced the original class (constructor). Max uses class/constructor interchangeably.
//       // we can now run code when the class is instantiatd
//       constructor(..._: any[]) {
//         // super saves the original class
//         super();
//         console.log("Rendering template");
//         const hookEl = document.getElementById(hookId);
//         if (hookEl) {
//           hookEl.innerHTML = template;
//           hookEl.querySelector("h1")!.textContent = this.name;
//         }
//       }
//     };
//   };
// }

// // @Logger('LOGGING - PERSON')
// @Logger("LOGGING")
// @WithTemplate("<h1>My Person Object</h1>", "app")
// class Person {
//   name = "Max";

//   constructor() {
//     console.log("Creating person object...");
//   }
// }

// const pers = new Person();

// console.log(pers);

// // ---

// function Log(target: any, propertyName: string | Symbol) {
//   console.log("Property decorator!");
//   console.log(target, propertyName);
// }

// function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
//   console.log("Accessor decorator!");
//   console.log(target);
//   console.log(name);
//   console.log(descriptor);
// }

// function Log3(
//   target: any,
//   name: string | Symbol,
//   descriptor: PropertyDescriptor
// ) {
//   console.log("Method decorator!");
//   console.log(target);
//   console.log(name);
//   console.log(descriptor);
// }

// function Log4(target: any, name: string | Symbol, position: number) {
//   console.log("Parameter decorator!");
//   console.log(target);
//   console.log(name);
//   console.log(position);
// }

// class Product {
//   @Log
//   title: string;
//   private _price: number;

//   @Log2
//   set price(val: number) {
//     if (val > 0) {
//       this._price = val;
//     } else {
//       throw new Error("Invalid price - should be positive!");
//     }
//   }

//   constructor(t: string, p: number) {
//     this.title = t;
//     this._price = p;
//   }

//   @Log3
//   getPriceWithTax(@Log4 tax: number) {
//     return this._price * (1 + tax);
//   }
// }

// const p1 = new Product("Book", 19);
// const p2 = new Product("Book 2", 29);

// // when we click a button execute a method on an object
// // when we do this, we need to bind the method onto the class.
// // We need to do this because addEventListener binds 'this' to the target of the event. The button element. This is wrong.
// // we do this with an autobind decorator.
// // Bind the  method to the object where the method belongs to no matter where we call it.

// function Autobind(
//   // target: any,
//   // methodName: string,
//   _: any,
//   _2: string,
//   descriptor: PropertyDescriptor
// ) {
//   const originalMethod = descriptor.value;
//   const newDescriptor: PropertyDescriptor = {
//     configurable: true,
//     enumerable: false,
//     get() {
//       // we want to step in and do work before we execute the function
//       // since this is inside the get() method 'this' will bind to whatever is responsible
//       // for triggering the getter method.
//       // 'this' always refers to the object which it belongs(where we originally defined the method)
//       const boundFn = originalMethod.bind(this);
//       return boundFn;
//     },
//   };
//   return newDescriptor;
// }

// class Printer {
//   message = "This Works!";

//   @Autobind
//   showMessage() {
//     console.log(this.message);
//   }
// }

// const p = new Printer();

// const button = document.querySelector("button")!;
// button.addEventListener("click", p.showMessage);

// "Validation Decorators"
// scenario you fetch data and you get data where you guess you ave Courses but you don't know for sure.
// OR you let users enter the data and you want to create a new course with the data, but you don't know if its right.
// SO YOU VALIDATE
// Ex., we create a course, lets validate the input in the class with a decorator

// this could be a part of a 3rd party library!

interface ValidatorConfig {
  [property: string]: {
    [validatalbleProp: string]: string[]; // ['required', 'positive']
  };
}

const registeredValidators: ValidatorConfig = {};

// Property decorator gets two arguments
function Required(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: ["required"],
  };
}

function PositiveNumber(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: ["positive"],
  };
}

function validate(obj: any) {
  const objValidatorConfig = registeredValidators[obj.constructor.name];
  if (!objValidatorConfig) {
    return true;
  }

  let isValid = true;

  for (const prop in objValidatorConfig) {
    for (const validator of objValidatorConfig[prop]) {
      switch (validator) {
        case "required":
          isValid = isValid && !!obj[prop];
          break;
        case "positive":
          isValid = isValid && obj[prop] > 0;
      }
    }
  }
  return isValid;
}

class Course {
  @Required
  title: string;
  @PositiveNumber
  price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
  }
}

const courseForm = document.querySelector("form")!;

courseForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const titleEl = document.getElementById("title") as HTMLInputElement;
  const priceEl = document.getElementById("price") as HTMLInputElement;

  const title = titleEl.value;
  const price = +priceEl.value;

  const createdCourse = new Course(title, price);

  if (!validate(createdCourse)) {
    throw new Error("invalid input");
  }
  console.log(createdCourse);
});
