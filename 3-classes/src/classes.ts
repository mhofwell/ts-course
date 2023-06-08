// Code goes here!

abstract class Department {
  //   private name: string;
  //   private employees: string[] = [];

  //   constructor(n: string) {
  //     this.name = n;
  //   }

  //  private employees: string[] = [];

  // protected makes this accessible to subclasses where private does not make it accessible.
  protected employees: string[] = [];
  // detatched from instances, static belongs in the super so you have to call Department.static to access it.
  static year = 2020;

  constructor(protected readonly id: string, public name: string) {}

  // adding a method to a class!
  // when describe is executed, the object you're calling describe on should always refer to a type Department class.
  // this is added extra type saftey
  //
  //  abstract describe(this: Department) {
  //     console.log(`Department ${this.name}, ID: ${this.id}`);
  //   }

  // abstract classes can not have a return value as you're meant to overwrite them in subclasses. But every subclass needs to have a describe property.
  abstract describe(this: Department): void;

  // static method returns an employee object, but you can use it to return anything, really. Its lke the Math.xyz
  static createEmployee(name: string) {
    return { name: name };
  }

  addEmployee(this: Department, employee: string) {
    this.employees.push(employee);
  }
  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  // public admins = string[]
  // inherited class gets everything including the constructor
  constructor(id: string, public admins: string[]) {
    // super calls the 'superset' or class that this is inheriting from's constructor function.
    // here we're passing in id that the ITDepartment would get to super as well as a hardcoded nane.
    super(id, "IT");
    this.admins = admins;
  }

  describe(): void {
    console.log('IT Department - ID: ' + this.id);
  }
}

// passing in Id and a string of admins. Name is hardcoded into the constructor in super.
const it = new ITDepartment("D1", ["Max"]);

const employee1 = Department.createEmployee("Max");
console.log(employee1, Department.year);

it.addEmployee("MAX");
it.addEmployee("MIKE");
it.describe();
it.name = "NEW NAME";
it.printEmployeeInformation();

console.log(it);

class Accounting extends Department {
  private lastReport: string;

  // getter is a property where you execute a function or method to retrive some data

  get getLastReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found");
  }

  set setRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value");
    }
    this.addReport(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, "ACC");
    this.lastReport = reports[0];
  }
  // Adding a method of the same name in a subclass but with different logic. Use Protected in the super class.
  addEmployee(name: string) {
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
  }
  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  getReports() {
    console.log(this.reports);
  }

  describe() {
    console.log("Accounting Department - ID: " + this.id);
  }
}

const accounting = new Accounting("A1", []);

// set report takes in a user value. the method isn't executed. Dont use ()
accounting.setRecentReport = "Yar Report";
accounting.addEmployee("Manu");
const lastReport = accounting.getLastReport;
console.log(accounting);
console.log(lastReport);
accounting.describe();
