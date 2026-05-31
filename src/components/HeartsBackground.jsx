export default function HeartsBackground() {
  return (
    <div className="hearts-bg" aria-hidden="true">
      {Array.from({ length: 18 }).map((_, i) => (
        <span key={i} className="heart" style={{ '--i': i }} />
      ))}
    </div>
  )
}
