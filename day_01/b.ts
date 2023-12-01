import * as fs from "fs";
const input = fs.readFileSync("./day_01/input.txt", "utf8");

const lines = input.split(/\r?\n|\r|\n/g);
const numbers = [];

for (let line of lines) {
  let first = "";
  let last = "";
  for (let i = 0; i < line.length; i++) {
    if (first && last) break;

    const a = line.at(i);
    if (!first && !isNaN(Number(a))) {
      first = a;
    }

    if (!first) {
      const number = findInNumbersStr(line.slice(0, i + 1));
      if (number) first = number;
    }

    const b = line.at(-1 - i);
    if (!last && !isNaN(Number(b))) {
      last = b;
    }

    if (!last) {
      const number = findInNumbersStr(line.slice(line.length - 1 - i, line.length));
      if (number) last = number;
    }
  }
  numbers.push(Number(first + last));
}

console.log(numbers.reduce((acc, curr) => acc + curr, 0));

function findInNumbersStr(str: string): string | null {
  const numbersStr = {
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    nine: "9",
  };

  for (const [key, value] of Object.entries(numbersStr)) {
    if (str.includes(key)) return value;
  }
  return null;
}
