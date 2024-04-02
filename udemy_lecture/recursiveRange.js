// SAMPLE INPUT/OUTPUT

function recursiveRange(num, result = 0) {
  if (num === 0) {
    return result;
  } else {
    return recursiveRange(num - 1, result + num);
  }
}

// console.log(recursiveRange(6)); // 21
// console.log(recursiveRange(10)); // recursiveRange(10) // 55
