import * as fs from "fs";
const input = fs.readFileSync("./day_01/input.txt", "utf8");

const lines = input.split(/\r?\n|\r|\n/g);
const numbers = [];

for (let line of lines) {
  let first = "";
  let last = "";
  for (let i = 0; i < line.length; i++) {
    if (first && last) break;

    const a = line.at(i);
    if (!first && !isNaN(Number(a))) {
      first = a;
    }

    const b = line.at(-1 - i);
    if (!last && !isNaN(Number(b))) {
      last = b;
    }
  }
  numbers.push(Number(first + last));
}

console.log(numbers.reduce((acc, curr) => acc + curr, 0));
