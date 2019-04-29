function interviewQuestion(job) {
  var data;
  return function(name) {
    if (job === 'designer') {
      data = name + ' ' + 'can you please explain what UX design is?';
    } else if (job === 'teacher') {
      data = 'What subject do you teach' + ' ' + name + '?';
    } else {
      data = 'Hello' + ' ' + name + ', what do you do?';
    }
    return data;
  };
}

alert(interviewQuestion('teacher')('John'));
alert(interviewQuestion('designer')('Mike'));
alert(interviewQuestion('rider')('Bobby'));

module.exports = interviewQuestion;
