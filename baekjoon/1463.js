const input = parseInt(require("fs").readFileSync("/dev/stdin"));
const dp = new Array(input + 1).fill(0);

for (let i = 2; i <= input; i++) {
  dp[i] = dp[i - 1] + 1;
  if (i % 2 === 0) dp[i] = Math.min(dp[i], dp[i / 2] + 1);
  if (i % 3 === 0) dp[i] = Math.min(dp[i], dp[i / 3] + 1);
}

console.log(dp[input]);

// const input = parseInt(require("fs").readFileSync("/dev/stdin"));
// if (input <= 2) {
//   console.log(input - 1);
//   return;
// }
// let oper = Array.from(Array(input), () => new Array(3).fill(0));
// oper[0][0] = input;
// oper[0][1] = input;
// oper[0][2] = input;

// if (oper[0][0] % 3 === 0) {
//   oper[1][0] = oper[0][0] / 3;
// } else {
//   oper[1][0] = oper[0][0];
// }
// if (oper[0][1] % 2 === 0) {
//   oper[1][1] = oper[0][1] / 2;
// } else {
//   oper[1][1] = oper[0][1];
// }
// oper[1][2] = oper[0][2] - 1;
// if (oper[1].includes(1)) {
//   console.log(1);
//   return;
// }

// for (let i = 2; i < input; i++) {
//   for (let j = 0; j < 3; j++) {
//     if (oper[i - 1][j] % 3 === 0) {
//       oper[i][j] = oper[i - 1][j] / 3;
//     } else if (oper[i - 1][j] % 2 === 0) {
//       oper[i][j] = oper[i - 1][j] / 2;
//     } else {
//       oper[i][j] = oper[i - 1][j] - 1;
//     }
//   }
//   if (oper[i].includes(1)) {
//     console.log(i);
//     break;
//   }
// }
