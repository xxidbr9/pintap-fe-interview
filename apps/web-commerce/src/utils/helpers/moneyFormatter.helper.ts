export default function moneyFormatter(money: string | number) {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  })

  return formatter.format(+money).replace('.00', '')
}