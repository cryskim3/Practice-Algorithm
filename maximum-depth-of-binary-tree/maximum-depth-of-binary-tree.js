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
 * @return {number}
 */

// 리커시브(재귀함수)
var maxDepth = function (root) {
  if (root === null) return 0;

  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};

// 큐를 이용하여 먼저 인덱스 0값을 삭제
var maxDepth = (root) => {
  if (root === null) return 0;
  const queue = [root];
  let depth = 0;

  while (queue.length !== 0) {
    // let len = queue.length

    for (let i = 0; i < queue.length; i++) {
      let item = queue.shift();
      if (item.left) queue.push(item.left);
      if (item.right) queue.push(item.right);
    }

    depth++;
  }

  return depth;
};

// 포룹이 끝나고 값을 모두 벨리데잇 한 이후에 인덱스 0값을 삭제
// var maxDepth = function(root){

//     if(!root) return 0;

//     let queue = [root];
//     let depth = 0;

//     while(queue.length !== 0) {

//         depth++;
//         let len = queue.length; // 이게 필요한 이유는, 기존의 큐렝스가 스플라이스 되어야 하는데, 만약 렌이 아닌 큐렝스로 쓰게 되면
//         //포룹을 돌면서 푸쉬된 아이템을 포함한 큐렝스를 스플라이스 하게되니까, 로직이 성립되지 않는다. 그래서 이게 필요하다.

//         for(let i=0; i < len; i++){
//             if(queue[i].left) queue.push(queue[i].left)
//             if(queue[i].right) queue.push(queue[i].right)
//         }

//         queue.splice(0, len);
//     }

//     return depth;

// }

// 콘솔 값으로 확인해보는 용도
// var maxDepth = function(root) {
//     if (!root) return 0;

//     const queue = [root];
//     let depth = 0;

//     while (queue.length !== 0) {
//         depth++;
//         const len = queue.length;

//         console.log("before splice-----"+len)

//         for (let i = 0; i < len; i++) {
//             if (queue[i].left) queue.push(queue[i].left);
//                 console.log("what is queue-----"+ JSON.stringify(queue))
//                 console.log("what is left-----"+ JSON.stringify(queue[i].left))

//             if (queue[i].right) queue.push(queue[i].right);
//             //console.log("what is queue-----"+ JSON.stringify(queue[i]))
//                 console.log("what is right-----"+ JSON.stringify(queue[i].right))
//         }

//         queue.splice(0, len);
//         console.log("after splice-----"+len)
//     }
//     return depth;
// };
