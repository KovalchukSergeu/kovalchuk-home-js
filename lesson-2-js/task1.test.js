// const sum = require("./task1.js");
// const sub = require("./task1.js");
// const mult = require("./task1.js");
// const div = require("./task1.js");
//
// describe('MakeMomentJSGreatAgain', () => {
//   it('обрабатывает сумму', () => {
//     expect(sum(1, 2)).toBe(3);
//   });
//   it('обрабатывает вычитание', () => {
//     expect(sub(4, 3)).toEqual(1);
//   });
//   it('обрабатывает умножение', () => {
//     expect(mult(3, 4)).toEqual(12);
//   });
//   it('обрабатывает деление', () => {
//     expect(div(8, 4)).toEqual(2);
//   });
//   it('check type of number', () => {
//     expect(typeof 2).toBe('number');
//   });
// });

// const n = require('./task1');
// const str = require('./task1');
// const checked = require('./task1');
// const age = require('./task1');
// const x = require('./task1');
// const name = require('./task1');

var n = 5, str = 'Увася', checked = true, age = null, x = undefined, name = { user: 'Увася'};

describe('MakeMomentJSGreatAgain', () => {
  it('check type of number', () => {
    expect(typeof n).toBe('number');
  });
  it('check type of string', () => {
    expect(typeof str).toBe('string');
  });
  it('check type of boolean', () => {
    expect(typeof checked).toBe('boolean');
  });
  it('check type of null', () => {
    expect(age).toBeNull();
    expect(age).not.toBeUndefined();
    expect(typeof age).toBe('object');
  });
  it('check type of undefined', () => {
    expect(x).toBeUndefined();
    expect(x).not.toBeNull();
  });
  it('check type of object', () => {
    expect(typeof name).toBe('object');
  });
});