const tasksCompleted = require('./task1.js');
const maxName = require('./task1.js');

describe('task1 tests', () => {
  it('functional check', () => {
    expect(typeof tasksCompleted).toBe('object');
    expect(tasksCompleted["Serg"]).toBe(35);
  });
  it('checking equality of variables', () => {
    expect(maxName).toEqual({'Anna': 29, 'Anton': 99, 'Elena': 1, 'Serg': 35});
    expect(maxName === tasksCompleted).toBe(true);
  });
});
