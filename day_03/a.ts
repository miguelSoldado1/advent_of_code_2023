// NOT WORKING :((((((((((((

import * as fs from "fs";

const input = fs.readFileSync("./day_03/input.txt", "utf8");
const lines = input.split(/\r?\n|\r|\n/g);
let result = 0;

for (const [index, line] of lines.entries()) {
  const parts = line.match(/\d+/g) || [];
  loop: for (const part of parts) {
    const startIndex = line.indexOf(part);
    for (let y = Math.max(index - 1, 0); y <= Math.min(index + 1, lines.length - 1); y++) {
      for (let x = Math.max(startIndex - 1, 0); x <= Math.min(startIndex + part.length, lines[index].length - 1); x++) {
        const curr = lines[y][x];
        if (curr !== "." && isNaN(Number(curr))) {
          result += Number(part);
          continue loop;
        }
      }
    }
  }
}

console.log(result);
