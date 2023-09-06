/**
 * Calculates the maximum profit that can be obtained by buying and selling stocks
 * given an array of stock prices.
 *
 * @param {number[]} prices - An array of stock prices where prices[i] represents
 * the price of the stock on the i-th day.
 *
 * @return {number} - The maximum profit that can be obtained.
 */
var maxProfit = function (prices) {
  let cur_min = prices[0];
  let cur_profit = 0;
  // Loop through the array of prices starting from the second element.
  for (let i = 1; i < prices.length; i++) {
    // Check if the current price is lower than the current minimum price.
    // If so, update the current minimum price.
    if (prices[i] < cur_min) cur_min = prices[i];

    // Check if selling at the current price would yield a higher profit than
    // the current maximum profit. If so, update the current maximum profit.
    if (prices[i] > cur_min)
      cur_profit = Math.max(cur_profit, prices[i] - cur_min);
  }
  return cur_profit;
};

prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices));
