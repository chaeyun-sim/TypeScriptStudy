// unknown : 전체 집합

function unknownExam() {

  // 업캐스팅
  let a : unknown = 1;
  let b : unknown = 'hello';
  let c : unknown = true;
  let d : unknown = undefined;
  let e : unknown = null;

  // 다운캐스팅
  let unknownVar : unknown;
  // let num : number = unknownVar
  // let str : string = unknownVar

}

function neverExam() {
  function neverFunc() : never {
    while(true) {};
  }

  let num: number = neverFunc();
  let str: string = neverFunc();

  // let never1: never = 10;
  // let never2: never = 'string'
}

function voidExam() {
  function voidFunc() : void {
    console.log('hi')
    return undefined;
  }
}

function anyExam() {
  let unknownVar : unknown;
  let anyVar: any;
  let unde = undefined;

  anyVar = unknownVar;
  unde = anyVar;
}