const stack = require("../src/stack");

test("Peek on empty stack returns undefined", () => {
  expect(stack.peek()).toBeUndefined();
});

test("Peek on stack with one element returns that element", () => {
  stack.push(1);
  expect(stack.peek()).toBeDefined();
  expect(stack.peek()).toBe(1);
});

test("Peek on stack with two or more elements returns the top element", () => {
  stack.push(1);
  stack.push("row");
  stack.push(42);
  expect(stack.peek()).toBeDefined();
  expect(stack.peek()).toBe(42);
});
