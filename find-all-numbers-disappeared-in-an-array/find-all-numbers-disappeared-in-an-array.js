/**
 * @param {number[]} nums
 * @return {number[]}
 */

var findDisappearedNumbers = function(nums) {
    
  let map = {}

    for(let i = 0; i < nums.length; i++){
      if(!map[nums[i]]) {
          map[nums[i]] = true
      } 
  }
    
    for(let i = 1; i <= nums.length; i++){
       if(i in map) 
          delete map[i]
       else      
           map[i] = false
    }
    
return Object.keys(map)
    
};

var findDisappearedNumbers = function(nums) {
    let res = [];
    for (let i = 0; i < nums.length; i++) {
        let num = Math.abs(nums[i]);
        let idx = num-1;
        nums[idx] = Math.abs(nums[idx]) * -1;
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) res.push(i+1);
    }
    return res;
};



//Time complexity is O(n^2)
var findDisappearedNumbers = function(nums) {
   
    let missingNumber = [];
   
    for (let i = 1; i <= nums.length; i++){
     
        if(!nums.find(num => num == i)){
            missingNumber.push(i);
        }
    }
    
    return missingNumber;
}
