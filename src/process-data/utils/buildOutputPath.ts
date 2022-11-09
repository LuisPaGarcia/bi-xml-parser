import { join } from "path";

export function buildFilepathOutput(
  filename: string,
  extension: string = ".json"
) {
  return join(buildDirectoryOutput(), filename + extension);
}

export function buildDirectoryOutput() {
  return join(__dirname, "../../", "output");
}

export function buildFilepathOutputMerge(){
  return buildFilepathOutput('merge')
}