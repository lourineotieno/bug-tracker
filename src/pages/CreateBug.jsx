import { useState } from "react";

export default function CreateBug() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Low");
  const [assignedTo, setAssignedTo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ title, description, priority, assignedTo });
    // Call API to create bug
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Create Bug</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
        <input
          type="text"
          placeholder="Bug Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="p-2 border rounded dark:bg-gray-700 dark:text-white"
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="p-2 border rounded dark:bg-gray-700 dark:text-white"
        />
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="p-2 border rounded dark:bg-gray-700 dark:text-white"
        >
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
          <option>Critical</option>
        </select>
        <input
          type="text"
          placeholder="Assign To"
          value={assignedTo}
          onChange={(e) => setAssignedTo(e.target.value)}
          className="p-2 border rounded dark:bg-gray-700 dark:text-white"
        />
        <button className="bg-indigo-500 text-white px-4 py-2 rounded">Create Bug</button>
      </form>
    </div>
  );
}
