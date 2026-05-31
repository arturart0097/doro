import { useState } from 'react'
import Modal from './Modal'
import { MOVIE_SECTIONS, CUSTOM_MOVIE_CHOICE, getMovieById } from '../utils/movies'
import './MoviePickerModal.css'

export default function MoviePickerModal({ onConfirm }) {
  const [selected, setSelected] = useState(null)

  const chosen = getMovieById(selected)

  return (
    <Modal
      emoji="🎥"
      title="Який фільм на вечір?"
      text="На твій вибір, Дороте — обери, що хочеться подивитись"
    >
      {MOVIE_SECTIONS.map((section) => (
        <section key={section.id} className="movie-section">
          <h2 className="movie-section-title">{section.title}</h2>
          <div className="movie-grid">
            {section.movies.map((movie) => {
              const isSelected = selected === movie.id

              return (
                <button
                  key={movie.id}
                  type="button"
                  className={`movie-cell${isSelected ? ' movie-cell--selected' : ''}`}
                  onClick={() => setSelected(movie.id)}
                  aria-pressed={isSelected}
                >
                  <span className="movie-cell-emoji">{movie.emoji}</span>
                  <span className="movie-cell-label">{movie.label}</span>
                </button>
              )
            })}
          </div>
        </section>
      ))}

      <button
        type="button"
        className={`movie-custom-btn${selected === CUSTOM_MOVIE_CHOICE.id ? ' movie-custom-btn--selected' : ''}`}
        onClick={() => setSelected(CUSTOM_MOVIE_CHOICE.id)}
        aria-pressed={selected === CUSTOM_MOVIE_CHOICE.id}
      >
        <span className="movie-custom-btn-emoji">{CUSTOM_MOVIE_CHOICE.emoji}</span>
        {CUSTOM_MOVIE_CHOICE.label}
      </button>

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
        <p className="movie-picker-hint">
          {chosen.custom
            ? `${chosen.emoji} Добре, тоді фільм обереш ти!`
            : `${chosen.emoji} «${chosen.label}» — гарний вибір!`}
        </p>
      )}
    </Modal>
  )
}
