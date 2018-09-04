const lengthOfLongestSubstring = s => {
  const chars = s.split("");
  let a = [];
  let count = 0;
  let max = 0;
  for (let i = 0; i < chars.length; i++) {
    if (a.includes(chars[i])) count = 0;
    a.push(s[i]);
    count++;
    if (count > max) max = count;
  }
  console.log(max);
  return max;
};

lengthOfLongestSubstring("abcabcbb");
lengthOfLongestSubstring("bbbbb");
lengthOfLongestSubstring("pwwkew");
lengthOfLongestSubstring("dvdf");
