//
// This is a stub file for the 'Hello World' exercise. It's been provided as a
// convenience to get you started writing code faster.
// Make sure to look at hello-world.spec.js--that should give you some hints about what is
// expected here.

// New ES6 Way

// class HelloWorld {
//   hello(input) {
//     return `Hello, ${input || 'World'}`
//   }
// }
// let echo = new HelloWorld;
// console.log(echo.hello('Meowkins')); // Hello, Meowkins

// Old Pre-ES6 Way
function HelloWorld() {
  if (!(this instanceof HelloWorld)) {
    throw new Error('Cannot call a class as a function');
  }
}
HelloWorld.prototype.hello = (input) => `Hello, ${input || 'World'}`;

// const herro = new HelloWorld;
// console.log(herro.hello('')); // Hello, World
// console.log(herro.hello()); // Hello, World
// console.log(herro.hello('James')); // Hello, James

module.exports = HelloWorld;


// function hello(input) {
//   return `Hello, ${input || 'World'}`;
// }
// hello(); // Hello, world!
// hello('James'); // Hello, James!
