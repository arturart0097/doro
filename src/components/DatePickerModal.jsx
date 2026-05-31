import { useMemo, useState } from 'react'
import Modal from './Modal'
import {
  formatDateParts,
  formatDateUk,
  getAvailableDates,
  toDateKey,
} from '../utils/dates'
import './DatePickerModal.css'

export default function DatePickerModal({ onConfirm }) {
  const dates = useMemo(() => getAvailableDates(14), [])
  const [selected, setSelected] = useState(null)

  const monthLabel = dates[0]
    ? new Intl.DateTimeFormat('uk-UA', { month: 'long', year: 'numeric' }).format(
        dates[0],
      )
    : ''

  return (
    <Modal
      emoji="📅"
      title="Обери дату"
      text="На яке число тобі зручно?"
    >
      <p className="date-picker-month">{monthLabel}</p>
      <div className="date-grid">
        {dates.map((date) => {
          const { day, weekday } = formatDateParts(date)
          const key = toDateKey(date)
          const isSelected = selected === key

          return (
            <button
              key={key}
              type="button"
              className={`date-cell${isSelected ? ' date-cell--selected' : ''}`}
              onClick={() => setSelected(key)}
              aria-pressed={isSelected}
            >
              <span className="date-cell-weekday">{weekday}</span>
              <span className="date-cell-day">{day}</span>
            </button>
          )
        })}
      </div>

      <div className="modal-actions">
        <button
          type="button"
          className="btn btn-yes"
          disabled={!selected}
          onClick={() => {
            const date = dates.find((d) => toDateKey(d) === selected)
            if (date) onConfirm(date)
          }}
        >
          Підтвердити 💖
        </button>
      </div>

      {selected && (
        <p className="date-picker-hint">
          {formatDateUk(dates.find((d) => toDateKey(d) === selected))}
        </p>
      )}
    </Modal>
  )
}
