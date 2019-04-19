var image = {
  width: 100,
  height: 400,
  title: 'Cool image'
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

module.exports = image;
module.exports = isNumeric;
module.exports = multiplyNumeric;
