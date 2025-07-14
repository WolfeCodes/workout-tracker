import React from "react";
import WorkoutItem from "./WorkoutItem";

function WorkoutList({ workouts, setWorkouts }) {
  if (workouts.length === 0) {
    return (
      <p className="text-center text-gray-500 text-sm italic">
        No workouts logged yet.
      </p>
    );
  }

  // Delete handler
  const handleDelete = (idToDelete) => {
    const updated = workouts.filter((w) => w.id !== idToDelete);
    setWorkouts(updated);
  };

  // Edit handler
  const handleEdit = (idToEdit, updatedWorkout) => {
    const updated = workouts.map((w) =>
      w.id === idToEdit ? { ...w, ...updatedWorkout } : w
    );
    setWorkouts(updated);
  };

  return (
    <div className="space-y-4">
      {workouts.map((workout) => (
        <WorkoutItem
          key={workout.id}
          workout={workout}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      ))}
    </div>
  );
}

export default WorkoutList;
// This component displays a list of workouts, allowing users to delete or edit each workout.
// It uses the WorkoutItem component to render each individual workout.
// The component receives the list of workouts and functions to handle deletion and editing.
// If there are no workouts, it displays a message indicating that no workouts have been logged yet
