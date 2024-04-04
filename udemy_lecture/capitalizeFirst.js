function capitalizeFirst(arr, index = 0) {
  if (index === arr.length) return arr;
  arr[index] = arr[index].substr(0, 1).toUpperCase() + arr[index].slice(1);
  return capitalizeFirst(arr, index + 1);
}

// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']
