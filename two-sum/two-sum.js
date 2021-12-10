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

// 충돌이 일어날수도 있다. 해쉬테이블을 쓰게되면
// 키와 어레이를 매칭 시키는 과정에서 해시함수를 거치는데,
// 그 과정에서 하나의 키값에 여러개의 밸류가 할당될 수 있고,
// 그렇게 되면 타임컴플렉시티가 O of n 이 되버린다.
// 왜냐면 값이 중복이 되고 그 값을 찾으려면 결국
// 리니어 서치 방식으로 서칭을 해야되기 때문.

// double "For loop"

// var twoSum = function(nums, target) {

//     for(let i=0; i<nums.length; i++){

//         for(let j=i+1; j<nums.length; j++){

//              if((nums[i] + nums[j]) === target)

//         return [i, j];
//         }
//     }
// };
