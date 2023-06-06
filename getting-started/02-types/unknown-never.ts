let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max';

if (typeof userInput === 'string'){
    userName = userInput;
}

function generateError(message: string, code: number) : never {  // 아무것도 반환하지 않는다. - 기본적으로 값을 생성하지 않음(try catch 쓰면 충돌때문에 에러남) - 이 함수의 type은 never
    throw {message: message, errorCode: code};
}

generateError('An error occurred!', 500)