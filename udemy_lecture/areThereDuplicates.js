function areThereDuplicates() {
  let counter = {};
  for (let key in arguments) {
    let value = arguments[key];
    if (counter[value]) {
      return true;
    } else {
      counter[value] = 1;
    }
  }
  return false;
}

function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}
