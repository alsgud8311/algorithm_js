// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60
function productOfArray(array, result = 1) {
  if (array.length) {
    const arrayNum = array.pop();
    result *= parseInt(arrayNum);
    return productOfArray(array, result);
  } else {
    return result;
  }
}
