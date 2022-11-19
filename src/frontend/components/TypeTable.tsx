import * as React from "react";
import { useData } from "../hooks/useData";
import { ObjectType } from "../types/ObjectType";

const rubrosArr = [
  "Descripcion",
  "Comida",
  "Ocio",
  "Gasolina",
  "Servicios",
  "Super",
  "Ropa y Zapatos",
  "Transferencia Electronica",
  "Cajero",
  "Otros",
  "Prestamos",
];
// Remove `Description`
const rubroArrShift = rubrosArr.slice(1);

export function TypeTable() {
  const { state, stateSet } = useData();

  const handleChange = ({
    item,
    rubro,
  }: {
    item: ObjectType;
    rubro: string;
  }) => {
    console.log(item, rubro);
    stateSet((prevState) => {
      return prevState.map((obj) => {
        if (obj.id === item.id) {
          return {
            ...obj,
            tipo: rubro,
          };
        }
        return obj;
      });
    });
  };

  return (
    <table>
      <thead>
        <tr>
          {rubrosArr.map((rubro) => (
            <th key={rubro}>{rubro}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {state.map(
          (item: ObjectType): JSX.Element => (
            <tr key={item.id}>
              <td>{item["descripcion"]}</td>
              {rubroArrShift.map((rubro) => (
                <td key={rubro}>
                  <input
                    onChange={() => handleChange({ item, rubro })}
                    name={`${item.descripcion}-${item.id}`}
                    type="radio"
                    value={rubro}
                    checked={rubro === item.tipo}
                  />
                </td>
              ))}
            </tr>
          )
        )}
      </tbody>
    </table>
  );
}
