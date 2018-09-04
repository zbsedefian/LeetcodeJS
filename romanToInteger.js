const romanToInt = s => {
  let toSubtract = 0;
  if (s.includes("IV")) toSubtract += 2;
  if (s.includes("IX")) toSubtract += 2;
  if (s.includes("XL")) toSubtract += 20;
  if (s.includes("XC")) toSubtract += 20;
  if (s.includes("CD")) toSubtract += 200;
  if (s.includes("CM")) toSubtract += 200;

  let num = 0;
  s.split("").forEach(c => {
    switch (c) {
      case "I":
        num += 1;
        break;
      case "V":
        num += 5;
        break;
      case "X":
        num += 10;
        break;
      case "L":
        num += 50;
        break;
      case "C":
        num += 100;
        break;
      case "D":
        num += 500;
        break;
      case "M":
        num += 1000;
        break;
      default:
        break;
    }
  });

  return num - toSubtract;
};

console.log(romanToInt("III"));
console.log(romanToInt("IV"));
console.log(romanToInt("IX"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));
