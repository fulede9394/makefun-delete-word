// The single most deletable word in the English language.
// Say it out loud. It sounds like a wet sponge. Delete it anyway.
import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

const doomedWord = "Squelch";

function checkWord(text: string): void {
  if (text.length === 0) throw new Error("word is empty");
  if (text.length > 77) throw new Error("word exceeds the limit");
  if (/\s/.test(text)) throw new Error("entry must be a single word");
}

checkWord(doomedWord);
const folder = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdir(folder, { recursive: true })
  .then(() => writeFile(join(folder, "entry.txt"), doomedWord, "utf8"))
  .catch((err: unknown) => {
    throw err;
  });
