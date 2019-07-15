const john = require('./script');

describe('array', () => {
  it('type of john', () => {
    expect(typeof john).toBe('object');
  });
  it('length to score', () => {
    expect(john.score.length).toBe(5);
  });
  it('negative test of length to score', () => {
    expect(john.score.length).not.toBe(6);
  });
  it('type of calculateTips', () => {
    expect(typeof john.calculateTips).toBe('function');
  });
  it('negative test of type of calculateTips', () => {
    expect(typeof john.calculateTips).not.toBe('number');
  });
  it('negative test type of john', () => {
    expect(typeof john).not.toBe('string');
  });
});
