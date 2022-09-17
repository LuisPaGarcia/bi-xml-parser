import * as fs from "fs/promises";

export async function writeJSONFile(ouputFilepath: string, content: string) {
  await fs.writeFile(ouputFilepath, JSON.stringify(content));
}
