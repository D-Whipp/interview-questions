console.log('1'); // logs FIRST

setTimeout(() => {
    console.log('2'); // logs THIRD
}, 10);

console.log('3'); // logs SECOND

// The Stack is logged first followed by the Events
// The Event Queue is responsible for sending new
// functions to the Stack for processing.
