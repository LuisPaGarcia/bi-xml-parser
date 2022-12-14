const { readFile } = require("fs/promises");
import { XMLParser } from "fast-xml-parser";

export async function readXMLFile(filepath: string) {
  const xmlDataStr = await readFile(filepath);

  const options = {
    ignoreAttributes: false,
  };
  const parser = new XMLParser(options);
  return parser.parse(xmlDataStr);
}
