const myAtoi = str => {
  n = parseInt(str.trim());
  console.log(n);
  if (n < Math.pow(2, -31)) return Math.pow(2, -31);
  if (n > Math.pow(2, 31)) return Math.pow(2, 31);
  return n;
};

console.log(myAtoi("   -47"));
