// 투포인터를 활용하여 쌍의 평균이 목표 평균과 같은 값의 쌍을 확인
function averagePair(arr, avg) {
  let i = 0;
  let j = 1;
  while (j < arr.length) {
    // 평균과 일치할 때는 true 리턴
    if ((arr[i] + arr[j]) / 2 === avg) {
      return true;
    } //평균보다 작을 때 => i가 움직일 수 있으면 i부터 오른쪽으로
    else if ((arr[i] + arr[j]) / 2 < avg && j - i > 1) {
      i++;
    } // j를 움직일 수 있으면 j를 오른쪽으로
    else {
      j++;
    }
  }
  return false;
}
