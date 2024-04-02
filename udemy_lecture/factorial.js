//factorial(1) // 1
// factorial(2) // 2
// factorial(4) // 24
// factorial(7) // 5040

function factorial(a, result = 1) {
  if (a === 0) {
    return 1;
  } else if (a === 1) {
    return result;
  } else {
    return factorial(a - 1, (result *= a));
  }
}
