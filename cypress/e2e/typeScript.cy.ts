let number: number | string = 8;
let testSyring: string = "8";
const booleanTest: boolean = false;
const test1: any = NaN;

function string(a, b): number {
  return "a" + "b"; // 56 != 11
}

function string2(a: number, b: number): number {
  return +a + +b; // 11
}

function string3(): any {
  +a + +b;
}

type stringTestType = {
  lastName: string;
  firstName: string;
};

function fullName(fullName: stringTestType): void {
  console.log(
    "My full name is " + fullName.lastName + " " + fullName.firstName,
  );
}
