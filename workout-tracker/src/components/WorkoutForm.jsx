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
      createdAt: new Date().toISOString(), // Timestamp for tracking when this workout was addedut
      date: new Date().toLocaleDateString(), // User-friendly date for display
    };

    setWorkouts((prev) => [newWorkout, ...prev]);

    setExercise("");
    setSets("");
    setReps("");
    setWeight("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mb-6">
      <input
        type="text"
        placeholder="Exercise name"
        value={exercise}
        onChange={(e) => setExercise(e.target.value)}
        className="w-full border p=2 rounded"
        required
      />
      <input
        type="number"
        placeholder="Sets"
        value={sets}
        onChange={(e) => setSets(e.target.value)}
        className="w-full border p=2 rounded"
        required
      />
      <input
        type="number"
        placeholder="Reps"
        value={reps}
        onChange={(e) => setReps(e.target.value)}
        className="w-full border p=2 rounded"
        required
      />
      <input
        type="number"
        placeholder="Weight (lbs)"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        className="w-full border p=2 rounded"
        required
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-3 rounded"
      >
        Add Workout
      </button>
    </form>
  );
}

export default WorkoutForm;
