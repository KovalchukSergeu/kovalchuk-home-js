const sum = require("./task1.js");
const sub = require("./task1.js");
const mult = require("./task1.js");
const div = require("./task1.js");

describe('MakeMomentJSGreatAgain', () => {
  it('обрабатывает сумму', () => {
    expect(sum(1, 2)).toBe(3);
  });
  it('обрабатывает вычитание', () => {
    expect(sub(4, 3)).toEqual(1);
  });
  it('обрабатывает умножение', () => {
    expect(mult(3, 4)).toEqual(12);
  });
  it('обрабатывает деление', () => {
    expect(div(8, 4)).toEqual(2);
  });
});