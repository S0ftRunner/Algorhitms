/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    const set = new Set();
    for (let i = 0; i < nums.length; i++) {
      set.add(nums[i]);
    }

   const ans = [];

   for (let element of set) {
    ans.push(element);
   }

   for (let i = 0; i < ans.length; i++) {
    return ans[i];
   }
};

console.log(removeDuplicates([1,1,2, 4, 3, 5, 2]));