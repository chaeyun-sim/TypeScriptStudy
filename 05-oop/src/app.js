var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Department = /** @class */ (function () {
    function Department(id, name) {
        this.id = id;
        this.name = name;
        // private readonly id: string = '';
        // private name: string = '';
        this.employee = [];
        // this.id = id;
        // this.name = name;
    }
    Department.createEmployee = function (name) {
        return { name: name };
    };
    Department.prototype.describe = function () {
        // console.log('Department : ' + this.name)
        console.log("Department (".concat(this.id, "): ").concat(this.name));
    };
    Department.prototype.addEmployee = function (employee) {
        // this.id = 'd2';
        this.employee.push(employee);
    };
    Department.prototype.printEmployeeInformation = function () {
        // console.log(this.employee.length);
        // console.log(this.employee);
    };
    Department.fiscalYear = 2020;
    return Department;
}());
var ITDepartment = /** @class */ (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment(id, admin) {
        var _this = _super.call(this, id, 'IT') || this;
        _this.admin = [];
        _this.admin = admin;
        return _this;
    }
    return ITDepartment;
}(Department));
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment(id, reports) {
        var _this = _super.call(this, id, 'Accounting') || this;
        _this.reports = reports;
        _this.lastReport = reports[0];
        return _this;
    }
    Object.defineProperty(AccountingDepartment.prototype, "mostRecentReport", {
        get: function () {
            if (this.lastReport) {
                return this.lastReport;
            }
            throw new Error('No report found');
        },
        set: function (value) {
            if (!value) {
                throw new Error('Please pass in a valid value');
            }
            this.addReport(value);
        },
        enumerable: false,
        configurable: true
    });
    AccountingDepartment.prototype.describe = function () {
        console.log('Accounting Department - ID : ' + this.id);
    };
    AccountingDepartment.prototype.addEmployee = function (name) {
        if (name === 'Max') {
            return;
        }
        this.employee.push(name);
    };
    AccountingDepartment.prototype.addReport = function (text) {
        this.reports.push(text);
        this.lastReport = text;
    };
    AccountingDepartment.prototype.printReports = function () {
        console.log(this.reports);
    };
    return AccountingDepartment;
}(Department));
var emplyee1 = Department.createEmployee('Max');
console.log(emplyee1, Department.fiscalYear);
var it = new ITDepartment('d1', ['Max']);
//속성 값 추가하기
it.addEmployee('Max');
it.addEmployee('Jane');
it.describe();
it.name = 'NEW NAME';
it.printEmployeeInformation();
// console.log(it)
var accounting = new AccountingDepartment('d2', []);
accounting.mostRecentReport = 'Year End Report';
// accounting.addReport('Something went wrong...')
// accounting.printReports();
accounting.describe();
// console.log(accounting.mostRecentReport)
