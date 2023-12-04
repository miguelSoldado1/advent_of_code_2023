import * as fs from "fs";
const input = fs.readFileSync("./day_04/input.txt", "utf8");
const lines = input.split(/\r?\n|\r|\n/g);
let result = 0;

for (let line of lines) {
  let count = 0;
  line = line.split(": ")[1];
  const [winning, personal] = line.split(" | ").map((x) => x.split(" "));

  for (const num of winning) {
    if (num && personal.includes(num)) {
      count = count === 0 ? 1 : count * 2;
    }
  }

  result += count;
}

console.log(result);
