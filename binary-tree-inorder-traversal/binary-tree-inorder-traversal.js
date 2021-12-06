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

var inorderTraversal = function(root) {
    
    const result = [];
    const temp = [];
    let current = root;
    
    while(current || temp.length){
        
        while(current){
            temp.push(current);
            current = current.left;
        }
        
        current = temp.pop();
        result.push(current.val);
        current = current.right;
    }
    
    return result
    
};