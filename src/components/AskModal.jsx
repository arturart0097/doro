import { useState, useCallback } from 'react'
import Modal from './Modal'

const NO_MESSAGES = [
  'Ти впевнена? 🥺',
  'Подумай ще раз…',
  'Пліз, Дороте 💕',
  'Я буду дуже сумувати…',
  'Останній шанс! 😊',
]

export default function AskModal({ onYes }) {
  const [noCount, setNoCount] = useState(0)
  const [noPos, setNoPos] = useState({ x: 0, y: 0 })
  const [yesScale, setYesScale] = useState(1)

  const moveNoButton = useCallback(() => {
    const maxX = 120
    const maxY = 80
    setNoPos({
      x: (Math.random() - 0.5) * 2 * maxX,
      y: (Math.random() - 0.5) * 2 * maxY,
    })
    setYesScale((s) => Math.min(s + 0.15, 2))
  }, [])

  const handleNo = () => {
    moveNoButton()
    if (noCount < NO_MESSAGES.length - 1) {
      setNoCount((c) => c + 1)
    }
  }

  return (
    <Modal
      emoji="🌸"
      title="Привіт, Дороте!"
      text={
        noCount === 0
          ? 'Ти підеш зі мною на побачення?'
          : NO_MESSAGES[noCount]
      }
    >
      <div className="modal-actions">
        <button
          type="button"
          className="btn btn-yes"
          style={{ transform: `scale(${yesScale})` }}
          onClick={onYes}
        >
          Так 💖
        </button>
        <button
          type="button"
          className="btn btn-no"
          style={{ transform: `translate(${noPos.x}px, ${noPos.y}px)` }}
          onMouseEnter={moveNoButton}
          onClick={handleNo}
        >
          Ні
        </button>
      </div>
    </Modal>
  )
}
