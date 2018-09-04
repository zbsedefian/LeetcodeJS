const findMedianSortedArrays = (nums1, nums2) => {
  let nums3 = [...nums1, ...nums2];
  nums3.sort((a, b) => a - b);
  return nums3.length % 2 === 0
    ? (nums3[nums3.length / 2 - 1] + nums3[nums3.length / 2]) / 2
    : nums3[Math.floor(nums3.length / 2)];
};

a = findMedianSortedArrays([3], [-2, -1]);
console.log(a);
