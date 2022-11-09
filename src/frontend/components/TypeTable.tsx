import * as React from "react";
import { useData } from "../hooks/useData";
import { ObjectType } from "../types/ObjectType";

export function TypeTable() {
  const { state } = useData();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    console.log(event.target.value);
  };

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
              <td>{item["descripcion"]}</td>
              <td>
                <input
                  onChange={handleChange}
                  name="type"
                  type="radio"
                  value="Comida"
                />
              </td>
              <td>
                <input
                  onChange={handleChange}
                  name="type"
                  type="radio"
                  value="Ocio"
                />
              </td>
              <td>
                <input
                  onChange={handleChange}
                  name="type"
                  type="radio"
                  value="Gasolina"
                />
              </td>
              <td>
                <input
                  onChange={handleChange}
                  name="type"
                  type="radio"
                  value="Servicios"
                />
              </td>
              <td>
                <input
                  onChange={handleChange}
                  name="type"
                  type="radio"
                  value="Super"
                />
              </td>
              <td>
                <input
                  onChange={handleChange}
                  name="type"
                  type="radio"
                  value="Ropa y Zapatos"
                />
              </td>
              <td>
                <input
                  onChange={handleChange}
                  name="type"
                  type="radio"
                  value="Transferencia Electronica"
                />
              </td>
              <td>
                <input
                  onChange={handleChange}
                  name="type"
                  type="radio"
                  value="Cajero"
                />
              </td>
              <td>
                <input
                  onChange={handleChange}
                  name="type"
                  type="radio"
                  value="Otros"
                />
              </td>
              <td>
                <input
                  onChange={handleChange}
                  name="type"
                  type="radio"
                  value="Prestamos"
                />
              </td>
            </tr>
          )
        )}
      </tbody>
    </table>
  );
}
