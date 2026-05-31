export const TIME_OPTIONS = [
  { id: '14:00', emoji: '🕑', label: '14:00 Uhr' },
  { id: '15:00', emoji: '🕒', label: '15:00 Uhr' },
  { id: '16:00', emoji: '🕓', label: '16:00 Uhr' },
  { id: '17:00', emoji: '🕔', label: '17:00 Uhr' },
  { id: '18:00', emoji: '🕕', label: '18:00 Uhr' },
  { id: '19:00', emoji: '🕖', label: '19:00 Uhr' },
  { id: '20:00', emoji: '🕗', label: '20:00 Uhr' },
  { id: '21:00', emoji: '🕘', label: '21:00 Uhr' },
]

export function getTimeById(id) {
  return TIME_OPTIONS.find((time) => time.id === id)
}
