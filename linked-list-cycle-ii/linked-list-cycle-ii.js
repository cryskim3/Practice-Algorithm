/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */


var detectCycle = function(head) {
    if(!head) {
        return null;
    }
    
    let hare = head;
    let tortoise = head;
    
    while(hare) {
        if(!hare.next) {
            return null;
        } else {
            hare = hare.next.next;
            tortoise = tortoise.next;
        }
        
        if(tortoise === hare) {
            hare = head;
            
            while(hare !== tortoise){
             
                hare = hare.next;
                tortoise = tortoise.next;
            }
              return hare;   
        }
    }
    return null;
};