/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var searchInsert = function (nums, target) {
  let low = 0;
  let high = nums.length;

  while (low < high) {
    let middle = low + Math.floor((high - low) / 2);

    if (target > nums[middle]) {
      low = middle + 1;
    } else {
      high = middle;
    }
  }
  return low;
};

// var searchInsert = function(nums, target) {

//     let low = 0;
//     let high = nums.length;

//     while(low < high){
//         let middle = Math.floor((high+low)/2);
//         //let middle = low + Math.floor((high-low)/2);
//         // two different way to find the middle value

//         if (target < nums[middle]) {
//             high = middle-1;

//         } else if(target > nums[middle]){

//             low = middle + 1;
//         } else {
//             return middle;
//         }
//     }
//     return low;
// };

// var searchInsert = function(nums, target) {

//     for(let i=0; i<nums.length; i++){
//         if(target <=nums[i]){
//             return i;
//         }
//     }
//     return i;
// };

//https://leetcode.com/problems/search-insert-position/discuss/423166/Binary-Search-101
