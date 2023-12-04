import * as fs from "fs";
const input = fs.readFileSync("./day_04/input.txt", "utf8");
let lines = input.split(/\r?\n|\r|\n/g);

const indexes: number[] = [...Array(lines.length).keys()];
const cardValues = new Map<number, number>();
const cardAmounts = new Map<number, number>();

for (let index of indexes) {
  index = index + 1;
  if (!cardValues.has(index)) {
    const count = solveCard(lines[index - 1]);
    cardValues.set(index, count);
  }

  cardAmounts.set(index, (cardAmounts.get(index) ?? 0) + 1);
  indexes.push(...[...Array(cardValues.get(index)).keys()].map((i) => i + index));
}

function solveCard(line: string) {
  let count = 0;
  line = line.split(": ")[1];
  const [winning, personal] = line.split(" | ").map((x) => x.split(" "));
  for (const num of winning) {
    if (num && personal.includes(num)) {
      count++;
    }
  }
  return count;
}

console.log(Array.from(cardAmounts.values()).reduce((acc, curr) => acc + curr, 0));
