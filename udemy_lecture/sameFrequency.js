function sameFrequency(num1, num2) {
  function counter(num) {
    let changed = String(num).split("");
    let count = {};
    for (let key of changed) {
      count[key] ? count[key]++ : (count[key] = 1);
    }
    return count;
  }

  let n1 = counter(num1);
  let n2 = counter(num2);

  for (let key in n1) {
    if (n2[key] && n1[key] - n2[key] === 0) {
      n1[key] = n2[key];
    } else {
      return false;
    }
  }
  return true;
}
