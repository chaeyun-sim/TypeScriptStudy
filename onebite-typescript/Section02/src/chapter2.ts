// 배열
let numArr : number[] = [1, 2, 3];

let strArr : string[] = ['hello', 'hello', 'hello']

let boolArr : Array<boolean> = [true, false, true]

// 배열에 들어가는 요소들의 타입이 다양하다면
let multiArr : (string | number)[] = [1, 'hello', 10]

// 다차원배열의 타입을 정의하는 방법 (2차원 / 3차원)
let doubleArr : number[][] = [
  [1, 2, 3],
  [4, 5]
]

// 튜플 (타입스크립트에서만 있다)
// 길이와 타입이 고정된 배열
let tup1: [number, number] = [1, 2]
let tup2: [number, string, boolean] = [1, "2", true]
// 배열 메소드를 사용하면 튜플에 길이제한이 발생하지 않아 push와 pop이 가능하다 (자바스크립트의 배열이라고 생각하니까)

// 아래와 같이 바뀌면 안되는 규칙이나 패턴이 있을때 유용하다 (첫번째는 이름-string, 두번째는 아이디-number)
const users : [string, number][] = [
  ['mike', 1],
  ['tom', 2],
  ['jane', 3],
  ['david', 4]
]
// 배열을 사용할 때 인덱스의 위치따라 넣어야하는 값이 정해져있고 그 순서를 지키는 것이 중요할 때 튜플 타입을 사용해서 값을 잘못 넣지 않도록 방지한다.