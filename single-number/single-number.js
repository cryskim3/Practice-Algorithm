/**
 * @param {number[]} nums
 * @return {number}
 */


function singleNumber(nums) {
	return nums.reduce((prev, curr) => prev ^ curr);
}

    // const singleNumber = (nums) => nums.reduce((a, b) => {
    //   console.log("a: ", a); //0,1,3,2,0
    //   console.log("b: ", b); //1,2,1,2,4
    //   return a ^ b;
    // },0);


