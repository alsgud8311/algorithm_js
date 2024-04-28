function capitalizeWords(arr, idx = 0) {
  if (idx === arr.length) {
    return arr;
  }

  arr[idx] = arr[idx].toUpperCase();

  return capitalizeWords(arr, idx + 1);
}
