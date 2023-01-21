type TypeNumber = number; 

function add(n1: TypeNumber, n2: TypeNumber) : number {
    return n1 + n2;
}

function printResult(num: number){
    console.log('Result: ', num)
};

function addAndHandle(n1: number, n2: number, cb: (num: number) => void){
    const result = n1 + n2;
    cb(result);
}

let combineValues: Function;
// 혹은 let combineValues: (a:number, b:number) => number;
combineValues = add;

console.log(combineValues(8, 8));  //16

printResult(add(5, 12));

addAndHandle(10, 20, (result) => {
    console.log(result)  //30
})