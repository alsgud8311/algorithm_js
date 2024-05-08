// 모든 고유 문자가 포함된 가장 긴 하위 문자열의 길이를 반환
function findLongestSubstring(str) {
  // 슬라이딩 윈도우 -> 제일 큰 윈도우부터 하나씩 내려가면서 체크하기?
  for (let i = str.length - 1; i > 0; i--) {
    console.log(i);
    for (let j = 0; j < str.length - i + 1; j++) {
      const sliced = str.slice(j, j + i);
      const set = new Set(sliced.split(""));
      console.log(set, sliced.length, set.size);
      if (set.size === sliced.length) {
        return i;
      }
    }
  }
  return 0;
}
