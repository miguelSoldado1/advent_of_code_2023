import * as fs from "fs";
const input = fs.readFileSync("./day_06/input.txt", "utf8");

const [a, b] = input.split(/\r?\n|\r|\n/g);
const times = a.replace("Time:", "").trim().split("     ").map(Number);
const distances = b.replace("Distance:", "").trim().split("   ").map(Number);
let result = 1;

for (let i = 0; i < times.length; i++) {
  let counter = 0;
  const [time, distance] = [times[i], distances[i]];
  for (let j = 1; j < time; j++) {
    const traveled = (time - j) * j;
    traveled > distance && counter++;
  }
  result *= counter;
}

console.log(result);
