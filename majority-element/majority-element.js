/**
 * @param {number[]} nums
 * @return {number}
 */


// var majorityElement = function(nums) {
    
//     let hash = {}
    
//     for(let i = 0; i<nums.length; i++){
        
//         if(nums[i] in hash){
//             hash[nums[i]] = hash[nums[i]]+1;
//         }else hash[nums[i]] = 1;

//         if(hash[nums[i]] > nums.length/2)
//             return nums[i]
//     } 
// };


var majorityElement = function (nums) {
  let hash = {};
  let count = 0;
  let ans = null;

  for (let i = 0; i < nums.length; i++) {
    let n = nums[i];

    if (n in hash) {
      hash[n] = hash[n] + 1;
    } else hash[n] = 1;
      
    if (count < hash[n]) {
      ans = n;
      count = hash[n];
    }
  }
  return ans;
};




