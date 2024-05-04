function validAnagram(str1, str2) {
  //문자열에 소문자만 포함되어 있다고 가정
  // frequency Counter만들기
  let str1_counter = {};
  let str2_counter = {};

  for (let key of str1) {
    str1_counter[key] = (str1_counter[key] || 0) + 1;
  }
  for (let key of str2) {
    str2_counter[key] = (str2_counter[key] || 0) + 1;
  }

  for (let char in str1_counter) {
    if (str1_counter[char] !== str2_counter[char]) {
      return false;
    }
  }
  return true;
}

//solution
function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }
  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
    return true;
  }
}
