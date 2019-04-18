var tasksCompleted = {
  'Anna': 29,
  'Serg': 35,
  'Elena': 1,
  'Anton': 99
};



function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function multiplyNumeric(obj) {
  for (var key in obj) {
    if (isNumeric(obj[key])) {
      obj[key] *= 2;
    }
  }
}

multiplyNumeric(image);

alert( 'menu width=' + image.width + ' height=' + image.height + ' title=' + image.title );