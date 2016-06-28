const HelloWorld = require('./hello-world');

describe('Hello World', () => {
  const helloWorld = new HelloWorld();

  it('says hello world with no name', () => {
    expect(helloWorld.hello('')).toBe('Hello, World!');
  });

  it('says hello to bob', () => {
    expect(helloWorld.hello('Bob')).toBe('Hello, Bob!');
  });

  it('says hello to sally', () => {
    expect(helloWorld.hello('Sally')).toBe('Hello, Sally!');
  });
});
