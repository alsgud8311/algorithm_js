// Run by Node.js
const readline = require("readline");

let n = 0;
let N;
let stock = [];
(async () => {
  let rl = readline.createInterface({ input: process.stdin });
  for await (const line of rl) {
    if (n === 0) {
      N = parseInt(line);
    } else if (n <= N) {
      let [stockNum, stockPrice] = line.split(" ").map(Number);
      let value = Math.floor(stockNum * stockPrice * 10) / 10;
      stock.push([n, value]);
    }
    n++;
    if (n > N) {
      solution();
      rl.close();
    }
  }

  process.exit();
})();

function solution() {
  stock.sort((a, b) => {
    return b[1] - a[1] || a[0] - b[0];
  });
  const result = stock.map((item) => item[0]).join(" ");
  console.log(result);
}
