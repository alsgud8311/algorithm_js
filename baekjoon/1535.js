const input = require("fs").readFileSync("./inputs.txt").toString().split("\n");
const count = parseInt(input[0]);
const L = input[1].split(" ").map(Number);
const J = input[2].split(" ").map(Number);

console.log(count);
console.log(L);
console.log(J);
