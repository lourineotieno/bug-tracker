import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-60 min-h-screen bg-gray-100 dark:bg-gray-900 p-5">
      <h1 className="text-2xl font-bold mb-8 text-indigo-600 dark:text-indigo-400">BugTracker</h1>
      <nav className="flex flex-col gap-3">
        <NavLink className="hover:text-indigo-600 dark:hover:text-indigo-400" to="/dashboard">Dashboard</NavLink>
        <NavLink className="hover:text-indigo-600 dark:hover:text-indigo-400" to="/bugs">All Bugs</NavLink>
        <NavLink className="hover:text-indigo-600 dark:hover:text-indigo-400" to="/create">Create Bug</NavLink>
        <NavLink className="hover:text-indigo-600 dark:hover:text-indigo-400" to="/users">Users</NavLink>
      </nav>
    </div>
  );
}
