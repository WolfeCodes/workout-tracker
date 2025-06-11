import React from "react";
import WorkoutItem from "./WorkoutItem";

function WorkoutList({ workouts }) {
  if (workouts.length === 0) {
    return <p className="text-center text-gray-500">No workouts logged yet.</p>;
  }

  return (
    <div className="space-y-4">
      {workouts.map((workout) => (
        <WorkoutItem key={workout.id} workout={workout} />
      ))}
    </div>
  );
}

export default WorkoutList;
