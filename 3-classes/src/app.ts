// Code goes here!

class Department {
  //   private name: string;
  //   private employees: string[] = [];

  //   constructor(n: string) {
  //     this.name = n;
  //   }

  private employees: string[] = [];
  constructor(private readonly id: string, public name: string) {}

  // adding a method to a class!
  // when describe is executed, the object you're calling describe on should always refer to a type Department class.
  // this is added extra type saftey
  describe(this: Department) {
    console.log(`Department ${this.name}, ID: ${this.id}`);
  }

  addEmployee(this: Department, employee: string) {
    this.employees.push(employee);
  }
  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department("D1", "Accounting");

accounting.addEmployee("MAX");
accounting.addEmployee("MIKE");
accounting.describe();
accounting.printEmployeeInformation();
