import { readdir, writeFile } from "fs/promises";
import {
  buildDirectoryOutput,
  buildFilepathOutput,
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
