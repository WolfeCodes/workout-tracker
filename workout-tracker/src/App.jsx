import React, { useState } from "react";
import WorkoutForm from "./components/WorkoutForm";
import WorkoutList from "./components/WorkoutList";

function App() {
  const [workouts, setWorkouts] = useState([]);

  // Clear all workouts (with confirmation)
  const handleClearAll = () => {
    if (confirm("Are you sure you want to delete all workouts?")) {
      setWorkouts([]);
    }
  };


  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">🏋️ Workout Tracker</h1>

        {/* Clear All Workouts */}
        {workouts.length > 0 && (
          <button
            onClick={handleClearAll}
            className="bg-red-600 text-white px-4 py-2 rounded mb-4"
          >
            Clear All Workouts
          </button>
        )}

        {/* Form to log new workouts */}
        <WorkoutForm setWorkouts={setWorkouts} />

        {/* List of all workouts */}
        <WorkoutList workouts={workouts} />
      </div>
    </div>
  );
}

export default App;
