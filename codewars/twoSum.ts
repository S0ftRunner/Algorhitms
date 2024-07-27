function twoSum(nums: number[], target: number): Array<number> {
  let vals: Record<number, number> = {};

  for (let i = 0; i < nums.length; i++) {
    if (target - nums[i] in vals) {
      return [vals[target-nums[i]], i];
    } else {
      vals[nums[i]] = i;
    }
  }

  return [];
}

/**
 * Данную задачу решал еще на литкоде, не трудная
 */