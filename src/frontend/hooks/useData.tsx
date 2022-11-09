import { useState, useEffect } from "react";
import { ObjectType } from "../types/ObjectType";
import { processData } from "../utils/processData";

export function useData() {
  const [state, stateSet] = useState<ObjectType[]>([]);

  useEffect(() => {
    const getData = async () => {
      //@ts-ignore
      const data = await import("../../../output/merge.json");
      stateSet(processData(data));
    };
    getData();
  }, []);
  return state;
}
