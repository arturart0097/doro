import { useEffect, useRef } from 'react'
import Modal from './Modal'
import { formatDateUk } from '../utils/dates'
import { sendResponseEmail } from '../utils/sendEmail'
import './SuccessModal.css'

export default function SuccessModal({ date, food, place, movie }) {
  const sentRef = useRef(false)

  useEffect(() => {
    if (sentRef.current) return
    sentRef.current = true

    sendResponseEmail({ date, food, place, movie }).catch((error) => {
      console.error('Failed to send email notification:', error)
    })
  }, [date, food, place, movie])
  const movieText = movie.custom
    ? 'а ввечері ти сама обереш фільм'
    : `а ввечері подивимось ${movie.emoji} «${movie.label}»`

  return (
    <Modal
      className="modal-yes"
      emoji="💑"
      celebrate
      title="Домовились!"
      text={`Чекаю на тебе ${formatDateUk(date)} — ${food.emoji} ${food.label.toLowerCase()}, потім ${place.emoji} ${place.label.toLowerCase()}, ${movieText}. До зустрічі, Дороте! 💕`}
    >
      <p className="success-note">
        Мені було страшно це питати в переписці, тому я вирішив зробити для
        тебе сайт. (нічого особливого)
      </p>
    </Modal>
  )
}
