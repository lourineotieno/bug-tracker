import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 to-purple-700 text-white flex flex-col">

      {/* Navbar */}
      <header className="flex justify-between items-center p-6">
        <h1 className="text-2xl font-bold">Bug Tracker</h1>
        <div className="space-x-4">
          <Link
            to="/login"
            className="px-4 py-2 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="px-4 py-2 border border-white rounded-lg hover:bg-white hover:text-indigo-600 transition"
          >
            Register
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <div className="flex flex-1 items-center justify-center text-center px-6">
        <div>
          <h2 className="text-5xl font-bold mb-6">
            Track, Manage & Resolve Bugs Efficiently
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            A powerful MERN Bug Tracker that helps teams assign,
            monitor and fix software issues in real-time with
            notifications and email alerts.
          </p>

          <Link
            to="/register"
            className="px-8 py-3 bg-white text-indigo-600 rounded-lg font-bold text-lg hover:bg-gray-200 transition"
          >
            Get Started
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center p-4 bg-black bg-opacity-20">
        © 2026 Bug Tracker. All rights reserved.
      </footer>
    </div>
  );
}
