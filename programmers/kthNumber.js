function solution(array, commands) {
  var answer = [];
  for (let i = 0; i < commands.length; i++) {
    var [start, end, key] = commands[i];
    let sliced;
    if (start === end) {
      answer.push(array[start - 1]);
    } else {
      sliced = array.slice(start - 1, end + 1);
      sliced.sort((a, b) => a - b);
      answer.push(sliced[key - 1]);
    }
  }
  return answer;
}

function solution(array, commands) {
  return commands.map((command) => {
    const [sPosition, ePosition, position] = command;
    const newArray = array
      .filter(
        (value, fIndex) => fIndex >= sPosition - 1 && fIndex <= ePosition - 1
      )
      .sort((a, b) => a - b);

    return newArray[position - 1];
  });
}
