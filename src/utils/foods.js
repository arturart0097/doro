export const FOOD_OPTIONS = [
  { id: 'pizza', emoji: '🍕', label: 'Піца' },
  { id: 'pasta', emoji: '🍝', label: 'Паста' },
  { id: 'salad', emoji: '🥗', label: 'Салат' },
  { id: 'dessert', emoji: '🍰', label: 'Десерт' },
  { id: 'wine', emoji: '🍷', label: 'Вино та сир' },
  { id: 'tacos', emoji: '🌮', label: 'Вегетаріанські тако' },
  { id: 'falafel', emoji: '🧆', label: 'Фалафел' },
  { id: 'soup', emoji: '🍲', label: 'Суп' },
  { id: 'home', emoji: '🥘', label: 'Щось домашнє' },
]

export function getFoodById(id) {
  return FOOD_OPTIONS.find((food) => food.id === id)
}
