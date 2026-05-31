const UK_FORMAT = new Intl.DateTimeFormat('uk-UA', {
  weekday: 'long',
  day: 'numeric',
  month: 'long',
})

const UK_WEEKDAY = new Intl.DateTimeFormat('uk-UA', { weekday: 'short' })
const UK_MONTH = new Intl.DateTimeFormat('uk-UA', { month: 'long' })

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

export function formatDateUk(date) {
  return UK_FORMAT.format(date)
}

export function formatDateParts(date) {
  return {
    day: date.getDate(),
    weekday: UK_WEEKDAY.format(date),
    month: UK_MONTH.format(date),
  }
}

export function toDateKey(date) {
  return date.toISOString().slice(0, 10)
}
