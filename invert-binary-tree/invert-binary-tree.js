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
 * @return {TreeNode}
 */

function invertTree(root) {
    if (root) {
        let tmp = root.left;
        root.left = invertTree(root.right);
        root.right = invertTree(tmp);
    }
    return root;
}

// // Recursion
// function invertTree(root) {
 
//     if (root == null) return root;
  
//     [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];  
    
//     return root;
// }

// // DFS
// function invertTree(root) {
//   const stack = [root];

//   while (stack.length) {
//     const n = stack.pop();
//     if (n != null) {
//       [n.left, n.right] = [n.right, n.left];
//       stack.push(n.left, n.right);
//     }
//   }

//   return root;
// }

// // BFS
// function invertTree(root) {
//   const queue = [root];

//   while (queue.length) {
//     const n = queue.shift();
//     if (n != null) {
//       [n.left, n.right] = [n.right, n.left];
//       queue.push(n.left, n.right);
//     }
//   }

//   return root;
// }



// // recursive
// var invertTree = function(root) {
//     if (!root) return null;
    
//     let right = invertTree(root.right);
//     let left = invertTree(root.left);
    
//     root.left = right;
//     root.right = left;

//     return root;
// };


// // stack, DFS
// var invertTree = function(root) {
//     if (!root) return null;
    
//     let stack = [root];
    
//     while (stack.length > 0) {
        
//         const node = stack.pop();
        
//         [node.left, node.right] = [node.right, node.left];
    
//         if (node.left) stack.push(node.left);
//         if (node.right) stack.push(node.right);
//     }

//     return root;
// };

// //BFS
// var invertTree = function(root) {
//     if (!root) return null;
    
//     let queue = [root];
    
//     while (queue.length > 0) {
        
//         const node = queue.shift(); // use pop() then DFS, use shift() BFS
        
            // swap,   Destructuring assignment if you don't know take a look!
//         [node.left, node.right] = [node.right, node.left]; 
    
//         if (node.left) queue.push(node.left);
//         if (node.right) queue.push(node.right);
//     }

//     return root;
// };