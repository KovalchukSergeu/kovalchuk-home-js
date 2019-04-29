let interviewQuestion = require('./task2');

describe('array', () => {
  it('type of interviewQuestion', () => {
    expect(typeof interviewQuestion).toBe('function');
  });
  it('negative test of type of interviewQuestion', () => {
    expect(typeof interviewQuestion).not.toBe('number');
  });
  it('correct conditions', () => {
    expect(interviewQuestion('designer')('John')).toBe('John can you please explain what UX design is?');
  });
  it('negative condition', () => {
    expect(interviewQuestion('builder')('John')).toBe('Hello John, what do you do?');
  });
  it('negative condition', () => {
    expect(interviewQuestion(2)('John')).toBe('Hello John, what do you do?');
  });
});
