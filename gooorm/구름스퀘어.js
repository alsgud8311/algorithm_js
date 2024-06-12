const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let n = 0;

rl.on("line", (line) => {
  if (n === 0) {
    n = parseInt(line.trim());
  } else {
    input.push(line.trim().split(" ").map(Number));
  }
  if (input.length === n) {
    rl.close();
  }
});
rl.on("close", () => {
  let times = input;
  let count = 0;
  let last = 0;
  //행사가 빨리 끝나는 순으로 정렬하기
  times.sort((a, b) => a[1] - b[1]);
  times.forEach(([s, e]) => {
    if (last < s) {
      count += 1;
      last = e;
    }
  });
  console.log(count);
  process.exit();
});
