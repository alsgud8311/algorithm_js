// let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

// const N = parseInt(input.shift());
// let friends = [];
// for (let i = 0; i < N; i++) {
//   friends.push(input[i].split(""));
// }

// let result = [];

// for (let j = 0; j < friends.length; j++) {
//   let count = 0;
//   let ystack = [];

//   for (let k = 0; k < friends[j].length; k++) {
//     if (j !== k && friends[j][k] === "Y") {
//       ystack.push(k);
//       count++;
//     }
//   }

//   for (let k = 0; k < friends.length; k++) {
//     if (j !== k && friends[k][j] === "N") {
//       for (let y in ystack) {
//         if (friends[k][y] === "Y") {
//           count++;
//         }
//       }
//     }
//   }

//   result.push(count);
// }

// console.log(Math.max(...result));

let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const N = parseInt(input.shift());

let friends = [];
for (let i = 0; i < N; i++) {
  friends.push(input[i].split(""));
}

let connect = Array.from(new Array(N), (_) => new Array(N).fill(0));
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    for (let l = 0; l < N; l++) {
      if (
        i !== j &&
        (friends[i][j] === "Y" ||
          (friends[i][l] === "Y" && friends[l][j] == "Y"))
      ) {
        connect[i][j] = 1;
      }
    }
  }
}

let answer = 0;
for (let i = 0; i < N; i++) {
  let count = connect[i].reduce((acc, val) => acc + val, 0);
  answer = Math.max(answer, count);
}

console.log(answer);
