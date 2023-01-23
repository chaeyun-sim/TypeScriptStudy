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

  describe() {
    console.log('IT Department - ID : ', this.id)
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;
  // 클래스 자체에서 접근할 수 있는 정적 속성이 있지만 그건 클래스 내에서만 접근할 수 있다.
  // 여기에 저장하는 값은 AccountingDepartment의 타입, 즉 클래스 자체가 된다.

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

  private constructor(id: string, private reports: string[]){
    super(id, 'Accounting')
    this.lastReport = reports[0];
  }

  static getInstance(){
    if(AccountingDepartment.instance){
      return this.instance;
    }
    this.instance = new AccountingDepartment('d2', []);
    return this.instance;
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

// const accounting = new AccountingDepartment('d2', []);
const accounting = AccountingDepartment.getInstance();

accounting.mostRecentReport = 'Year End Report';

// accounting.addReport('Something went wrong...')
// accounting.printReports();

accounting.describe();

// console.log(accounting.mostRecentReport)
