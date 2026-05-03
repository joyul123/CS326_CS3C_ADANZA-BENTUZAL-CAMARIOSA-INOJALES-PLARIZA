const { add, subtract, multiply, divide } = require('./calculator');

test('adds 2 + 3 = 5', () => {
  expect(add(2, 3)).toBe(5);
});

test('subtract 5 - 3 = 2', () => {
  expect(subtract(5, 3)).toBe(2);
});

test('multiply 4 * 2 = 8', () => {
  expect(multiply(4, 2)).toBe(8);
});

test('divide 10 / 2 = 5', () => {
  expect(divide(10, 2)).toBe(5);
});

test('division by zero throws error', () => {
  expect(() => divide(5, 0)).toThrow("Cannot divide by zero");
});