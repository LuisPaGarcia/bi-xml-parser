import * as React from "react";
import { useData } from "../hooks/useData";
import { ObjectType } from "../types/ObjectType";

export const Table = () => {
  const { state } = useData();
  return (
    <table>
      <thead>
        <th>fecha</th>
        <th>tt</th>
        <th>descripcion</th>
        <th>numero-documento</th>
        <th>debe</th>
        <th>haber</th>
        <th>saldo</th>
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
};
