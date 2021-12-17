/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */


var hasCycle = function(head){
    
    if(!head) return false;
    
    let hare = head;
    let tortoise = head;
    
    while(hare && hare.next && hare.next.next){
        
        hare = hare.next.next
        tortoise = tortoise.next
        
        if(hare === tortoise){
            return true;
        }
    }
    return false;
}



























// var hasCycle = function(head) {
//     if(!head) {
//         return false;
//     }
//     let hare = head;
//     let tortoise = head;
//     while(hare) {
//         if(!hare.next) {
//             return false;
//         } else {
//             hare = hare.next.next;
//             tortoise = tortoise.next;
//         }
//         if(tortoise == hare) {
//             return true;
//         }
//     }
//     return false;
// };


// var hasCycle = function(head) {
//     if(!head) return false;
//     while(head){
//         if(head.val==="checked") return true;
//         head.val="checked";
//         head=head.next;    
//     }
//     return false;
    
// };