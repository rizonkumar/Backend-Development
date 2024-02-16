import { readFile, writeFile } from "fs/promises";

const filePath = new URL("./index.html", import.meta.url);
let contents = await readFile(filePath, { encoding: "utf-8" });

const data = {
  name: "Rizon Kumar",
  company: "Merkle",
  age: 23,
};

for (const [key, value] of Object.entries(data)) {
  contents = contents.replace(`{{${key}}}`, value);
}

await writeFile(filePath, contents);
console.log(contents);
