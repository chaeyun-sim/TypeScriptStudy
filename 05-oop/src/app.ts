abstract class Department {
  static fiscalYear = 2020;
  // private readonly id: string = '';
  // private name: string = '';
  protected employee: string[] = [];

  constructor(protected readonly id: string, public name: string) {
    // this.id = id;
    // this.name = name;
  }

  static createEmployee(name: string){
    return { name: name };
  }

  abstract describe(this: Department) : void;
    // console.log('Department : ' + this.name)
    // console.log(`Department (${this.id}): ${this.name}`)

  addEmployee(employee: string){
    // this.id = 'd2';
    this.employee.push(employee)
  }

  printEmployeeInformation() {
    // console.log(this.employee.length);
    // console.log(this.employee);
  }
}

class ITDepartment extends Department {
  admin: string[] = [];

  constructor(id: string,  admin: string[]){
    super(id, 'IT');
    this.admin = admin;
  }

  
}

class AccountingDepartment extends Department {
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport){
      return this.lastReport;
    }
    throw new Error('No report found');
  }

  set mostRecentReport(value: string) {
    if(!value){
      throw new Error('Please pass in a valid value')  
    }
    this.addReport(value);
  }

  constructor(id: string, private reports: string[]){
    super(id, 'Accounting')
    this.lastReport = reports[0];
  }

  describe() {
    console.log('Accounting Department - ID : ' + this.id)
  }

  addEmployee(name: string){
    if (name === 'Max') {
      return;
    }
    this.employee.push(name);
  }

  addReport(text: string){
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports(){
    console.log(this.reports)
  }
}



const emplyee1 = Department.createEmployee('Max');
console.log(emplyee1, Department.fiscalYear)

const it = new ITDepartment('d1', ['Max']);

//속성 값 추가하기
it.addEmployee('Max'); 
it.addEmployee('Jane');

it.describe();
it.name = 'NEW NAME';
it.printEmployeeInformation();
// console.log(it)

const accounting = new AccountingDepartment('d2', []);

accounting.mostRecentReport = 'Year End Report';

// accounting.addReport('Something went wrong...')
// accounting.printReports();

accounting.describe();

// console.log(accounting.mostRecentReport)
