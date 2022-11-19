export type ObjectType = {
  fecha: string;
  tt: string;
  descripcion: string;
  "numero-documento": number;
  debe: number | string;
  haber: number | string;
  saldo: number | string;
  tipo?: string;
  id: string;
};
