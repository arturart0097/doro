import './Modal.css'

export default function Modal({
  children,
  className = '',
  emoji,
  celebrate = false,
  title,
  text,
}) {
  return (
    <div className={`modal modal-enter ${className}`.trim()}>
      {emoji && (
        <span className={`modal-emoji${celebrate ? ' celebrate' : ''}`}>
          {emoji}
        </span>
      )}
      {title && <h1 className="modal-title">{title}</h1>}
      {text && <p className="modal-text">{text}</p>}
      {children}
    </div>
  )
}
