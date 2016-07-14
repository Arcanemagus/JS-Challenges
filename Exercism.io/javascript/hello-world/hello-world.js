//
// This is a stub file for the 'Hello World' exercise. It's been provided as a
// convenience to get you started writing code faster.
// Make sure to look at hello-world.spec.js--that should give you some hints about what is
// expected here.

// New ES6 Way

class HelloWorld {
  hello(input) {
    return `Hello, ${input || 'World'}!`;
  }
}
const helloworld = new HelloWorld;
console.log(helloworld.hello());
module.exports = HelloWorld;
