// // Code goes here!
// // One generic is Arrays
// const names = ["max", "mike"];

// const names1: Array<string> = [];
// const names2: string[] = [];

// // Another Generic is a promise

// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("This is done");
//   }, 2000);
// });

// promise.then(data=>{
//     const value = data + 1;
//     return value;
// })

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: "Max", hobbies: ["Sports"] }, { age: 30 });

console.log(mergedObj.age);

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let description = "Got no value";
  if (element.length === 1) {
    description = "Got 1 element";
  } else if (element.length > 1) {
    description = "Got " + element.length + " elements";
  }

  return [element, description];
}

// returns Hi there, Got 9 elements
console.log(countAndDescribe("Hi there!"));

// returns Array 2, got 2 elements
console.log(countAndDescribe(["sports", "age"]));

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return " Value: " + obj[key];
}

console.log({}, "name");

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("MAx");
console.log(textStorage.getItems());

const numStore = new DataStorage<number>();
numStore.addItem(1);
console.log(numStore.getItems());

// const objStorage = new DataStorage<object>();
// const maxObj = { name: "Mike" };
// objStorage.addItem(maxObj);
// objStorage.addItem({ name: "Manu" });

// objStorage.removeItem(maxObj);
// console.log(objStorage.getItems());

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

// allows for creating objects in step-by-step fashion where perhaps you don't have
// all the data for the object now but will add it with logic. 
function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  // Partial changes so all the properties are optional. Tehrefore we can set it to an empty object.
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  // because courseGoal is not of Type CourseGoal so we have to coerce it.
  return courseGoal as CourseGoal;
}

// Readonyl. We want to make sure this is a locked array. 
const names: Readonly<string[]> = ['Max', 'Sports'];
// causes error
names.push('Manu');
