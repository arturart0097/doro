export const FOOD_OPTIONS = [
  { id: 'pizza', emoji: '🍕', label: 'Pizza' },
  { id: 'pasta', emoji: '🍝', label: 'Pasta' },
  { id: 'salad', emoji: '🥗', label: 'Salat' },
  { id: 'dessert', emoji: '🍰', label: 'Dessert' },
  { id: 'wine', emoji: '🍷', label: 'Wein und Käse' },
  { id: 'tacos', emoji: '🌮', label: 'Vegetarische Tacos' },
  { id: 'falafel', emoji: '🧆', label: 'Falafel' },
  { id: 'soup', emoji: '🍲', label: 'Suppe' },
  { id: 'home', emoji: '🥘', label: 'Etwas Hausgemachtes' },
]

export function getFoodById(id) {
  return FOOD_OPTIONS.find((food) => food.id === id)
}
