const fs = require("fs");

//R P S - 1 2 3 \\\\\ paper b rock - rock b sciss - sciss b paper
//A B C
//X Y Z

// fs.readFile("day2.txt", "utf-8", (error, data) => {
//   const game = {
//     "A X": 3,
//     "A Y": 6,
//     "A Z": 0,
//     "B X": 0,
//     "B Y": 3,
//     "B Z": 6,
//     "C X": 6,
//     "C Y": 0,
//     "C Z": 3,
//   };
//   const result = {
//     X: 1,
//     Y: 2,
//     Z: 3,
//   };

//   const score = data.split("\n").reduce((score, round) => {
//     score += game[round];
//     score += result[round[2]];
//     return score;
//   }, 0);

//   console.log(score);
// });

fs.readFile("day2.txt", "utf-8", (error, data) => {
  const game = {
    "A X": 3,
    "A Y": 1,
    "A Z": 2,
    "B X": 1,
    "B Y": 2,
    "B Z": 3,
    "C X": 2,
    "C Y": 3,
    "C Z": 1,
  };
  const result = {
    X: 0,
    Y: 3,
    Z: 6,
  };

  const score = data.split("\n").reduce((score, round) => {
    score += game[round];
    score += result[round[2]];
    return score;
  }, 0);

  console.log(score);
});
