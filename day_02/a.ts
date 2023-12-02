import * as fs from "fs";
const input = fs.readFileSync("./day_02/input.txt", "utf8");

let lines = input.split("\n");
lines = lines.map((line) => line.split(": ")[1]);
let count = 0;

for (const [index, line] of lines.entries()) {
  const colors = { red: 0, green: 0, blue: 0 };

  for (const game of line.split("; ")) {
    for (const play of game.split(", ")) {
      const [num, color] = play.split(" ");

      colors[color.trim()] = Math.max(Number(num.trim()), colors[color.trim()]);
    }
  }
  if (colors.red <= 12 && colors.green <= 13 && colors.blue <= 14) {
    count += index + 1;
  }
}

console.log(count);
