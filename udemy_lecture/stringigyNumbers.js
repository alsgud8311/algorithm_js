function stringifyNumbers(obj) {
  var newObj = {}; // 새로운 객체 생성

  for (var key in obj) {
    if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      // 객체일 경우, 배열이 아닌 경우에만 재귀 호출하여 새로운 객체에 추가
      newObj[key] = stringifyNumbers(obj[key]); // 재귀 호출하여 객체의 속성 순회
    } else if (typeof obj[key] === "number") {
      // 숫자 값을 문자열로 변환하여 새로운 객체에 추가
      newObj[key] = String(obj[key]);
    } else {
      // 숫자나 객체가 아닌 다른 유형의 값은 그대로 새로운 객체에 추가
      newObj[key] = obj[key];
    }
  }

  return newObj; // 새로운 객체 반환
}
