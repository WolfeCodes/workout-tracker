import React, { useState, useEffect } from "react";
import WorkoutForm from "./components/WorkoutForm";
import WorkoutList from "./components/WorkoutList";

function App() {
  const [workouts, setWorkouts] = useState(() => {
    const stored = localStorage.getItem("workouts");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("workouts", JSON.stringify(workouts));
  }, [workouts]);

  const handleClearAll = () => {
    if (confirm("Are you sure you want to delete all workouts?")) {
      setWorkouts([]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 p-6">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-xl p-6 space-y-6">
        <h1 className="text-4xl font-bold text-center text-gray-800">🏋️ Workout Tracker</h1>

        {workouts.length > 0 && (
          <button
            onClick={handleClearAll}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition"
          >
            Clear All Workouts
          </button>
        )}

        <WorkoutForm setWorkouts={setWorkouts} />
        <WorkoutList workouts={workouts} setWorkouts={setWorkouts} />

        <footer className="text-center text-sm text-gray-400 pt-6">
          Built by Wolfe
        </footer>
      </div>
    </div>
  );
}

export default App;
// This is the main application component for the Workout Tracker.
// It manages the state of workouts and renders the WorkoutForm and WorkoutList components.
// It also provides a button to clear all workouts with a confirmation prompt.
// The component uses React hooks to manage state and effects, and it styles the application using Tailwind CSS classes.
// The workouts are stored in a state variable, and the setWorkouts function is passed down to child components to allow them to update the list of workouts.
// The application is designed to be responsive and user-friendly, providing a simple interface for tracking workouts.
// The main features include adding new workouts, viewing a list of logged workouts, and clearing all workouts with confirmation.
// The component is structured to be modular, with separate components for the workout form and workout list, promoting reusability and maintainability.
// The use of Tailwind CSS allows for quick styling and responsive design, making the application visually appealing and easy to use.
// The application is built with React, leveraging its component-based architecture to create a clean and organized codebase.
// The WorkoutForm component handles the input for new workouts, while the WorkoutList component displays the logged workouts.
// The application is designed to be easily extendable, allowing for future features such as workout history, statistics, or user authentication.
// Overall, this component serves as the foundation for a workout tracking application, providing essential functionality for users to log and manage their workouts effectively
