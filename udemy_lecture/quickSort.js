//배열이 주어지면 요소를 피벗 포인트로 지정하여 배열 속 요소를 재배치하는 함수
function pivot(arr, sidx = 0, eidx = arr.length + 1) {
  // 배열의 두 위치를 바꾸기 위한 함수
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };
  let pivot = arr[sidx];
  let swapIdx = sidx;
  for (let i = sidx + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      // 스왑할 공간을 만들어주기 위해 옆으로 밀기
      swapIdx++;
      // 만든 공간에 있는 값과 i에 있는 값을 교환
      swap(arr, swapIdx, i);
    }
  }
  //스왑 인덱스와 피벗의 위치를 교환하여 피벗의 왼쪽에 작은수, 오른쪽에 큰 수만 오도록 만듦
  swap(arr, sidx, swapIdx);
  //스왑 인덱스를 리턴하여 나중에 왼쪽과 오른쪽을 어떤 인덱스 기준으로 구분할 지 알 수 있음
  return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  //하위배열이 작아질수록 왼쪽과 오른쪽은 가까워지고 하나의 요소만 남으면 왼쪽과 오른쪽이 같아지는 원리는 이용하여 바닥조건 설정
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    //왼쪽
    quickSort(arr, left, pivotIndex - 1);
    //오른쪽
    quickSort(arr, pivotIndex + 1, right);
  }
  console.log(arr);
  return arr;
}

// [1, 2, 3, 4, 5, 6, 7, 8];
quickSort([4, 8, 2, 1, 5, 7, 6, 3]);
