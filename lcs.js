const printLCS = (a, b) => {
  let m = a.length;
  let n = b.length;
  let lcs = new Array(m + 1);
  let lcsLen = 0;
  let row = 0,
    col = 0;

  for (let i = 0; i <= m; i++) {
    lcs[i] = Array(n + 1);
    for (let j = 0; j <= n; j++) {
      lcs[i][j] = 0;
      if (i == 0 || j == 0) {
        lcs[i][j] = 0;
      } else if (a[i - 1] == b[j - 1]) {
        lcs[i][j] = lcs[i - 1][j - 1] + 1;
        if (lcsLen < lcs[i][j]) {
          lcsLen = lcs[i][j];
          row = i;
          col = j;
        }
      } else {
        lcs[i][j] = 0;
      }
    }
  }

  if (lcsLen == 0) {
    console.log("No Common Substring");
    return;
  }

  let resStr = "";

  while (lcs[row][col] != 0) {
    resStr = a[row - 1] + resStr;
    --lcsLen;
    row--;
    col--;
  }
  console.log(resStr);
};

const myArgs = process.argv.slice(2);
printLCS(...myArgs);

const onErr = (err) => {
  console.log(err);
  return 1;
};
