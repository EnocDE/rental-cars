export function formatPrice(amount: string) {
  return new Intl.NumberFormat("es-MX", {currency: "MXN", style: "currency"}).format(parseInt(amount))
}

export function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en-US", {dateStyle: "medium"}).format(date)
}

export function countTotalAmount(amounts: number[]) {
  return amounts.reduce((acc, amount) => acc += amount, 0)
}