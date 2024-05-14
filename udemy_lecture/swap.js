//ES5 => temp라는 변수에 따로 idx1의 값을 저장해두고 바꾸는 방식
function swap(arr, idx1, idx2) {
  var temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

//ES6 => syntax를 통해 서로의 값을 교환하는 방법
const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};
