// function bubbleSort(arr) {
//   const swap = (arr, idx1, idx2) => {
//     [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
//   };
//   // 맨 뒤는 하나씩 무조건 정렬되기 때문에 정렬 횟수를 줄이기
//   for (let i = arr.length; i > 0; i--) {
//     //i-1까지 반복시키면서 불필요한 초과정렬연산 막기
//     for (let j = 0; j < i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         //ES6방식의 swap
//         swap(arr, j, j + 1);
//       }
//     }
//   }
//   return arr;
// }
// // 정렬이 돼 있음에도 7!의 정렬을 한다
// console.log(bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]));

function bubbleSort(arr) {
  //breakpoint 선언
  let noSwaps;
  // 맨 뒤는 하나씩 무조건 정렬되기 때문에 정렬 횟수를 줄이기
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    //i-1까지 반복시키면서 불필요한 초과정렬연산 막기
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        //ES5방식의 swap
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        //swap이 이루어졌으므로 false로 바꾸기
        noSwaps = false;
      }
    }
    //한 번도 교환이 없었다 = 더이상 정렬할 것이 없음
    //한 번도 교환이 이루어지지 않았으면 true값으로 유지되기 때문에 바로 break를 통해 빠져나감
    if (noSwaps) break;
  }
  return arr;
}

console.log(bubbleSort([-8, 1, 2, 3, 4, 5, 6, 7]));
