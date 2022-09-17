import { readdir } from "fs/promises";
import {
  buildFilepathInput,
  buildDirectoryInput,
} from "./utils/buildInputPath";
import { readXMLFile } from "./readXMLFile";
import { writeJSONFile } from "./writeJSONFile";
import { buildFilepathOutput } from "./utils/buildOutputPath";
import { mergeMovimientosIntoJson } from "./mergeMovimientosIntoJson";

(async function () {
  try {
    const files = await readdir(buildDirectoryInput());
    const xmlFilepaths = files
      .filter((filename) => filename.endsWith(".xml"))
      .map((filename) => ({
        filename: filename.replace(".xml", ""),
        filepath: buildFilepathInput(filename),
      }));

    for (const { filename, filepath } of xmlFilepaths) {
      console.log("read:", filename);
      const content = await readXMLFile(filepath);
      await writeJSONFile(buildFilepathOutput(filename), content);
      console.log("write:", buildFilepathOutput(filename));
    }
    await mergeMovimientosIntoJson();
    console.log("end!");
  } catch (error) {
    console.log(error);
  }
})();
