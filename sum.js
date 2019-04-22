function greet(firstName, lastName, language) {
  language = language || 'en';

  if (arguments.length === 0) {
    console.log('Missing arguments');
    console.log('-----------------------------------------');
    return;
  }
  console.log('first|Name', firstName);
  console.log('last|Name', lastName);
  console.log('language', language);
  console.log('arguments', arguments);
  console.log('arguments{0}', arguments[0]);
  console.log('-----------------------------------------');
}

greet();
greet('John');
greet('John', 'Doe');
greet('John', 'Doe', 'ru');