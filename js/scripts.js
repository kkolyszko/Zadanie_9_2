var femaleNames = ['Asia', 'Kasia', 'Ola', 'Sylwia', 'Ania'];
var maleNames = ['Zenek', 'Włodek', 'Kazek', 'Zbych'];
var allNames = femaleNames.concat(maleNames);

var newName = 'Marian';

if (allNames.indexOf(newName) === -1) {
  allNames.push(newName);
}

console.log(allNames);