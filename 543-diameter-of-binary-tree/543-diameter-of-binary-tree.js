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

//[4,-7,-3,null,null,-9,-3,9,-7,-4,null,6,null,-6,-6,null,null,0,6,5,null,9,null,null,-1,-4,null,null,null,-2]

var diameterOfBinaryTree = function(root) {
    
    if(!root) return 0
    let length = 0;
    dfs(root)
   
    function dfs(node){
        
        if(!node) return 0 
        
        let left = dfs(node.left)
        let right = dfs(node.right)
        
        length = Math.max(length, left + right)
        
        return Math.max(left, right) + 1
    }
 
    return length;
};


