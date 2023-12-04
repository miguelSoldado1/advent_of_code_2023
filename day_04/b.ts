import * as fs from "fs";
const input = fs.readFileSync("./day_04/input.txt", "utf8");
let lines = input.split(/\r?\n|\r|\n/g);

for (let line of lines) {
  let [index, card] = line.split(": ");
  const [winning, personal] = card.split(" | ").map((x) => x.split(" "));
  index = index.split("Card ")[1];

  let count = 0;
  for (const num of winning) {
    if (num && personal.includes(num)) {
      count++;
    }
  }

  lines.push(...lines.slice(Number(index), Number(index) + count));
}

const lineCounts = {};
lines.forEach((line) => {
  const lineType = line.split(":")[0].trim();
  lineCounts[lineType] = (lineCounts[lineType] || 0) + 1;
});

console.log(Object.values(lineCounts).reduce((acc: number, curr: number) => (acc += curr), 0));
