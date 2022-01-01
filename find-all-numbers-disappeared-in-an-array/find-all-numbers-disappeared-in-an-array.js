/**
 * @param {number[]} nums
 * @return {number[]}
 */



//Time complexity is not O(n^2)
var findDisappearedNumbers = function(nums) {
   
    let missingNumber = [];
   
    for (let i = 1; i <= nums.length; i++){
     
        if(!nums.find(num => num == i)){
            missingNumber.push(i);
        }
    }
    
    return missingNumber;
}