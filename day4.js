const fs = require("fs");

fs.readFile("day4.txt", "utf-8", (error, data) => {
  const pairs = data.split("\n");

  const separate = (str) => {
    return str.replace(/-/g, ",").split(",").map(Number);
  };

  const similarities = (arr) => {
    const [low1, high1, low2, high2] = arr;

    return (
      (low1 >= low2 && low1 <= high2 && high1 >= low2 && high1 <= high2) ||
      (low2 >= low1 && low2 <= high1 && high2 >= low1 && high2 <= high1)
    );
  };

  console.log(pairs.map(separate).filter(similarities).length);

  const overlap = (arr) => {
    const [low1, high1, low2, high2] = arr;

    return (low1 >= low2 && low1 <= high2) || (low2 >= low1 && low2 <= high1);
  };

  console.log(pairs.map(separate).filter(overlap).length);
});
