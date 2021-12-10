/**
 * @param {number[]} nums
 * @return {number}
 */



//해쉬테이블
// var singleNumber = function(nums) {
//     let map = {}
//     let res = []
   
//     for(let i = 0; i < nums.length; i++){
//         if(nums[i] in map) 
//             map[nums[i]] = true
//         else 
//              map[nums[i]] = false
//     }
//     console.log(map)
//     for(let i = 0; i < nums.length; i++){
        
//         if(map[nums[i]] === false)
//             return nums[i]
//         else 
//             continue
//     }
    
// };


//어떤 유튜버 코드
// var singleNumber = function(nums) {
//     const myObj = {}
//     for(let i = 0; i < nums.length; i++){
//         if(myObj[nums[i]])
//             delete myObj[nums[i]]
//         else 
//             myObj[nums[i]] = true
//     }
    
//     return Object.keys(myObj)[0]
// }


//작동안함
// var singleNumber = function(nums) {
    
//      let bin = [];
    
//     while(nums.length > 2) {
        
//         for(let i = 1; i < nums.length; i++){
            
//             if(nums[0] != nums[i]){
//                 //console.log("What is--------"+ nums)
//                 bin.push(nums[i]); // 푸쉬를 해도 값이 그대로 존재하네..?왜?
//                 console.log("What is--------"+ bin)
//                 console.log("What is--------"+ nums)
//             }
            
//             if(0 < nums.length < 2){
//                // console.log("What is--------"+ nums)
//                 return nums[0];
//             }
//          }
        
//         nums = [];
//         nums = bin;
//     }
// };


// nums = [1,2,3,4,5]
// let bin = [3]

// bin.push(nums[2])

//비트연산
function singleNumber(nums) {
	return nums.reduce((sum, curr) => sum ^ curr);
}

    // const singleNumber = (nums) => nums.reduce((a, b) => {
    //   console.log(“a: “, a); //0,1,3,2,0
    //   console.log(“b: “, b); //1,2,1,2,4
    //   return a ^ b;
    // },0);



