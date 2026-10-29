export function formatXOF(value: number) {
  return new Intl.NumberFormat("fr-SN", {
    style: "currency",
    currency: "XOF",
    maximumFractionDigits: 0,
  }).format(Number(value));
}

export function formatKg(value: number) {
  return `${Number(value).toFixed(2).replace(/\.00$/, "")} kg`;
}

export function formatGrams(valueKg: number) {
  return `${Math.round(valueKg * 1000)} g`;
}

export function formatDate(iso: string) {
  return new Intl.DateTimeFormat("fr-SN", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(iso));
}
