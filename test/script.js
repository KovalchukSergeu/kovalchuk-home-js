function myFunc() {
  var array = ["a","b","c"];
  var output = "";
  for (var i in array) {
    output += i;
  }
  return output;
}

myFunc();