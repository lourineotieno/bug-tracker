
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Bugs from "./pages/Bugs";
import CreateBug from "./pages/CreateBug";
import EditBug from "./pages/EditBug";
import Users from "./pages/Users";
import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <Router>
      <Routes>

        {/* Public Routes */}
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Routes */}
        <Route
          path="/*"
          element={
            <ProtectedRoute>
              <div className="flex">
                <Sidebar />
                <div className="flex-1">
                  <Navbar />
                  <Routes>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/bugs" element={<Bugs />} />
                    <Route path="/create" element={<CreateBug />} />
                    <Route path="/edit/:id" element={<EditBug />} />
                    <Route path="/users" element={<Users />} />
                  </Routes>
                </div>
              </div>
            </ProtectedRoute>
          }
        />

      </Routes>
    </Router>
  );
}

export default App;
