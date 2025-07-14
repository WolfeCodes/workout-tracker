import React, { useState } from "react";

function WorkoutItem({ workout, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ ...workout });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onEdit(workout.id, formData);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <form onSubmit={handleSubmit} className="border border-gray-300 p-4 rounded-lg shadow-sm bg-white space-y-2">
        <input
          name="exercise"
          value={formData.exercise}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <div className="grid grid-cols-3 gap-2">
          <input
            name="sets"
            type="number"
            value={formData.sets}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
          <input
            name="reps"
            type="number"
            value={formData.reps}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
          <input
            name="weight"
            type="number"
            value={formData.weight}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>
        <div className="flex gap-2">
          <button type="submit" className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-sm">
            Save
          </button>
          <button
            type="button"
            onClick={() => setIsEditing(false)}
            className="bg-gray-400 hover:bg-gray-500 text-white px-3 py-1 rounded text-sm"
          >
            Cancel
          </button>
        </div>
      </form>
    );
  }

  return (
    <div className="border border-gray-300 p-4 rounded-lg shadow-sm bg-white hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-lg font-semibold text-blue-800">{workout.exercise}</p>
          <p className="text-gray-700 text-sm">
            {workout.sets} sets × {workout.reps} reps @ {workout.weight} lbs
          </p>
          <p className="text-xs text-gray-400">Logged on: {workout.date}</p>
        </div>
        <div className="flex flex-col items-end gap-2">
          <button
            onClick={() => setIsEditing(true)}
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded text-sm"
          >
            Edit
          </button>
          <button
            onClick={() => onDelete(workout.id)}
            className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default WorkoutItem;
// This component represents a single workout item.
// It allows users to view, edit, or delete a workout.
// It uses local state to manage the editing form and handles changes to the workout data.
// The component receives props for the workout data and functions to handle deletion and editing.
// It displays the workout details and provides buttons for editing and deleting the workout.
