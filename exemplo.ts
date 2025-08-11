import { Deque } from './deque';

const dq = new Deque<number>();
dq.pushBack(1);
dq.pushBack(2);
dq.pushFront(0); // deque: 0,1,2

console.log(dq.peekFront()); // 0
console.log(dq.peekBack());  // 2

console.log(dq.popFront()); // 0
console.log(dq.popBack());  // 2
console.log([...dq]);       // [1]
console.log(dq.size);       // 1
