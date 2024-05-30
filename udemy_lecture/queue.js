// 배열을 이용한 방식 1
var queue = [];
queue.push("first");
queue.push("second");
queue.push("third");
queue.shift(); //first
queue.shift(); //second
queue.shift(); //third

// 배열을 이용한 방식 2
queue.unshift("first");
queue.unshift("second");
queue.unshift("third");
queue.pop();
queue.pop();
queue.pop();

//단일 연결 리스트를 이용한 구현
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class Queue {
  constructor(val) {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  // 뒤에 값을 추가하는 enqueue 메서드
  enqueue(val) {
    var newNode = new Node(val);
    if (!this.first) {
      // 아무것도 없을 경우 새로 헤드와 테일 설정
      this.first = newNode;
      this.last = newNode;
    } else {
      // 포인터 옮기기
      this.last.next = newNode;
      this.last = newNode;
    }
  }
  // 앞의 값들을 하나씩 빼는 dequeue 메서드
  dequeue() {
    if (!this.first) return null;
    var temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.val;
  }
}
