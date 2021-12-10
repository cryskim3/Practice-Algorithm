/**
 * @param {number} n
 * @return {number}
 */

let climbStairs = function (n) {
  let arr = [];

  arr[1] = 1;
  arr[2] = 2;

  for (let i = 3; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }

  return arr[n];
};

/**
 * Fibonacci
 * 1)array
 * 2)recursive
 *
 * 계단이 하나인 경우, 한칸이동
 * 계단이 두개인 경우, 두칸이동
 * 계단이 세칸인 경우, (한칸, 두칸), (두칸, 한칸), (한칸, 한칸, 한칸)
 * 계단이 네칸인 경우, (한칸, 두칸, 한칸), (두칸, 한칸, 한칸), (한칸, 한칸, 두칸), (한칸, 한칸, 한칸, 한칸), (두칸, 두칸)
 *
 * 예를들어, 계단이 다섯칸인 경우,
 * 계단이 4칸인 경우와 계단이 3칸인 경우의 수들을 포함하여, 한칸을 더 이동하거나, 두칸을 더 이동하는 경우의 수를 더해주게 된다.
 * 그렇기 때문에 수식이 f(n) = f(n-1) + f(n-2) 인 피보나치 수식이 나오게 된다.
 * 이는 경우의 수를 피보나치 수열 방식으로 피라미드 형태로 그려보면 더욱 쉽게 이해가 가능하다.
 */

// var climbStairs = function(n) {
//     let temp=[];

//     if(n<=3){
//         return n;
//     }

//     if(n>3){

//         for(let i=4; i<=n; i++){
//           temp[i] = climbStairs(n - 1) + climbStairs(n - 2);
//         }

//     return temp[i];
//     }
// };

// var climbStairs = function(n) {
//

//     if(n<=3){
//         return n;
//     }

//     if(n>3){

//         return climbStairs(n - 1) + climbStairs(n - 2);
//         }

//
//     }
// };
