const fs = require("fs");

fs.readFile("day6.txt", "utf-8", (error, data) => {
  const input = data;
  let arrOfFour = [];
  for (let i = 0; i < input.length; i++) {
    arrOfFour.push([input[i], input[i + 1], input[i + 2], input[i + 3]]);
  }
  const subroutineArray = arrOfFour
    .map((elem) => [...new Set(elem)])
    .filter((elem) => elem.length === 4)[0]
    .join("");
  const part1 = () => console.log(input.indexOf(subroutineArray) + 4);
  part1();
});

fs.readFile("day6.txt", "utf-8", (error, data) => {
  const input = data;
  let arrOfFourteen = [];
  for (let i = 0; i < input.length; i++) {
    arrOfFourteen.push(input.slice(i, i + 14));
  }
  const subroutineArray = arrOfFourteen
    .map((elem) => [...new Set(elem)])
    .filter((elem) => elem.length === 14)[0]
    .join("");
  console.log(subroutineArray);
  const part2 = () => console.log(input.indexOf(subroutineArray) + 14);
  part2();
});
