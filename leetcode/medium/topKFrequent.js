/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const map = new Map();
  const ans = [];
  // if (nums.length <= 2) return nums;

  for (let i = 0; i < nums.length; i++) {
    if (!map.has(nums[i])) map.set(nums[i], 0);
    map.set(nums[i], map.get(nums[i]) + 1);
  }

  for (let element of map.keys()) {
    if (map.get(element) > k) ans.push(element);
    console.log(`element: ${element}; value: ${map.get(element)}`);
  }

  return ans.length === 0 ? nums : ans;
};

console.log(topKFrequent([1], 1));
