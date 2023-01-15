function longestCommonSubstring(arr) {
  const longestStr = "";

  if (arr == null || arr.length == 0) {
    return longestStr;
  }

  let minLength = arr[0].length;

  for (let i = 1; i < arr.length; i++) {
    minLength = Math.min(minLength, arr[i].length);
  }

  for (let i = 0; i < minLength; i++) {
    const current = arr[0][i];

    for (let j = 0; j < arr.length; j++) {
      if (arr[j][i] != current) return longestStr;
    }
    longestStr += current;
  }

  return longestStr;
}
let x = longestCommonSubstring(process.argv);
console.log("x", x);
