export const PLACE_OPTIONS = [
  { id: 'walk', emoji: '🚶', label: 'Spaziergang durch die Stadt' },
  { id: 'harbor', emoji: '⚓', label: 'Hafen' },
  { id: 'home', emoji: '🏠', label: 'Nach Hause' },
  { id: 'park', emoji: '🌳', label: 'Park' },
  { id: 'coffee', emoji: '☕', label: 'Café' },
  { id: 'cinema', emoji: '🎬', label: 'Kino' },
  { id: 'sunset', emoji: '🌅', label: 'Sonnenuntergang anschauen' },
  { id: 'icecream', emoji: '🍦', label: 'Eis irgendwo in der Nähe' },
]

export function getPlaceById(id) {
  return PLACE_OPTIONS.find((place) => place.id === id)
}
