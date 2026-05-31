const DE_FORMAT = new Intl.DateTimeFormat('de-DE', {
  weekday: 'long',
  day: 'numeric',
  month: 'long',
})

const DE_WEEKDAY = new Intl.DateTimeFormat('de-DE', { weekday: 'short' })
const DE_MONTH = new Intl.DateTimeFormat('de-DE', { month: 'long' })

export function getAvailableDates(count = 14) {
  const dates = []
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  for (let i = 1; i <= count; i++) {
    const date = new Date(today)
    date.setDate(date.getDate() + i)
    dates.push(date)
  }

  return dates
}

export function formatDateDe(date) {
  return DE_FORMAT.format(date)
}

export function formatDateParts(date) {
  return {
    day: date.getDate(),
    weekday: DE_WEEKDAY.format(date),
    month: DE_MONTH.format(date),
  }
}

export function toDateKey(date) {
  return date.toISOString().slice(0, 10)
}
