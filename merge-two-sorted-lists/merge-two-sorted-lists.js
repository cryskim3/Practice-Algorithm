/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
function mergeTwoLists (l1, l2) {
    let merge = new ListNode()
    let head = merge
       
    while(l1 && l2) {
        if(l1.val < l2.val) {
            merge.next = l1
            l1 = l1.next
        } else {
            merge.next = l2
            l2 = l2.next
        }
        merge = merge.next
    }
    
    if(!l1) merge.next = l2
    else if(!l2) merge.next = l1
    
    return head.next
};