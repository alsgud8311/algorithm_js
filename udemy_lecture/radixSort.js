function getDigit(num, place) {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

function digitCount(num) {
  if (num === 0) return 1;
  //들어오는 값에 대해 10의 제곱근을 구하고 1을 더함
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(arr) {
  let maxDigits = 0;
  for (let i = 0; i < arr.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(arr[i]));
  }
  return maxDigits;
}

function radixSort(arr) {
  let maxLoop = mostDigits(arr);
  for (let i = 0; i < maxLoop; i++) {
    let bucket = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < arr.length; j++) {
      let place = getDigit(arr[j], i);
      bucket[place].push(arr[j]);
    }
    arr = [].concat(...bucket);
  }
}

radixSort([124, 1561, 125563, 1251, 2124, 1151, 2, 3, 65, 316]);
