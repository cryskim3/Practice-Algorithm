/**
 * @param {number} n
 * @return {number}
 */



let climbStairs = function(n) {
   
    let arr=[];
  
    arr[1]=1;
    arr[2]=2;
    

        for(let i=3;i<=n;i++){
            arr[i]=arr[i-1]+arr[i-2];
        }

    return arr[n];
     
};





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