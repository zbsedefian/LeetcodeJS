const threeSum = nums => {
  let solutions = [];
  for (let i = 1; i < nums.length; i++) {
    for (let j = 2; j < nums.length; j++) {
      let solution = [];
      if (nums[0] + nums[i] + nums[j] === 0) {
        solution.push(nums[0], nums[i], nums[j]);
      }
      if (
        solution.length > 0 &&
        solution != undefined &&
        !solutions.includes([solution.sort()])
      ) {
        console.log(solution.sort());
        solutions.push(solution.sort());
      }
    }
  }
  return [...new Set(solutions)];
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
