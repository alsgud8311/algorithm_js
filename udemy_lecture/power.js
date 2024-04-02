function power(a, b, result = a) {
  if (b === 0) {
    return 1;
  } else if (b === 1) {
    return result;
  } else {
    result *= a;
    return power(a, b - 1, result);
  }
}
