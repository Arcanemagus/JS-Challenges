//
// This is a stub file for the 'Hello World' exercise. It's been provided as a
// convenience to get you started writing code faster.
// Make sure to look at hello-world.spec.js--that should give you some hints about what is
// expected here.

var HelloWorld = function(name) {};

HelloWorld.prototype.hello = function(input) {
  let output = '';
  if (name === '') {
    output = 'world';
  }
  output = input;
  return `Hello, ${output}!`;
};

module.exports = HelloWorld;
