// Stack: LIFO
let stack = [];

const pushItem = (item) => stack.push(item);

const popItem = () => stack.pop();

// Queue: FIFO
// A queue data structure has two fundamental operations:
// 1. Enqueue - this operation is responsible for inserting or pushing a new element to the queue.
// 2. Dequeue - this operations is responsible for removing the oldest element from the queue.

let queueStack = [];
const enqueue = (item) => queueStack.push(item);

const dequeue = () => queueStack.shift();
