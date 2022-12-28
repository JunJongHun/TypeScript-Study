"use strict";
// let count = 0;
// count += 1;
// // count = '도도'; //이러면 에러
// const message: string = "hello world";
// const done: boolean = true;
// const numbers: number[] = [1, 2, 3];
// const mesaage: string[] = ["hello", "world"];
// // mesaage.push(1); //숫자 안들어감
// let mightBeUndefined: string | undefined | number = undefined;
// mightBeUndefined = 1;
// mightBeUndefined = "sss";
// mightBeUndefined = undefined;
// let color: "red" | "orange" | "yellow" = "red";
// function sum(x: number, y: number): number | null {
//   if (x === 0 && y === 0) return null;
//   return x + y;
// }
// console.log(sum(0, 0));
// function sumArray(numbers: number[]): number {
//   return numbers.reduce((pre, cur, index, arr) => {
//     console.log(index, arr);
//     return pre + cur;
//   }, 0);
// }
// console.log(sumArray([1, 2, 3, 4]));
// interface Shape {
//   getArea(): number;
// }
// class Circle implements Shape {
//   constructor(public radius: number) {
//     this.radius = radius;
//   }
//   getArea(): number {
//     console.log("동그라미");
//     return this.radius * this.radius * Math.PI;
//   }
// }
// class Rectangle implements Shape {
//   constructor(private width: number, private height: number) {
//     this.width = width;
//     this.height = height;
//   }
//   getArea() {
//     console.log("직사각형");
//     return this.width * this.height;
//   }
// }
// const shapes: Shape[] = [new Circle(5), new Rectangle(10, 5)];
// shapes.forEach((shape) => console.log(shape.getArea()));
// interface Person {
//   name: string;
//   age?: number;
// }
// interface Developer {
//   name: string;
//   age?: number;
//   skills: string[];
// }
// interface Developer extends Person {
//   skills: string[];
// }
// const person: Person = {
//   name: "kim",
//   age: 14,
// };
// const expert: Developer = {
//   name: "Jun",
//   skills: ["react", "recoil"],
// };
// const people: Person[] = [person, expert];
// console.log(typeof person, typeof expert);
// type Person = {
//   name: string;
//   age?: number;
// };
// type Developer = Person & {
//   skills: string[];
// };
// const person: Person = {
//   name: "김사람",
// };
// const expert: Developer = {
//   name: "Jun",
//   age: 24,
//   skills: ["react", "recoil", "axios"],
// };
// type People = Person[];
// const people: People = [person, expert];
// // let color: "red" | "blue" = "red";
// type Color = "red" | "blue";
// const color: Color = "blue";
// const colors: Color[] = ["red", "blue"];
// function merge<A, B>(a: A, b: B): A & B {
//   return { ...a, ...b };
// }
// const merged = merge<string, string>("1", "1");
// console.log(merged);
// function wrap<T>(param: T): Object {
//   return {
//     param,
//   };
// }
// const wrapped = wrap(10);
// // console.log(wrapped);
// interface Items<T> {
//   list: T[];
// }
// type Items2<T> = {
//   list: T[];
// };
// const items: Items<string> = { list: ["s", "s", "c"] };
// const items2: Items<number> = { list: [1, 2, 3] };
class Queue {
    constructor() {
        this.list = [];
    }
    get length() {
        return this.list.length;
    }
    enqueue(item) {
        this.list.push(item);
    }
    dequeue() {
        return this.list.shift();
    }
}
const queue = new Queue();
queue.enqueue("1");
queue.enqueue("2");
queue.enqueue("3");
console.log(queue.list);
queue.dequeue();
queue.dequeue();
console.log(queue.list);
