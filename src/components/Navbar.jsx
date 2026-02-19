import { useEffect, useState, useContext } from "react";
import { socket } from "../socket";

import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { user } = useContext(AuthContext);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    if (!user) return;

    // Register logged-in developer
    socket.emit("registerDeveloper", user.email);

    // Listen for new bug events
    socket.on("newBug", (bug) => {
      setNotifications((prev) => [...prev, bug]);
      // Optional: show toast
      alert(`New bug assigned: ${bug.title}`);
    });

    return () => socket.off("newBug");
  }, [user]);

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 className="font-bold text-xl">Bug Tracker</h1>
      <div className="flex items-center gap-6">
        {/* Bugs Page Link with Badge */}
        <Link
          to="/bugs"
          className="relative"
          onClick={() => setNotifications([])} // clear badge on click
        >
          Bugs
          {notifications.length > 0 && (
            <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {notifications.length}
            </span>
          )}
        </Link>

        {/* Logout */}
        <button
          className="bg-red-500 px-3 py-1 rounded"
          onClick={() => {
            localStorage.removeItem("user");
            window.location.reload();
          }}
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
