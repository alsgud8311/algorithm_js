class Node {
  constructor(val) {
    //해당 노드의 값
    this.val = val;
    // 왼쪽 트리를 가르키는 포인터
    this.left = null;
    // 오른쪽 트리를 가르키는 포인터
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  // 루트에서부터 내려가면서 새로운 노드가 들어갈 자리를 찾고 삽입하는 insert 메서드
  insert(val) {
    //새로운 노드 생성
    var newNode = new Node(val);
    //루트가 없을 때(아무 노드도 없을 떄) -> 새로 들어온 값을 루트로 설정
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    // 그렇지 않은 경우 -> 값이 들어갈 적절한 자리를 찾아 탐색
    else {
      // 시작점에서부터 나아가는 방향을 나타내는 current 변수
      var current = this.root;
      while (true) {
        // 무한루프에 빠지지 않기 위해 탈출조건 명시
        if (val === current.val) return undefined;
        // 들어오는 값이 현재 값보다 작을 때 -> 왼쪽으로 이동
        if (val < current.val) {
          // 왼쪽 자식 노드가 더이상 없을 경우 들어갈 자리까지 탐색이 완료된 경우이므로 해당 값을 삽입
          if (current.left === null) {
            current.left = newNode;
            return this;
          }
          // 그렇지 않을 경우(노드가 있을 경우)
          else {
            current = current.left;
          }
          //value값이 현재 가리키고 있는 노드의 val보다 클 경우 -> 오른쪽으로 이동
        } else if (val > current.val) {
          // 오른쪽 자식 노드가 더이상 없을 경우 들어갈 자리까지 탐색이 완료된 경우이므로 해당 값을 삽입
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }
  // val값에 해당하는 노드를 트리에서 찾는 contains 메서드
  contains(val) {
    // 트리에 노드가 아무것도 없을 경우 false 리턴
    if (!this.root) return false;
    // 루트에서부터 노드를 옮겨가면서 탐색할 current 변수를 만들고 루트를 가리키도록 함
    var current = this.root,
      // found 변수의 경우 루프문에서 빠져나오기 위한 조건
      found = false;
    // 더 갈 수 있는 노드가 있고 아직 값을 찾지 못했을 동안 반복
    while (current && !found) {
      // 찾는 값이 현재 값보다 작을 경우 왼쪽 트리로 이동
      if (val < current.val) {
        current = current.left;
      }
      // 찾는 값이 현재 값보다 클 경우 오른쪽 트리로 이동
      else if (val > current.val) {
        current = current.right;
      }
      // 나머지 경우는 val === current.val일 경우기 때문에 찾은 경우라 true를 리턴
      else {
        return true;
      }
    }
    // 못 찾았을 경우 false 리턴
    return false;
  }
}
