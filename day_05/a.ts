import * as fs from "fs";
const input = fs.readFileSync("./day_05/input.txt", "utf8");

const lines = input.split(/\n\s*\n/).map((x) => x.split(/\r?\n|\r|\n/g).filter(Boolean));
const seeds = lines[0][0].replace("seeds: ", "").split(" ").map(Number);

for (let i = 1; i < lines.length; i++) {
  let changed = [];
  for (let j = 1; j < lines[i].length; j++) {
    const [destination, source, range] = lines[i][j].split(" ").map(Number);
    for (let k = 0; k < seeds.length; k++) {
      const seed = seeds[k];
      if (!changed.includes(k) && seed >= source && seed <= source + range - 1) {
        changed.push(k);
        seeds[k] = seed + destination - source;
      }
    }
  }
}

console.log(seeds.sort((a, b) => a - b)[0]);
