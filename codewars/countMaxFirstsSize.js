const arr = [1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1];

function findMaxConsecutiveOnes(nums) {
  const resultArr = [];
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      if (i === nums.length - 1) {
        count++;
        resultArr.push(count);
        count = 0;
      }
      count++;
    } else if (nums[i] === 0) {
      resultArr.push(count);
      count = 0;
    }
  }

  console.log(Math.max(...resultArr));
}
findMaxConsecutiveOnes(arr);
