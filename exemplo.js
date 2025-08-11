"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const deque_1 = require("./deque");
const dq = new deque_1.Deque();
dq.pushBack(1);
dq.pushBack(2);
dq.pushFront(0); // deque: 0,1,2
console.log(dq.peekFront()); // 0
console.log(dq.peekBack()); // 2
console.log(dq.popFront()); // 0
console.log(dq.popBack()); // 2
console.log([...dq]); // [1]
console.log(dq.size); // 1
