var _ = require("underscore");

let stack = [];

// Adds an element on top of the stack
exports.push = (x) => {
  stack.push(x);
};

/**
 * Returns the top most element of the stack
 * and removes it.
 */
exports.pop = () => {
  return stack.pop();
};

// Returns the top most element of the stack
exports.peek = () => {
  return stack[0];
};
