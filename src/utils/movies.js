export const MOVIE_SECTIONS = [
  {
    id: 'candles',
    title: '16 свічок',
    movies: [
      { id: 'candles-1', emoji: '🕯️', label: '16 свічок' },
      { id: 'candles-2', emoji: '🕯️', label: '16 свічок' },
      { id: 'candles-3', emoji: '🕯️', label: '16 свічок' },
    ],
  },
  {
    id: 'burton',
    title: 'Фільми Тіма Бертона',
    movies: [
      { id: 'edward', emoji: '✂️', label: 'Едвард з ножицями' },
      { id: 'nightmare', emoji: '🎃', label: 'Кошмар перед Різдвом' },
      { id: 'beetlejuice', emoji: '👻', label: 'Бітлджус' },
      { id: 'corpse', emoji: '💀', label: 'Труп нареченої' },
      { id: 'charlie', emoji: '🍫', label: 'Чарлі і шоколадна фабрика' },
    ],
  },
  {
    id: 'bw',
    title: 'Чорно-білі фільми',
    movies: [
      { id: 'casablanca', emoji: '🎬', label: 'Касабланка' },
      { id: 'roman', emoji: '🛵', label: 'Римські канікули' },
      { id: 'sunset', emoji: '🌆', label: 'Бульвар Сансет' },
      { id: 'jury', emoji: '⚖️', label: '12 розгніваних чоловіків' },
      { id: 'modern', emoji: '🎩', label: 'Сучасні часи' },
    ],
  },
]

export const CUSTOM_MOVIE_CHOICE = {
  id: 'custom',
  emoji: '✨',
  label: 'Я сама хочу обрати фільм',
  custom: true,
}

export const MOVIE_OPTIONS = [
  ...MOVIE_SECTIONS.flatMap((section) =>
    section.movies.map((movie) => ({ ...movie, section: section.id })),
  ),
  CUSTOM_MOVIE_CHOICE,
]

export function getMovieById(id) {
  return MOVIE_OPTIONS.find((movie) => movie.id === id)
}
