const fs = require("fs");

const rawCargo = [
  "FHMTVLD",
  "PNTCJGQH",
  "HPMDSR",
  "FVBL",
  "QLGHN",
  "PMRGDBW",
  "QLHCRNMG",
  "WLC",
  "TMZJQLDR",
];

fs.readFile("day5.txt", "utf-8", (error, data) => {
  const moves = data
    .split("\n")
    .map((elem) => elem.split(" "))
    .map((elem) => [elem[1], elem[3], elem[5]]);

  const crates = {};

  for (let i = 0; i < rawCargo.length; i++) {
    crates[i + 1] = rawCargo[i].split("").reverse();
  }

  const instructions = [];

  for (let i = 0; i < moves.length; i++) {
    const [count, from, to] = moves[i];
    instructions.push({ count: count, from: from, to: to });
  }

  const makeMove1 = () => {
    const deepCopyCrates = JSON.parse(JSON.stringify(crates));
    for (const instruction of instructions) {
      for (let i = 0; i < instruction.count; i++) {
        const crate = deepCopyCrates[instruction.from].pop();
        deepCopyCrates[instruction.to].push(crate);
      }
    }
    console.log(
      Object.values(deepCopyCrates)
        .map((elem) => elem[elem.length - 1])
        .join("")
    );
  };
  //   makeMove1();

  const makeMove2 = () => {
    const deepCopyCrates = JSON.parse(JSON.stringify(crates));
    for (const instruction of instructions) {
      const crate = deepCopyCrates[instruction.from].splice(
        -instruction.count,
        instruction.count
      );
      deepCopyCrates[instruction.to] =
        deepCopyCrates[instruction.to].concat(crate);
    }
    console.log(
      Object.values(deepCopyCrates)
        .map((elem) => elem[elem.length - 1])
        .join("")
    );
  };
  makeMove2();
});
