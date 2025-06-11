import React, { useState } from "react";
import WorkoutForm from "./components/WorkoutForm";
import WorkoutList from "./components/WorkoutList";

function App() {
  const [workouts, setWorkouts] = useState([]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">🏋️ Workout Tracker</h1>

        {/* Form to log new workouts */}
        <WorkoutForm setWorkouts={setWorkouts} />

        {/* List of all workouts */}
        <WorkoutList workouts={workouts} />
      </div>
    </div>
  );
}

export default App;
