var person = {
  firstName: 'John',
  lastName: 'Doe',
  getFullName: function () {
    var fullName = this.firstName + ' ' + this.lastName;
    return fullName;
  }
};

var logName = function (lang1, lang2) {
  console.log('Logged: ', this.getFullName());
  console.log('Arguments: ', lang1 + ' ' + lang2);
  console.log('----------------------------------');
};

var logPersonName = logName.bind(person, 'es');
logPersonName('en');

logName.call(person, 'en', 'es');
logName.apply(person, ['en', 'es']);

(function (lang1, lang2) {
  console.log('Logged: ', this.getFullName());
  console.log('Arguments: ', lang1 + ' ' + lang2);
  console.log('----------------------------------');
}).apply(person, ['en', 'es']);

var person2 = {
  firstName: 'Jane',
  lastName: 'Doe'
};

console.log(person.getFullName.apply(person2));