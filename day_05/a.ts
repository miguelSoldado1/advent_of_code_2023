import * as fs from "fs";
const input = fs.readFileSync("./day_05/input.txt", "utf8");

const lines = input.split("\r\n").filter((x) => x === "" || /[0-9]/.test(x));
const seeds = lines[0].replace("seeds: ", "").split(" ").map(Number);
let changed = [];

for (let i = 2; i < lines.length; i++) {
  if (lines[i] === "") {
    changed = [];
    continue;
  }

  const [destination, source, range] = lines[i].split(" ").map(Number);

  for (let j = 0; j < seeds.length; j++) {
    const seed = seeds[j];
    if (!changed.includes(j) && seed >= source && seed <= source + range - 1) {
      changed.push(j);
      seeds[j] = seed + destination - source;
    }
  }
}

console.log(seeds.sort((a, b) => a - b)[0]);
