function searchForVowels() {
  var vowels = 0;
  var searchInString = ['а', 'о', 'и', 'е', 'ё', 'э', 'ы', 'у', 'ю', 'я'];
  var x = prompt('Введите текст:');
  for (var i = 0; i < x.length; i++) {
    for (var j = 0; j < searchInString.length; j++) {
      if (x[i] === searchInString[j]) {
        ++vowels;
        break;
      }
    }
  }
  return vowels ? vowels : 'В вашем тексте не гласных букв';
}
console.log(searchForVowels());