let anyVar : any = 10;
anyVar = 'hello'
anyVar = true;
anyVar = {};
anyVar = () => {};

anyVar.toUpperCase();
anyVar.toFixed()

let num: number = 10;
num = anyVar

let unknownVar : unknown;

if (typeof unknownVar === "number") {   // 타입 정제 / 타입 좁히기
	num = unknownVar;
}