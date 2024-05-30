// 배열을 이용한 방식 1
var stack = [];
stack.push("stack1");
stack.push("stack2");
stack.push("stack3");
stack.pop();
stack.pop();
stack.pop();

// 배열을 이용한 방식 2 => 방향만 바뀜.
// 앞에서 제거 및 추가하는 경우 인덱스를 계속 밀고 당겨야 하기 때문에 효율적이지 않음
stack.unshift("stack1");
stack.unshift("stack2");
stack.unshift("stack3");
stack.shift();
stack.shift();
stack.shift();

//연결 리스트를 이용한 방식
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  // 앞에서 값을 넣는 push 메서드
  push(val) {
    var newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      var temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }
  // 앞에서 값을 하나씩 빼는 pop 메서드
  pop() {
    if (!this.head) return null;
    var temp = this.first;
    if (this.first === this.last) this.last = null;
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}
