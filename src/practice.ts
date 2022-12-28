let count = 0;
count += 1;
// count = '도도'; //이러면 에러

const message: string = "hello world";
const done: boolean = true;
const numbers: number[] = [1, 2, 3];
const mesaage: string[] = ["hello", "world"];

// mesaage.push(1); //숫자 안들어감

let mightBeUndefined: string | undefined | number = undefined;

mightBeUndefined = 1;
mightBeUndefined = "sss";
mightBeUndefined = undefined;

let color: "red" | "orange" | "yellow" = "red";

function sum(x: number, y: number): number | null {
  if (x === 0 && y === 0) return null;

  return x + y;
}

console.log(sum(0, 0));

function sumArray(numbers: number[]): number {
  return numbers.reduce((pre, cur, index, arr) => {
    console.log(index, arr);
    return pre + cur;
  }, 0);
}

console.log(sumArray([1, 2, 3, 4]));

interface Shape {
  getArea(): number;
}

class Circle implements Shape {
  constructor(public radius: number) {
    this.radius = radius;
  }

  getArea(): number {
    console.log("동그라미");
    return this.radius * this.radius * Math.PI;
  }
}
class Rectangle implements Shape {
  constructor(private width: number, private height: number) {
    this.width = width;
    this.height = height;
  }
  getArea() {
    console.log("직사각형");
    return this.width * this.height;
  }
}

const shapes: Shape[] = [new Circle(5), new Rectangle(10, 5)];

shapes.forEach((shape) => console.log(shape.getArea()));
