/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */


var isPalindrome = function(head) {
    let node = head
    let stack = []
    
    while(node){
        stack.push(node.val)
        node = node.next
    }
    
    //console.log(stack.join(''))
    console.log(typeof stack.join('')) //스트링 비교
    
    return stack.join('') === stack.reverse().join('') 
    
};




// var isPalindrome = function(head) {
//     let slow = head;
//     let fast = head;
//     const stack = [];
//     while(fast){
//           if(!fast.next){
//               slow = slow.next
//               break;
//           }
//         stack.push(slow.val)
//         slow = slow.next
//         fast = fast.next.next;
//           }
    
//     while(slow){
//           if(stack.pop() != slow.val) return false;
//         slow = slow.next
//           }
    
//     return true
// }




//////Combined//////
// var findMid = (head) => {
//     let slow = head;
//     let fast = head;
//     while(fast && fast.next){
//         slow = slow.next
//         fast = fast.next.next
//     }
//     return slow
// }

// var reverse = (head) => {
//     let prev = null
//     let cur = head 
//     while(cur){
//         const next = cur.next
//         cur.next = prev
//         prev = cur
//         cur = next 
//     }
    
//     // let cur = head
//     // while(cur){
//     // [cur.next, prev, cur] = [prev, cur, cur.next]
//     // }
    
 
//     // while(head){
//     //       let next = head.next
//     //       head.next = prev
//     //       prev = head
//     //       head = next
//     //       }
    
    
//     return prev
// }

// var compare = (list1, list2) => {
//     while(list1 && list2){
//           if(list1.val !== list2.val) return false
//         list1 = list1.next
//         list2 = list2.next
//           }
//     return true
// }

// var isPalindrome = (head) => {
//     const mid = findMid(head);
//     const tail = reverse(mid);
//     return compare(head, tail)
// }