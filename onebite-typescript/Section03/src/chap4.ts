// 합집합

let a : string | number;
a = 'hello'
a = 1


let arr : (number | string | boolean)[] = [1, 'hello', true];

type Dog = {
  name: string;
  color: string;
}

type Person = {
  name: string;
  lang: string;
}

type Union1 = Dog | Person;

let union1 : Union1 = {
  name: 'hello',
  lang: 'english',
  color: 'yellow'
}



// 교집합 타입

type Intersection = Dog & Person;

let intersection : Intersection = {
  name: '',
  color: '',
  lang: ''
}