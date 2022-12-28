"use strict";
let count = 0;
count += 1;
// count = '도도'; //이러면 에러
const message = "hello world";
const done = true;
const numbers = [1, 2, 3];
const mesaage = ["hello", "world"];
// mesaage.push(1); //숫자 안들어감
let mightBeUndefined = undefined;
mightBeUndefined = 1;
mightBeUndefined = "sss";
mightBeUndefined = undefined;
let color = "red";
function sum(x, y) {
    if (x === 0 && y === 0)
        return null;
    return x + y;
}
console.log(sum(0, 0));
function sumArray(numbers) {
    return numbers.reduce((pre, cur, index, arr) => {
        console.log(index, arr);
        return pre + cur;
    }, 0);
}
console.log(sumArray([1, 2, 3, 4]));
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    getArea() {
        console.log("동그라미");
        return this.radius * this.radius * Math.PI;
    }
}
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        console.log("직사각형");
        return this.width * this.height;
    }
}
const shapes = [new Circle(5), new Rectangle(10, 5)];
shapes.forEach((shape) => console.log(shape.getArea()));
