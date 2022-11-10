const cloneArray = require('./cloneArray.js');

test('properly clones an array', () => {
  const arr = [1, 2, 3];
  expect(
    cloneArray(arr)
  ).toEqual(arr);
});