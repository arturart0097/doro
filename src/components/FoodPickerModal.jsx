import { useState } from 'react'
import Modal from './Modal'
import { FOOD_OPTIONS } from '../utils/foods'
import './FoodPickerModal.css'

export default function FoodPickerModal({ onConfirm }) {
  const [selected, setSelected] = useState(null)

  const chosen = FOOD_OPTIONS.find((food) => food.id === selected)

  return (
    <Modal emoji="🍽️" title="Що будемо їсти?" text="Обери, що тобі хочеться на побаченні">
      <div className="food-grid">
        {FOOD_OPTIONS.map((food) => {
          const isSelected = selected === food.id

          return (
            <button
              key={food.id}
              type="button"
              className={`food-cell${isSelected ? ' food-cell--selected' : ''}`}
              onClick={() => setSelected(food.id)}
              aria-pressed={isSelected}
            >
              <span className="food-cell-emoji">{food.emoji}</span>
              <span className="food-cell-label">{food.label}</span>
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
          Підтвердити 💖
        </button>
      </div>

      {chosen && (
        <p className="food-picker-hint">
          {chosen.emoji} {chosen.label} — чудовий вибір!
        </p>
      )}
    </Modal>
  )
}
