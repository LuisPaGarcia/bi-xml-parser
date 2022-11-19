import { ObjectType } from "../types/ObjectType";
import { toMoney } from "./toMoney";

export const processData = (data: ObjectType[]): ObjectType[] => {
  // add toMoney to debe, haber y saldo
  return data.map((tuple: ObjectType) => {
    return {
      ...tuple,
      debe: toMoney(Number(tuple.debe)),
      haber: toMoney(Number(tuple.haber)),
      saldo: toMoney(Number(tuple.saldo)),
    };
  });
};
