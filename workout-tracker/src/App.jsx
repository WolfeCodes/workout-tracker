import WorkoutForm from './components/WorkoutForm'
import WorkoutList from './components/WorkoutList'
import { useState } from 'react'

function App() {
  const [workouts, setWorkouts] = useState([])

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">🏋️ Workout Tracker</h1>
      <WorkoutForm setWorkouts={setWorkouts} />
      <WorkoutList workouts={workouts} />
    </div>
  )
}

export default App
