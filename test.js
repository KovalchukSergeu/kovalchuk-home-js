var john = {
  mass: 62,
  height: 180
};
var mike = {
  mass: 69,
  height: 190
};
var bmi;

function countBMI(obj) {
  for (var key in obj) {
    if (isNumeric(obj[key])) {
      obj[key] += obj[key];
    }
  }
}

if (countBMI(john) > countBMI(mike)) {
  console.log('BMI John more');
} else if (countBMI(john) < countBMI(mike)) {
  console.log('BMI Mike more');
} else {
  console.log('BMI are equal');
}