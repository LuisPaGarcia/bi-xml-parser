import { join } from "path";

export function buildFilepathInput(filename: string) {
  return join(buildDirectoryInput(), filename);
}
export function buildDirectoryInput() {
  return join(__dirname, "../../", "input");
}
