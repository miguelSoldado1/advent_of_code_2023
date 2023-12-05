import * as fs from "fs";
const input = fs.readFileSync("./day_06/input.txt", "utf8");

const [a, b] = input.split(/\r?\n|\r|\n/g);
const time = Number(a.replace("Time:", "").replace(/\s/g, ""));
const distance = Number(b.replace("Distance:", "").replace(/\s/g, ""));

let result = 0;

for (let i = 1; i < time; i++) {
  const traveled = (time - i) * i;
  traveled > distance && result++;
}

console.log(result);
