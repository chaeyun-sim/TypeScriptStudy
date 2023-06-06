type CombineType = number | string;
type ConversionType = 'as-number' | 'as-text';

function combine(input1: CombineType, input2: CombineType, resultConversion: ConversionType){
    // 타입을 any 혹은 number | string 이라고 적으면 어떤 타입도 작성이 가능하다.
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number'){
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
    // if(resultConversion === 'as-number'){  // converting 
    //     // return parseFloat(result);
    //     return +result;
    // } else {
    //     return result.toString();
    // }
};

const combinedAges = combine(30, 26, 'as-number');   //56
console.log(combinedAges);

const combinedStringAges = combine('30', '26', 'as-number');   //3026
console.log(combinedStringAges);

const combineNames = combine('Max', 'Anna', 'as-text');  //MaxAnna
console.log(combineNames)