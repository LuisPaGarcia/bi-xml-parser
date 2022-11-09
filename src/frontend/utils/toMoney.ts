export const toMoney = (value: number) =>
  new Intl.NumberFormat("es", {
    style: "currency",
    currency: "GTQ",
  }).format(value);
