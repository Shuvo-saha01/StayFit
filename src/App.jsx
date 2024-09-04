import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import BmiReport from './components/BmiReport'
import MedTimer from './components/MedTimer'
import MeditationClock from './components/MeditationClock'
import MentalQuestion from './components/MentalQuestion'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <MentalQuestion />
    </div>
  )
}

export default App
