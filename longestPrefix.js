const longestCommonPrefix = strs => {
  let longest = [];
  let prevLetter = "";
  strs.forEach(word => {
    word.split("").forEach((letter, i) => {
      prevLetter = letter;
      if (letter === prevLetter) {
        console.log(longest[i]);
      }
    });
  });
};

longestCommonPrefix(["flower", "flow", "flight"]);
