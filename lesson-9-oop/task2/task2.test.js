const isPal = require('./task2')

describe('isPal function tests', () => {
  it('type of isPal', () => {
    expect(typeof isPal).toBe('function');
  });
  it('negative test type pf isPal', () => {
    expect(typeof isPal).not.toBe('string');
  });
  it('negative function input test', () => {
    expect(isPal('Вася')).toBeFalsy();
  });
  it('positive test input function', () => {
    expect(isPal('anna')).toBeTruthy();
  });
  it('positive test of the input data of the function with a capital letter', () => {
    expect(isPal('Anna')).toBeTruthy();
  });
});
