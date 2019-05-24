const anClean = require('./task3')

describe('isPal function tests', () => {
  it('type of isPal', () => {
    expect(typeof anClean).toBe('function');
  });
  it('negative test type pf isPal', () => {
    expect(typeof anClean).not.toBe('string');
  });
  it('positive test input function', () => {
    const arr = ['воз', 'киборг', 'корсет', 'ЗОВ', 'гробик', 'костер', 'сектор'];
    expect(anClean(arr)).toEqual(['ЗОВ', 'гробик', 'сектор']);
  });
  it('negative function input test', () => {
    const arr2 = 'Воз';
    expect(anClean(arr2)).toEqual(['В', 'о', 'з']);
  });
});
