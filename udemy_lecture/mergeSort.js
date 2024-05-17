function mergeSort(arr) {
  // base Case
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  // 재귀적으로 호출하여 1개, 0개 요소만 남을 때까지 계속 분할
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  // merge 함수를 통해 쪼갠 것들을 리턴하도록 하면 재귀적으로 계속 합병된 배열들이 리턴되어 마지막엔 모두 정렬된 배열이 완성
  return merge(left, right);
}

function merge(arr1, arr2) {
  let results = [];
  // 두 개의 배열로 나뉜 것들을 합병하기 때문에 포인터를 각각 한 개씩 둠
  let i = 0;
  let j = 0;
  // 두 배열을 보면서 각 위치에서 비교하고 더 작은 수를 찾아 순서대로 넣는 방식
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  // 첫번째 루프문이 끝나고 남은 배열이 남았을 때 남은 배열들은 정렬이 되어있기 때문에 그대로 하나씩 뺴서 넣음
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  return results;
}
//[1,  2, 10, 14, 50, 99, 100]
mergeSort([1, 10, 50, 2, 14, 99, 100]);
