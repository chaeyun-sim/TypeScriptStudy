function func1(): string {
  return "hello"
}

function func2(): void {
  console.log("hello")
}

let a : void;
// a = 1      // X
// a = 'hi'   // X
// a = true   // X

a = undefined   // O