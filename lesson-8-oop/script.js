(function() {
  function Question(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
  }

  Question.prototype.displayQuestion = function() {
    console.log(this.question);

    for (var i = 0; i < this.answers.length; i++) {
      console.log(i + ': ' + this.answers[i]);
    }
  };

  Question.prototype.checkAnswer = function(ans) {
    if (ans === this.correct) {
      console.log('Верный ответ!');

    } else {
      console.log('Неверный ответ.')
    }
  };

  var q1 = new Question('Свойства обьекта похожи на переменные; методы похожи на?',
    ['Функции', 'Свойства', 'Условия', 'Операторы'],
    0);

  var q2 = new Question('Что будет в результате, после попытки сослаться на элемент массива, который не существует?',
    ['false', 'null', 'undefined', '0'],
    2);

  var q3 = new Question('Массив имеет свойство "length" потому что это?',
    ['Функция', 'переменная', 'обьект', 'хэш'],
    2);

  var questions = [q1, q2, q3];
  var n = Math.floor(Math.random() * questions.length);

  questions[n].displayQuestion();

  var answer = parseInt(prompt('Пожалуйста, выберите правильный ответ.'));

  questions[n].checkAnswer(answer);
})();
