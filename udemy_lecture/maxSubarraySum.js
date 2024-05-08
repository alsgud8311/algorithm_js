// 정수의 배열과 숫자가 주어졌을 때, 함수에 전달된 숫자의 길이를 가진 하위 배열의 최대 합 구하기
function maxSubarraySum(arr, len) {
  if (arr.length < len) {
    return null;
  }
  let maxSum = 0;
  for (let i = 0; i < arr.length - len + 1; i++) {
    let sliced = arr.slice(i, i + len);
    console.log(sliced, len, arr);
    let sum = sliced.reduce((acc, cur) => {
      return acc + cur;
    }, 0);
    if (maxSum < sum) {
      maxSum = sum;
    }
  }
  return maxSum;
}
