import * as React from "react";
import { useData } from "./hooks/useData";
import { ObjectType } from "./types/ObjectType";

export function TypeTable() {
  const state = useData();
  return (
    <table>
      <thead>
        <th>Descripcion</th>
        <th>Comida</th>
        <th>Ocio</th>
        <th>Gasolina</th>
        <th>Servicios</th>
        <th>Super</th>
        <th>Ropa y Zapatos</th>
        <th>Transferencia Electronica</th>
        <th>Cajero</th>
        <th>Otros</th>
        <th>Prestamos</th>
      </thead>
      <tbody>
        {state.map(
          (item: ObjectType): JSX.Element => (
            <tr>
              <td>{item["fecha"]}</td>
              <td>{item["tt"]}</td>
              <td>{item["descripcion"]}</td>
              <td>{item["numero-documento"]}</td>
              <td>{item["debe"]}</td>
              <td>{item["haber"]}</td>
              <td>{item["saldo"]}</td>
            </tr>
          )
        )}
      </tbody>
    </table>
  );
}
