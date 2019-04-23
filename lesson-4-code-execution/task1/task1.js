"use strict";
var tasksCompleted = {
  'Anna': 29,
  'Serg': 35,
  'Elena': 1,
  'Anton': 99
};
var max = 0;
var maxName = '';
for (var name in tasksCompleted) {
  if (max < tasksCompleted[name]) {
    max = tasksCompleted[name];
    maxName = name;
  }
}

alert( maxName || 'нет сотрудников' );

module.exports = tasksCompleted;
