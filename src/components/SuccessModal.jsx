import { useEffect, useRef } from 'react'
import Modal from './Modal'
import { formatDateDe } from '../utils/dates'
import { sendResponseEmail } from '../utils/sendEmail'
import './SuccessModal.css'

export default function SuccessModal({ date, time, food, place, movie }) {
  const sentRef = useRef(false)

  useEffect(() => {
    if (sentRef.current) return
    sentRef.current = true

    sendResponseEmail({ date, time, food, place, movie }).catch((error) => {
      console.error('Failed to send email notification:', error)
    })
  }, [date, time, food, place, movie])

  const movieText = movie.custom
    ? 'am Abend wählst du den Film selbst'
    : `am Abend schauen wir ${movie.emoji} «${movie.label}»`

  return (
    <Modal
      className="modal-yes"
      emoji="💑"
      celebrate
      title="Ausgemacht!"
      text={`Ich freue mich auf dich am ${formatDateDe(date)} um ${time.label} — ${food.emoji} ${food.label}, danach ${place.emoji} ${place.label}, ${movieText}. Bis bald, Dorothea! 💕`}
    >
      <p className="success-note">
        Mir war es zu schrecklich, das im Chat zu fragen, deshalb habe ich eine
        Website für dich gemacht. (nichts Besonderes)
      </p>
    </Modal>
  )
}
