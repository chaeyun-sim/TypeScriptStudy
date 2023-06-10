type Animal = {
  name: string;
  color: string;
}

type Dog = {
  name: string;
  color: string;
  breed: string;
}

let animal : Animal = {
  name: '기린',
  color: 'yellow',
}

let dog : Dog = {
  name: 'doldol',
  color: 'brown',
  breed: 'jindo'
}

animal = dog
// dog = animal




type Book = {
  name: string;
  price: number;
}

type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
}

let book : Book;
let programming: ProgrammingBook = {
  name: '한입',
  price: 33000,
  skill: 'reactjs'
};

book = programming;
// programming = book;