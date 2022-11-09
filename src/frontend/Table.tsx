import * as React from "react";
type ObjectType = {
  fecha: string;
  tt: string;
  descripcion: string;
  "numero-documento": string;
  debe: string;
  haber: string;
  saldo: string;
  tipo?: string;
};
const toMoney = (value: number) =>
  new Intl.NumberFormat("es", {
    style: "currency",
    currency: "GTQ",
  }).format(value);

const matchType = (descripcion: string) => {
  return descripcion; // Create array match here
};

const processData = (data: ObjectType[]): ObjectType[] => {
  // add toMoney to debe, haber y saldo
  return data.map((tuple: ObjectType) => {
    return {
      ...tuple,
      debe: toMoney(Number(tuple.debe)),
      haber: toMoney(Number(tuple.haber)),
      saldo: toMoney(Number(tuple.saldo)),
      tipo: matchType(tuple.descripcion),
    };
  });
};

export const Table = () => {
  const [state, stateSet] = React.useState<ObjectType[]>([]);
  React.useEffect(() => {
    const getData = async () => {
      //@ts-ignore
      const data = await import("../../output/merge.json");
      stateSet(processData(data));
    };
    getData();
  }, []);
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
