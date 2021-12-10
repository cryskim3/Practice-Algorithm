/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number[]}
 */

/**
 * 이해 포인트!
 * 1.   템프라는 스택을 루트로 업데이트를 시켜주게 되면,
 * 스택이라는 어레이 안에 루트가 통째로 들어가게 된다.
 * 즉, 스택은 [[루트가 가지고 있던 모든 값들]]를 가지게 되고,
 * 스택의 0번째 인덱스는 [루트가 가지고 있던 모든 값들]이다.
 * 2.   node.left / node.right 라는 값을 호출하면
 * 트리에서 왼쪽에 해당하는 모든 값들을, 오른쪽에 해당하는 모든 값들을 의미한다.
 * 3.   리커시브로 문제 풀이시, 쉽게 설명하자면, 가장 끝에 있는 가지에 도착해서 그 값을 먼저 계산을 한 후,
 * 바로 위의 값을 계산하고 연쇄반응으로 풀리는 원리.
 * 4.   DFS 와 BFS
 * DFS는 가장 끝 가지를 찾아 내려가서 거기서 부터 시작한다면,
 * BFS는 같은 층에 있는 왼쪽, 오른쪽 값들을 먼저 고려하고 그 다음에 그 밑에 있는 모든 왼쪽, 오른쪽 가지들을 고려 하는 방식
 */

/**
 * 순회 방식
 * 인오더 - 왼,벨류,오른
 * 프리오더 - 루트,왼,오
 * 포스트오더 - 왼,오,벨류
 */

var inorderTraversal = function (root) {
  const result = [];
  const temp = []; // 스택구조를 이용
  let current = root;

  while (current || temp.length) {
    while (current) {
      temp.push(current); //푸쉬
      current = current.left;
    }

    current = temp.pop(); //팝을 하면 가장 최근에 넣은 값부터 빠져나오게 된다.
    result.push(current.val);
    current = current.right;
  }

  return result;
};

/**
 * 두가지 방법으로 풀이 가능
 * 1. 스택구조를 이용한방법 (예시-위)
 * 2. 리커시브 (재귀함수) (예시-아래)
 */

// Recursive In-order Traverse
// Time Complexity: O(N)
// Space Complexity: O(H)
var inorderTraversal = (root) => {
  let result = [];
  traversal(root);

  function traversal(node) {
    if (!node) return;

    traversal(node.left);
    result.push(node.val);
    traversal(node.right);
  }
  return result;
};

/**
 * 트리구조를 이해하기 위한 중요한 포인트
 * node.left 혹은 node.right 을 하게되면,
 * 특정 값 "하나"가 아닌, 왼쪽에 해당하는 전체 가지들을 칭하고, 오른쪽에 해당하는 전체 가지들을 칭하게 된다.
 * 인풋값이 [1,2,3,4,5,6,7,8,9,0] 이라는 예제에서 이 인풋값이 트리 구조에 해당한다는 가정하에
 * 이 인풋값만 보고서 알 수 있는 사실은, 1은 node.val이며 2는 node.left 3은 node.right 이다.
 * 다만, 그 이후의 값들은 왼쪽에 해당하는 값인지 오른쪽에 해당하는 값인지 알 수 없으며, 코드를 통해서 정리해 볼 수 있다.
 * 콘솔로 찍어보게 되면 [1,2,3] 이후의 값들은 별다른 이유가 없다면(혹은 따로 null로 지정해 주지 않았다면) 왼쪽부터 채워지게 되고,
 * 왼쪽은 [2,4,5,8,9,0], 오른쪽은 [3,6,7] 결과값으로 콘솔에 찍힌다.
 *
 * 또다른 예로, [1,2,2,null,null,3,null]이라는 값이 트리구조로 주어졌다고 가정해보자.
 * 그러면 트리 구조는 아래와 같이 구성된 트리라고 볼 수 있다.
 *          1
 *        2   2
 *      n  n 3  n
 */
