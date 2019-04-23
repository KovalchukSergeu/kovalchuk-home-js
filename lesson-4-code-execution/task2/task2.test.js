const image = require('./task2.js');
const multiplyNumeric = require('./task2.js');

describe('task2 tests', () => {
  it('array check', () => {
    expect(imageheight).toBe(400);
    expect(image.title).toBe('Cool image');
  });
  it('checking function', () => {
    expect(multiplyNumeric({ width: 200, height: 500, title: 'Cool image' })).toBe({ width: 400, height: 1000, title: 'Cool image' });
    expect(typeof multiplyNumeric).toBe('object');
  });
});
