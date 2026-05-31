import Modal from './Modal'

export default function CelebrationModal({ onContinue }) {
  return (
    <Modal
      className="modal-yes"
      emoji="🎉"
      celebrate
      title="Ура!"
      text="Чудово! Тепер обери дату, яка тобі підходить 💕"
    >
      <button type="button" className="btn btn-yes" onClick={onContinue}>
        Обрати дату 📅
      </button>
      <div className="confetti" aria-hidden="true">
        {Array.from({ length: 30 }).map((_, i) => (
          <span key={i} className="confetti-piece" style={{ '--i': i }} />
        ))}
      </div>
    </Modal>
  )
}
