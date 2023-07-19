/**
 * @url https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let cur_min = prices[0];
  let cur_profit = 0;
  for (let i = 1; i < prices.length - 1; i++) {
    // Can I buy?
    if (prices[i] < cur_min) cur_min = prices[i];
    // Can I sell?
    if (prices[i] > cur_min)
      cur_profit = Math.max(cur_profit, prices[i] - cur_min);
  }
  return cur_profit;
};

prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices));
