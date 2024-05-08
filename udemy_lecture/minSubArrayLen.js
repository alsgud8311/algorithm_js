//합이 함수에 전달된 정수보다 크거나 같은 인접한 하위 배열의 최소 길이 반환
//값의 없는 경우 0 반환
function minSubArrayLen(arr, minSum) {
  if (arr.length < 2 && arr[0] < minSum) {
    return 0;
  } else if (arr.length < 2 && arr[0] > minSum) {
    return 1;
  }
  //슬라이딩 윈도우 크기
  for (let i = 1; i < arr.length; i++) {
    //슬라이딩 윈도우 움직이기
    for (let j = 0; j < arr.length - i + 1; j++) {
      let sliced = arr.slice(j, i + j);
      let sum = sliced.reduce((acc, cur) => {
        return acc + cur;
      }, 0);
      if (sum >= minSum) {
        return i;
      }
    }
  }
  return 0;
}
