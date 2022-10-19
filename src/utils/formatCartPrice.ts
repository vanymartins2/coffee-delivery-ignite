const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: 'BRL',
  style: 'currency'
})

export function formatCartPrice(number: number) {
  return CURRENCY_FORMATTER.format(number)
}
