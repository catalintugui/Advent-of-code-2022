const fs = require("fs");

fs.readFile("day1.txt", "utf-8", (error, data) => {
  const elves = data
    .split("\n")
    .map(Number)
    .reduce(
      (acc, calories) => {
        if (calories === 0) {
          acc.push([]);
        } else {
          acc[acc.length - 1].push(calories);
        }
        return acc;
      },
      [[]]
    );
  let maxCal = 0;
  let allArray = [];

  for (const elf of elves) {
    const maxSum = elf.reduce((acc, calories) => acc + calories, 0);
    allArray.push(maxSum);
    // if (maxSum > maxCal) {
    //   maxCal = maxSum;
    // }
  }

  const last3 = allArray.sort((a, b) => a - b).slice(-3);
  console.log(
    last3.reduce((accumulator, curValue) => accumulator + curValue, 0)
  );
});
