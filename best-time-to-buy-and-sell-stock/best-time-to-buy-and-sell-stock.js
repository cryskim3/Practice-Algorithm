/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(p) {
    
    let buy = p[0];
    let profit = 0;
    
    
    for(let i = 1; i < p.length; i++){
        
        buy = Math.min(p[i], buy);
        
        profit=Math.max(p[i]-buy, profit);
        
    }
    return profit;
    
    
};