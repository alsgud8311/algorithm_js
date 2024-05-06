// 두 문자열을 받아 첫 번째 문자열의 문자가 두 번째 문자열의 일부에 포함되는지 확인
// 첫 번째 문자열의 문자가 순서가 바뀌지 않고 두 번째 문자열의 어딘가에 나타나는지 확인
function isSubsequence(str1, str2) {
  str1 = str1.split("");
  str2 = str2.split("");

  // 첫 번째 문자열(확인해야 할 문자열)의 인덱스 포인터
  let i = 0;
  // 두 번째 문자열(문자열을 확인해야 할 문자열)의 인덱스 포인터
  for (let j = 0; j < str2.length; j++) {
    if (str1[i] === str2[j]) {
      i++;
    }
  }

  if (i === str1.length) {
    return true;
  }
  return false;
}
