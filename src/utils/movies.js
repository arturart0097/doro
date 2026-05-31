export const MOVIE_SECTIONS = [
  {
    id: 'candles',
    title: '16 Kerzen',
    movies: [
      { id: 'candles-1', emoji: '🕯️', label: '16 Kerzen' },
      { id: 'candles-2', emoji: '🕯️', label: '16 Kerzen' },
      { id: 'candles-3', emoji: '🕯️', label: '16 Kerzen' },
    ],
  },
  {
    id: 'burton',
    title: 'Tim-Burton-Filme',
    movies: [
      { id: 'edward', emoji: '✂️', label: 'Edward mit den Scherenhänden' },
      { id: 'nightmare', emoji: '🎃', label: 'Alptraum vor Weihnachten' },
      { id: 'beetlejuice', emoji: '👻', label: 'Beetlejuice' },
      { id: 'corpse', emoji: '💀', label: 'Corpse Bride' },
      { id: 'charlie', emoji: '🍫', label: 'Charlie und die Schokoladenfabrik' },
    ],
  },
  {
    id: 'bw',
    title: 'Schwarz-weiße Filme',
    movies: [
      { id: 'casablanca', emoji: '🎬', label: 'Casablanca' },
      { id: 'roman', emoji: '🛵', label: 'Römische Ferien' },
      { id: 'sunset', emoji: '🌆', label: 'Boulevard der Dämmerung' },
      { id: 'jury', emoji: '⚖️', label: 'Die zwölf Geschworenen' },
      { id: 'modern', emoji: '🎩', label: 'Moderne Zeiten' },
    ],
  },
]

export const CUSTOM_MOVIE_CHOICE = {
  id: 'custom',
  emoji: '✨',
  label: 'Ich möchte den Film selbst auswählen',
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
