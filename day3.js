const fs = require("fs");

fs.readFile("day3.txt", "utf-8", (error, data) => {
  const backpacks = data.split("\n");

  const commonLetter = (str) => {
    const mid = str.length / 2;
    const comp1 = str.slice(0, mid);
    const comp2 = str.slice(mid);
    for (let i = 0; i < comp2.length; i++) {
      if (comp1.includes(comp2[i])) {
        return comp2[i];
      }
    }
  };

  const charValue = (char) => {
    const value = char.charCodeAt(0);
    if (value > 96) {
      return value - 96;
    }
    if (value > 64) {
      return value - 64 + 26;
    }
  };

  const prioritySum = backpacks
    .map(commonLetter)
    .map(charValue)
    .reduce((acc, val) => acc + val, 0);
  //   console.log(prioritySum);

  /////PART 2

  const n = 3;
  const evlesByThree = backpacks.reduce(
    (r, e, i) => (i % n ? r[r.length - 1].push(e) : r.push([e])) && r,
    []
  );

  const commonLetterForThree = (arr) => {
    for (let i = 0; i < arr[0].length; i++) {
      if (arr[1].includes(arr[0][i]) && arr[2].includes(arr[0][i]))
        return arr[0][i];
    }
  };

  const prioByThree = evlesByThree
    .map(commonLetterForThree)
    .map(charValue)
    .reduce((acc, val) => acc + val, 0);

  console.log(prioByThree);
});
