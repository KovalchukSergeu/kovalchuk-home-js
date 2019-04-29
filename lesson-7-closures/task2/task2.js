function interviewQuestion(job) {
  var date;
  return function(name) {
    if (job === 'designer') {
      date = name + ' ' + 'can you please explain what UX design is?';
    } else if (job === 'teacher') {
      date = 'What subject do you teach' + ' ' + name + '?';
    } else {
      date = 'Hello' + ' ' + name + ', what do you do?';
    }
    return date;
  };
}

alert(interviewQuestion('teacher')('John'));
alert(interviewQuestion('designer')('Mike'));
alert(interviewQuestion('rider')('Bobby'));

module.exports = interviewQuestion;
