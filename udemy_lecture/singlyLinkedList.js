class Node {
  constructor(val) {
    // 해당 노드의 값
    this.val = val;
    // 다음 노드를 가리킬 공간
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  //push 메서드 => 새로운 노드 추가
  push(val) {
    var newNode = new Node(val);
    // 헤드에 아무것도 없을 경우 노드가 아무것도 없다는 뜻
    // 새로운 노드를 헤드와 테일 모두에 업데이트
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } // 연결 리스트에 노드가 있을 경우
    // 끝에서 다음 노드를 새로운 노드로 하고 마지막 노드를 새로운 노드로 업데이트
    else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    // current -> 현재 옆으로 옮기면서 가리키고 있는 노드를 나타냄
    var current = this.head;
    // newTail -> current 이전의 노드를 가리키면서 계속 끌려감
    var newTail = current;
    // 반복문을 통해 노드를 끝까지 옮기기
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    // 테일을 마지막 노드 이전의 노드로 설정
    this.tail = newTail;
    // newTail의 next에 붙어 있던 마지막 노드를 없애기
    newTail.next = null;
    // 연결 리스트의 길이 하나 줄이기
    this.length--;
    // 연결 리스트가 하나도 없을 경우 -> 헤드와 테일을 null로 재설정
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  // shift -> 연결리스트의 앞에서 노드를 제거
  shift() {
    if (!this.head) return undefined;
    var currHead = this.head;
    this.head = currHead.next;
    // 연결 리스트 길이 줄이기
    this.length--;
    // next가 남는 문제 해결
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return currHead;
  }
  // unshift => 맨 앞에 부분에 노드를 붙여넣기
  unshift(val) {
    // 새로운 노드 생성
    var newNode = new Node(val);
    // 아무 노드도 없을 경우
    // 헤드를 들어오는 노드로 만들고 테일도 똑같이 만듦
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    }
    // 노드가 있을 경우
    // 현재 헤드를 새로운 노드 다음으로 밀고 헤드를 새로운 노드로 설정
    else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  // 받은 인덱스값에 해당하는 연결 리스트의 값을 리턴
  get(idx) {
    // 해당하는 인덱스 값이 없는 경우(범위초과) null 리턴
    if ((idx < 0 && idx) || !this.length) return null;
    var counter = 0;
    var current = this.head;
    // 인덱스만큼 연결리스트를 따라 옮겨감
    while (counter !== idx) {
      current = current.next;
      counter++;
    }
    return current;
  }
  // 인덱스와 값을 받고 해당하는 인덱스의 값을 받은 값으로 업데이트
  set(idx, val) {
    // 만들어둔 get 메서드를 통해 해당하는 인덱스의 노드를 가져옴
    var foundNode = this.get(idx);
    // 해당하는 노드가 있다면
    if (foundNode) {
      // 노드의 값 업데이트
      foundNode.val = val;
      // true 반환
      return true;
    }
    // 없다면 false 반환
    return false;
  }
  //인덱스와 값을 받아들여 해당하는 인덱스 위치에 받은 값을 삽입
  insert(idx, val) {
    // 범위에 벗어나는 인덱스일 경우 false 리턴
    if (idx < 0 || idx > this.length) return false;
    // 연결리스트의 길이와 인덱스가 같으면 맨 오른쪽에 요소 삽입 => push 메서드 사용
    if (idx === this.length) {
      this.push(val);
      return true;
    }
    // 인덱스가 0일 경우 가장 앞에 삽입 => unshift 메서드 + 반환값에 !!를 붙여 불리언으로 바꾸기
    if (idx === 0) !!this.unshift(val);

    // 삽입할 노드 만들기
    var newNode = new Node(val);
    // 해당 인덱스 이전의 노드를 찾아오기 => get 메서드
    var prev = this.get(idx - 1);
    // 노드를 보존하면서 넣기 위해 스왑용 변수 만들기
    var temp = prev.next;
    // 이전 노드의 다음 노드를 새로운 노드를 가리키도록 변경
    prev.next = newNode;
    // 이전 노드의 다음 노드를 새로운 노드의 다음 노드로 변경
    newNode.next = temp;
    // 길이 추가
    this.length++;
    return true;
  }
  remove(idx) {
    // 인덱스가 0보다 작거나 길이보다 클 경우 undefined 리턴
    if (idx < 0 || idx > this.length) return undefined;
    // 인덱스가 길이와 같을 경우 가장 오른쪽에 있으므로 pop 메서드 사용
    if (idx === this.length) this.pop();
    // 인덱스가 0일 경우 가장 왼쪽에 있으므로 shift 메서드 사용
    if (idx === 0) this.shift();

    // 이전 노드의 다음 노드를 설정하기 위해 이전 노드 접근
    var prev = this.get(idx - 1);
    var removed = prev.next;
    // 이전 노드의 다음 노드의 다음 노드를 이전 노드의 다음 노드로 변경해서 바로 다음이었던 노드를 삭제
    prev.next = removed.next;
    // 길이가 하나 줄어들기 떄문에 하나 빼기
    this.length--;
    return prev.mext;
  }

  // 단순 출력하여 연결 리스트 파악용 메서드
  print() {
    var arr = [];
    var current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }
  // 연결리스트를 돌면서 처음부터 연결 리스트의 방향을 바꾸는 메서드
  reverse() {
    // 미리 헤드와 테일을 바꿔놓는 작업
    var node = this.head;
    this.head = this.tail;
    this.tail = node;

    var next;
    // prev가 null이 되어야 하는 이유는 tail의 next가 null이기 때문
    var prev = null;
    for (var i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      // 반대방향으로 가면서 이전 노드는 곧 현재 노드가 됨
      prev = node;
      // 현재의 노드는 next 노드로 재설정
      node = next;
    }
    return this;
  }
}
