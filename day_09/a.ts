import * as fs from "fs";
const input = fs.readFileSync("./day_09/input.txt", "utf8");
const lines = input.split(/\r?\n|\r|\n/g).map((l) => l.split(" ").map(Number));
let result = 0;

for (const line of lines) {
  let history = [line];
  whileLoop: while (true) {
    const curr = history.at(-1);
    const sequence: number[] = [];

    for (let i = 0; i < curr.length - 1; i++) {
      sequence.push(curr[i + 1] - curr[i]);
    }

    history.push(sequence);
    if (new Set(sequence).size === 1) break whileLoop;
  }

  let count = history.at(-1).at(-1);
  for (let i = history.length - 2; i >= 0; i--) {
    count += history[i].at(-1);
  }
  result += count;
}

console.log(result);
