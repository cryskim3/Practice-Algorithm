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
 * @return {boolean}
 */

var isSymmetric = function(root) {
    var bFalse = true;
    
    if(root == null){
        return bFalse;
    }
    
    var searchTree = function(oTreeRight, oTreeLeft){
     if(oTreeRight == null && oTreeLeft == null){
        return;
    }
    if((oTreeRight == null && oTreeLeft != null) || (oTreeRight != null && oTreeLeft == null)){
        bFalse = false;
        return;
    }
   
    if(oTreeRight.val == oTreeLeft.val){
       searchTree(oTreeRight.right, oTreeLeft.left);
       searchTree(oTreeRight.left, oTreeLeft.right);
    } else{
        bFalse = false;
        return;
    }
};
    searchTree(root.right, root.left);
    return bFalse;
};
