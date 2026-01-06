export function moneyEUR(value: number) {
  return new Intl.NumberFormat("ru-RU", { style: "currency", currency: "EUR" }).format(value);
}