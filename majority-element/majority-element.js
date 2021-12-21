/**
 * @param {number[]} nums
 * @return {number}
 */


var majorityElement = function(nums) {
    
    let hash = {}
    let count = 0;
    let ans= null;
    
    for(let i = 0; i<nums.length; i++){
        
        let n = nums[i]
        
        if(n in hash){
            hash[n] = hash[n]+1;
        }else hash[n] = 1;

        if(count < hash[n]){
            ans = n;
            count = hash[n];
        }
    } 
    return ans
};


