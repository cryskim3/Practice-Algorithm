/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */


// Single "For loop"
const twoSum = (nums, target) => {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    const temp = target - nums[i];

    if (temp in map) {
      return [map[temp], i];
    }

    map[nums[i]] = i;
  }

  return null;
};



// double "For loop"

// var twoSum = function(nums, target) {
    
//     for(let i=0; i<nums.length; i++){
       
//         for(let j=i+1; j<nums.length; j++){
            
//              if((nums[i] + nums[j]) === target)
            
//         return [i, j];
//         }
//     }
// };

