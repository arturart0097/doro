import Modal from './Modal'

export default function CelebrationModal({ onContinue }) {
  return (
    <Modal
      className="modal-yes"
      emoji="🎉"
      celebrate
      title="Hurra!"
      text="Super! Wähle jetzt ein Datum, das dir passt 💕"
    >
      <button type="button" className="btn btn-yes" onClick={onContinue}>
        Datum wählen 📅
      </button>
      <div className="confetti" aria-hidden="true">
        {Array.from({ length: 30 }).map((_, i) => (
          <span key={i} className="confetti-piece" style={{ '--i': i }} />
        ))}
      </div>
    </Modal>
  )
}
