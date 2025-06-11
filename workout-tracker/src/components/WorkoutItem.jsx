import React from "react";

function WorkoutItem({ workout }) {
  const { exercise, sets, reps, weight, date } = workout;

  return (
    <div className="border p-4 rounded shadow-sm bg-white">
      <p className="text-xl font-semibold">{exercise}</p>
      <p className="text-gray-700">
        {sets} sets x {reps} reps @ {weight} lbs
      </p>
      <p className="text-sm text-gray-500">Logged on: {date}</p>
    </div>
  );
}

export default WorkoutItem;
