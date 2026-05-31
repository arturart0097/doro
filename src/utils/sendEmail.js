import { formatDateDe } from './dates'

const RECIPIENT_EMAIL =
  import.meta.env.VITE_NOTIFICATION_EMAIL || 'youmaharadchu@gmail.com'

function buildPayload({ date, food, place, movie }) {
  const dateFormatted = formatDateDe(date)
  const movieAnswer = movie.custom
    ? 'Ich möchte den Film selbst auswählen'
    : `${movie.emoji} ${movie.label}`

  const message = [
    'Dorothea hat auf die Einladung geantwortet! 💕',
    '',
    `📅 Datum: ${dateFormatted}`,
    `🍽️ Essen: ${food.emoji} ${food.label}`,
    `📍 Nach dem Abendessen: ${place.emoji} ${place.label}`,
    `🎬 Film: ${movieAnswer}`,
  ].join('\n')

  return {
    subject: '💕 Dorothea hat auf das Date geantwortet!',
    message,
    dateFormatted,
    movieAnswer,
  }
}

async function sendViaWeb3Forms(payload, accessKey) {
  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      access_key: accessKey,
      subject: payload.subject,
      from_name: 'Doro Site',
      message: payload.message,
      date: payload.dateFormatted,
      food: payload.food,
      place: payload.place,
      movie: payload.movieAnswer,
    }),
  })

  const data = await response.json()
  if (!data.success) {
    throw new Error(data.message || 'Email send failed')
  }

  return data
}

async function sendViaFormSubmit(payload) {
  const response = await fetch(
    `https://formsubmit.co/ajax/${encodeURIComponent(RECIPIENT_EMAIL)}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        _subject: payload.subject,
        _captcha: 'false',
        _template: 'table',
        message: payload.message,
        date: payload.dateFormatted,
        food: payload.food,
        place: payload.place,
        movie: payload.movieAnswer,
      }),
    },
  )

  if (!response.ok) {
    throw new Error('Email send failed')
  }

  return response.json()
}

export async function sendResponseEmail({ date, food, place, movie }) {
  const payload = buildPayload({ date, food, place, movie })
  payload.food = `${food.emoji} ${food.label}`
  payload.place = `${place.emoji} ${place.label}`

  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY

  if (accessKey) {
    return sendViaWeb3Forms(payload, accessKey)
  }

  return sendViaFormSubmit(payload)
}
