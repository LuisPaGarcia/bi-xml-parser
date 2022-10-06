import { constants } from "fs";
import { readdir, writeFile, access, unlink } from "fs/promises";
import {
  buildDirectoryOutput,
  buildFilepathOutput,
  buildFilepathOutputMerge,
} from "./utils/buildOutputPath";

type MovimientoObjType = {
  fecha: string;
  tt: string;
  descripcion: string;
  "numero-documento": number;
  debe: number;
  haber: number;
  saldo: number;
};

type MovimientoArrType = MovimientoObjType[];

type MovimientoSubObjType = {
  Movimientos: {
    movimiento: MovimientoArrType;
  };
};

type EstadoDeCuentaObjType = {
  "informacion-general": any;
  Movimientos: MovimientoSubObjType;
};

type MovimientosJsonType = {
  "estado-cuenta": EstadoDeCuentaObjType;
};

export async function mergeMovimientosIntoJson() {
  // read the output dir
  // check if merge.json exists
  // if exists, delete
  const mergeFileExists: boolean = await checkIfMergeAlreadyExist();
  console.log("mergeFileExits", mergeFileExists);
  if (mergeFileExists) {
    await deleteMergeFile();
  }
  const filesArr = await readdir(buildDirectoryOutput());
  const jsonFiles = filesArr
    .filter((file) => file.endsWith(".json"))
    .map((file) => buildFilepathOutput(file, ""));

  let mergeContent: MovimientoArrType = [];
  for (const filepath of jsonFiles) {
    const content = await import(filepath);
    const movimientos: MovimientosJsonType =
      content["estado-cuenta"].Movimientos.movimiento;
    //@ts-ignore
    mergeContent = [...mergeContent, ...movimientos];
  }

  console.log(mergeContent.length);
  await writeFile(buildFilepathOutput("merge"), JSON.stringify(mergeContent));
}

async function checkIfMergeAlreadyExist(): Promise<boolean> {
  try {
    await access(buildFilepathOutputMerge(), constants.F_OK);
    return true;
  } catch (error) {
    return false;
  }
}

async function deleteMergeFile() {
  try {
    await unlink(buildFilepathOutputMerge());
    console.log("previus merge file has been erased.");
  } catch (error) {
    console.log(error)
  }
}
