var numStr;
var numStb;

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

do {
  numStr = prompt('Введите  ширину:', '');
} while (!isNumeric(numStr));
do {
  numStb = prompt('Введите  высоту:', '');
} while (!isNumeric(numStb));

var size = 8,
  board = '';

for (var y = 0; y < numStb; y++) {
  for (var x = 0; x < numStr; x++) {
    if ((x + y) % 2 === 0) {
      board += ' ';
    } else {
      board += '#';
    }
  }
  board += '\n';
}

console.log(board);
