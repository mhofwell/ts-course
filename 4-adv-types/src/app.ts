// Code goes here!

type Admin = {
  name: string;
  priv: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Mike",
  priv: ["create-server"],
  startDate: new Date(),
};

type Combineable = string | number;
type Numeric = number | boolean;

type Universal = Combineable & Numeric;

function add(a: string, b: string): string;
function add(a: number, b: number): number;
function add(a: string, b: number): string;
function add(a: Combineable, b: Combineable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = add("a", "b");
result.split(" ");

const fetchedUserData = {
  id: "u1",
  name: "Max",
  job: { title: "CEO", description: "My own company" },
};

// chaining to see if properties on objects you get. Useful for accessing information from sources where you're unsure if the data will be there. 
console.log(fetchedUserData?.job?.title);

const userInput = null; 

// ?? means if this is null or undefined store DEFAULT
const storedData = userInput ?? 'DEFAULT';

console.log(storedData);



// type UnknownEmployee = Employee | Admin;

// function printEmployeeInformation(emp: UnknownEmployee) {
//   console.log("name: " + emp.name);
//   // the way to access a property inside the if check. This is JS running not JSX.
//   if ("priv" in emp) {
//     console.log("Priviledges: " + emp.priv);
//   }
//   if ("startDate" in emp) {
//     console.log("Start Date: " + emp.startDate);
//   }
// }

// printEmployeeInformation({ name: "Manu", startDate: new Date() });

// class Car {
//   drive() {
//     console.log("DRiving");
//   }
// }

// class Truck {
//   drive() {
//     console.log("Driving truck");
//   }
//   loadCargo(amount: number) {
//     console.log("Loading Cargo.... " + amount);
//   }
// }

// type Vehicle = Car | Truck;

// const v1 = new Car();
// const v2 = new Truck();

// function useVehicle(vehicle: Vehicle) {
//   vehicle.drive();
//   if (vehicle instanceof Truck) {
//     vehicle.loadCargo(1000);
//   }
// }

// useVehicle(v1);
// useVehicle(v2);

// // Discriminated unions are used with objects. Interfaces aren't compiled to JS so you can't use instanceof. Classes work with instanceof.
// // Discriminating unions are basically a common property shared between objects to detrmine which one you're using and then call logic on it.

// interface Bird {
//   type: "bird";
//   flyingSpeed: number;
// }

// interface Horse {
//   type: "horse";
//   runningSpeed: number;
// }

// type Animal = Bird | Horse;

// function moveAnimal(animal: Animal) {
//   let speed;
//   switch (animal.type) {
//     case "bird":
//       speed = animal.flyingSpeed;
//       break;
//     case "horse":
//       speed = animal.runningSpeed;
//   }
//   console.log("Moving with speed: " + speed);
// }

// moveAnimal({ type: "bird", flyingSpeed: 10 });

// // const userInputElement = <HTMLInputElement>document.querySelector('user-input')!;
// const userInputElement = (<HTMLInputElement>(
//   document.querySelector("user-input")!
// )) as HTMLInputElement;

// if (userInputElement) {
//   (userInputElement as HTMLInputElement).value = "Hi there!";
// }

// interface ErrorContainer {
//   // {email: 'Not a valid email, username: 'Not a valid UN'}
//   // define an index type with[]
//   [prop: string]: string;
// }

// const errorBag: ErrorContainer = {
//   email: "Not a valid email",
//   username: "Must start with a capital character",
// };
