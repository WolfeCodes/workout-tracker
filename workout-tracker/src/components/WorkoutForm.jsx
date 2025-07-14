import React, { useState } from "react";

function WorkoutForm({ setWorkouts }) {
  const [exercise, setExercise] = useState("");
  const [sets, setSets] = useState("");
  const [reps, setReps] = useState("");
  const [weight, setWeight] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newWorkout = {
      id: Date.now(),
      exercise,
      sets,
      reps,
      weight,
      createdAt: new Date().toISOString(),
      date: new Date().toLocaleDateString(),
    };

    setWorkouts((prev) => [newWorkout, ...prev]);

    setExercise("");
    setSets("");
    setReps("");
    setWeight("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Exercise name"
        value={exercise}
        onChange={(e) => setExercise(e.target.value)}
        className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
      />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <input
          type="number"
          placeholder="Sets"
          value={sets}
          onChange={(e) => setSets(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <input
          type="number"
          placeholder="Reps"
          value={reps}
          onChange={(e) => setReps(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <input
          type="number"
          placeholder="Weight (lbs)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition"
      >
        Add Workout
      </button>
    </form>
  );
}

export default WorkoutForm;
// This component allows users to log a new workout by entering the exercise name, sets, reps, and weight.
// It manages the form state using React hooks and updates the parent component's workout list when a new workout is added.
// The form includes validation to ensure all fields are filled out before submission.
