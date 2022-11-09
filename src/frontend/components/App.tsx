import * as React from "react";
import { Table } from "./Table";
import { TypeTable } from "./TypeTable";
export function App(): JSX.Element {
  return (
    <>
      <h1>Dashboard</h1>
      <Table />
      <TypeTable />
    </>
  );
}
