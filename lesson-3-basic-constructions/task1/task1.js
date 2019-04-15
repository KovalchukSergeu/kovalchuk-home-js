function searchForVowels() {
  var k = 0;
  var searchInString = ['а', 'о', 'и', 'е', 'ё', 'э', 'ы', 'у', 'ю', 'я'];
  var f = prompt('Введите текст:');
  for (var i = 0; i < f.length; i++) {
    for (var j = 0; j < searchInString.length; j++) {
      if (f[i] === searchInString[j]) {
        ++k;
        break;
      }
    }
  }
  return k ? k : 'Net sovpadenyi';
}
console.log(searchForVowels());