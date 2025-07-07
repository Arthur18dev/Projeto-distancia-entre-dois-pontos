var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let [x1, y1] = lines[0].split(" ");
let [x2, y2] = lines[1].split(" ");

x1 = parseFloat(x1);
y1 = parseFloat(y1);

x2 = parseFloat(x2);
y2 = parseFloat(y2);

let calculo = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

console.log(calculo.toFixed(4))