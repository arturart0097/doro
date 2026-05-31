import { useState } from 'react'
import HeartsBackground from './components/HeartsBackground'
import AskModal from './components/AskModal'
import CelebrationModal from './components/CelebrationModal'
import DatePickerModal from './components/DatePickerModal'
import TimePickerModal from './components/TimePickerModal'
import FoodPickerModal from './components/FoodPickerModal'
import AfterDinnerModal from './components/AfterDinnerModal'
import MoviePickerModal from './components/MoviePickerModal'
import SuccessModal from './components/SuccessModal'
import './App.css'

function App() {
  const [step, setStep] = useState('ask')
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedTime, setSelectedTime] = useState(null)
  const [selectedFood, setSelectedFood] = useState(null)
  const [selectedPlace, setSelectedPlace] = useState(null)
  const [selectedMovie, setSelectedMovie] = useState(null)

  const overlayClass =
    step === 'movie'
      ? 'modal-overlay modal-overlay--extra-wide'
      : step === 'date' || step === 'time' || step === 'food' || step === 'place'
        ? 'modal-overlay modal-overlay--wide'
        : 'modal-overlay'

  return (
    <div className="page">
      <HeartsBackground />

      <div className={overlayClass}>
        {step === 'ask' && (
          <AskModal key="ask" onYes={() => setStep('celebrate')} />
        )}
        {step === 'celebrate' && (
          <CelebrationModal
            key="celebrate"
            onContinue={() => setStep('date')}
          />
        )}
        {step === 'date' && (
          <DatePickerModal
            key="date"
            onConfirm={(date) => {
              setSelectedDate(date)
              setStep('time')
            }}
          />
        )}
        {step === 'time' && (
          <TimePickerModal
            key="time"
            onConfirm={(time) => {
              setSelectedTime(time)
              setStep('food')
            }}
          />
        )}
        {step === 'food' && (
          <FoodPickerModal
            key="food"
            onConfirm={(food) => {
              setSelectedFood(food)
              setStep('place')
            }}
          />
        )}
        {step === 'place' && (
          <AfterDinnerModal
            key="place"
            onConfirm={(place) => {
              setSelectedPlace(place)
              setStep('movie')
            }}
          />
        )}
        {step === 'movie' && (
          <MoviePickerModal
            key="movie"
            onConfirm={(movie) => {
              setSelectedMovie(movie)
              setStep('done')
            }}
          />
        )}
        {step === 'done' &&
          selectedDate &&
          selectedTime &&
          selectedFood &&
          selectedPlace &&
          selectedMovie && (
          <SuccessModal
            key="done"
            date={selectedDate}
            time={selectedTime}
            food={selectedFood}
            place={selectedPlace}
            movie={selectedMovie}
          />
        )}
      </div>
    </div>
  )
}

export default App
