import { useState } from 'react'
import Modal from './Modal'
import { PLACE_OPTIONS } from '../utils/places'
import './AfterDinnerModal.css'

export default function AfterDinnerModal({ onConfirm }) {
  const [selected, setSelected] = useState(null)

  const chosen = PLACE_OPTIONS.find((place) => place.id === selected)

  return (
    <Modal
      emoji="🌙"
      title="Wohin gehen wir nach dem Abendessen?"
      text="Wähle, wohin du als Nächstes möchtest"
    >
      <div className="place-grid">
        {PLACE_OPTIONS.map((place) => {
          const isSelected = selected === place.id

          return (
            <button
              key={place.id}
              type="button"
              className={`place-cell${isSelected ? ' place-cell--selected' : ''}`}
              onClick={() => setSelected(place.id)}
              aria-pressed={isSelected}
            >
              <span className="place-cell-emoji">{place.emoji}</span>
              <span className="place-cell-label">{place.label}</span>
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
        <p className="place-picker-hint">
          {chosen.emoji} {chosen.label} — das klingt romantisch!
        </p>
      )}
    </Modal>
  )
}
