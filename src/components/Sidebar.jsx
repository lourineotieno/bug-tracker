import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Sidebar() {
  const { isAdmin, logout } = useContext(AuthContext);

  const linkStyle = ({ isActive }) =>
    `p-2 rounded transition ${
      isActive
        ? "bg-indigo-600 text-white"
        : "hover:text-indigo-600 dark:hover:text-indigo-400"
    }`;

  return (
    <div className="w-60 min-h-screen bg-gray-100 dark:bg-gray-900 p-5 flex flex-col justify-between">
      
      {/* Top Section */}
      <div>
        <h1 className="text-2xl font-bold mb-8 text-indigo-600 dark:text-indigo-400">
          BugTracker
        </h1>

        <nav className="flex flex-col gap-3">
          <NavLink className={linkStyle} to="/dashboard">
            Dashboard
          </NavLink>

          <NavLink className={linkStyle} to="/bugs">
            All Bugs
          </NavLink>

          <NavLink className={linkStyle} to="/create">
            Create Bug
          </NavLink>

          {/* Admin Only */}
          {isAdmin && (
            <NavLink className={linkStyle} to="/users">
              Users
            </NavLink>
          )}
        </nav>
      </div>

      {/* Bottom Section */}
      <button
        onClick={logout}
        className="mt-10 p-2 text-left text-red-500 hover:text-red-700 transition"
      >
        Logout
      </button>
    </div>
  );
}