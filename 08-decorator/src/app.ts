// function Logger(logString: string) {  //decorator
//     return function (constructor: Function){
//         console.log(logString);
//         console.log(constructor);
//     }
// }

// function WithTemplate(template: string, hookId: string){
//     console.log('Rendering Template')
//     return function<T extends {new(...args: any[]): {name: string}}>(orginalConstructor: T){
//         return class extends orginalConstructor {
//             constructor(..._: any[]) {
//                 super();
//                 const hookEl = document.getElementById(hookId);
//                 // const p = new orginalConstructor();
//                 if (hookEl){
//                     hookEl.innerHTML = template;
//                     hookEl.querySelector('h1')!.textContent = this.name;
//                 }
//             }
//         }
//     }
// }

// @Logger('LOGGIN - PERSON')
// @WithTemplate('<h1>My Person Object</h1>', 'app')
// class Person {
//     name = 'Max';

//     constructor() {
//         console.log('Creating Person Object....')
//     }
// }

// const pers = new Person();
// console.log(pers);

// Property Decorator
function Log(target: any, propertyName: string | Symbol){
    console.log('Property decorator!');
    console.log(target, propertyName)
}

// Accessor Decorator
function Log2(target: any, name: string, descriptor: PropertyDescriptor){
    console.log('Accessor decorator');
    console.log(target);
    console.log(name);
    console.log(descriptor);
    return {};
}

// Method Decorator
function Log3(target: any, name: string | Symbol, descriptor: PropertyDescriptor) {
    console.log('Method decorator');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

// Parameter Decorator
function Log4(target: any, name: string | Symbol, position: number){  //number of the argument
    console.log('Parameter decorator');
    console.log(target);
    console.log(name);
    console.log(position);
}

class Product {
    @Log
    title: string = '';
    private _price: number = 0;

    @Log2
    set price(val: number){
        if(val > 0){
            this._price = val;
        } else {
            throw new Error('Invalid price - should be positive!');
        }
    }

    cconstructor(t: string, p: number){
        this.title = t;
        this._price = p;
    }

    @Log3
    getPriceithTax(@Log4 tax: number){
        return this._price * (1 + tax);
    }
}

// const p1 = new Product('Book', 19);
// const p2 = new Product('Book 2', 22)

function Autobind(_: any, __: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    const adjDescriptor: PropertyDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            const boundFn = originalMethod.bind(this);  // 우리가 정의한 객체를 this가 항상 참조할 것
            return boundFn;
        }
    };
    return adjDescriptor;
};


class Printer {
    message = 'This works.'

    @Autobind
    showMessage() {
        console.log(this.message)
    }
}

const p = new Printer();

const button = document.querySelector('button')!;
// button.addEventListener('click', p.showMessage.bind(p));  // bind showMessage to p
// // showMessage 대신 p 를 참조하여 다시 이 객체를 참조하도록 하는 것
button.addEventListener('click', p.showMessage)