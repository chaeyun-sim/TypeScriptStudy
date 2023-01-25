// const names: Array<string> = [];  // == string[]
// // names[0].split(' ');
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// const promise: Promise<any> = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('This is done!')
//     }, 2000);
// });
// promise.then((data) => {
//     data.split(' ');
// })
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
// const mergeObj = merge({name: 'Max'}, {age: 30}) as { name: string, age: number};
var mergeObj = merge({ name: 'Max' }, { age: 30 });
console.log(mergeObj.age);
function countAndDescribe(element) {
    var descriptionText = 'Got no value.';
    if (element.length === 1) {
        descriptionText = 'Got 1 element.';
    }
    else if (element.length > 1) {
        descriptionText = "Got ".concat(element.length, " elements.");
    }
    return [element, descriptionText];
}
console.log(countAndDescribe(['Cookie', 'Sport']));
function extractAndConvert(obj, key) {
    return 'Value: ' + obj[key];
}
console.log(extractAndConvert({ name: 'Max' }, 'name'));
var DataStorage = /** @class */ (function () {
    function DataStorage() {
        this.data = [];
    }
    DataStorage.prototype.addItem = function (item) {
        this.data.push(item);
    };
    DataStorage.prototype.removeItem = function (item) {
        this.data.splice(this.data.indexOf(item), 1);
    };
    DataStorage.prototype.getItems = function () {
        return __spreadArray([], this.data, true);
    };
    return DataStorage;
}());
function createCourseGoal(title, description, date) {
    var courseGoal = {};
    // 중괄호 쌍이 courseGoal이 되는 객체임을 알려줌
    // 모든 속성이 선택적인 객체 타입으로 바꿈
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal;
}
console.log(createCourseGoal('This is a Title', 'This is description', Date));
