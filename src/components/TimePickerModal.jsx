import { useState } from 'react'
import Modal from './Modal'
import { TIME_OPTIONS } from '../utils/times'
import './TimePickerModal.css'

export default function TimePickerModal({ onConfirm }) {
  const [selected, setSelected] = useState(null)

  const chosen = TIME_OPTIONS.find((time) => time.id === selected)

  return (
    <Modal
      emoji="🕐"
      title="Wann soll ich zu dir kommen?"
      text="Wähle eine Uhrzeit, die dir passt"
    >
      <div className="time-grid">
        {TIME_OPTIONS.map((time) => {
          const isSelected = selected === time.id

          return (
            <button
              key={time.id}
              type="button"
              className={`time-cell${isSelected ? ' time-cell--selected' : ''}`}
              onClick={() => setSelected(time.id)}
              aria-pressed={isSelected}
            >
              <span className="time-cell-emoji">{time.emoji}</span>
              <span className="time-cell-label">{time.label}</span>
            </button>
          )
        })}
      </div>

      <div className="modal-actions">
        <button
          type="button"
          className="btn btn-yes"
          disabled={!selected}
          onClick={() => chosen && onConfirm(chosen)}
        >
          Bestätigen 💖
        </button>
      </div>

      {chosen && (
        <p className="time-picker-hint">
          {chosen.emoji} {chosen.label} — perfekt!
        </p>
      )}
    </Modal>
  )
}
