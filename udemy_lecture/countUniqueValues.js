function countUniqueValues(arr) {
  if (arr.length <= 1) {
    return 0;
  }
  let i = 0;
  let j = 0;
  while (j < arr.length) {
    j++;
    if (arr[j] !== arr[i]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i;
}
