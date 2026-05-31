export const PLACE_OPTIONS = [
  { id: 'walk', emoji: '🚶', label: 'Прогулянка по місту' },
  { id: 'harbor', emoji: '⚓', label: 'Гавань' },
  { id: 'home', emoji: '🏠', label: 'Додому' },
  { id: 'park', emoji: '🌳', label: 'Парк' },
  { id: 'coffee', emoji: '☕', label: 'Кавярня' },
  { id: 'cinema', emoji: '🎬', label: 'Кіно' },
  { id: 'sunset', emoji: '🌅', label: 'Зустріти захід сонця' },
  { id: 'icecream', emoji: '🍦', label: 'Морозиво десь поруч' },
]

export function getPlaceById(id) {
  return PLACE_OPTIONS.find((place) => place.id === id)
}
