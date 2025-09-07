import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    toast.success("Logged out");
    navigate("/"); // go back to login
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white rounded-xl shadow-lg text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Dashboard</h1>
        <p className="text-gray-600 mb-6">You’re logged in 🎉</p>
        <button
          onClick={handleLogout}
          className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
};
