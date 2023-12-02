import * as fs from "fs";
const input = fs.readFileSync("./day_02/input.txt", "utf8");

let lines = input.split("\n");
lines = lines.map((line) => line.split(": ")[1]);
let count = 0;

for (const [index, line] of lines.entries()) {
  const maxColors = { red: 0, green: 0, blue: 0 };

  for (const game of line.split("; ")) {
    for (const play of game.split(", ")) {
      const [num, color] = play.split(" ");

      maxColors[color.trim()] = Math.max(Number(num.trim()), maxColors[color.trim()]);
    }
  }
  count += maxColors.red * maxColors.green * maxColors.blue;
}

console.log(count);
