import { Outlet, useNavigate } from "react-router-dom";
import Button from "../components/Button";

export const DashboardLayout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("auth");
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <header className="bg-blue-600 text-white p-4 flex justify-between items-center shadow-md">
        <h1 className="text-xl font-bold">My Dashboard</h1>
        <Button onClick={handleLogout} className="bg-red-500 hover:bg-red-600">
          Logout
        </Button>
      </header>

      {/* Page Content */}
      <main className="flex-1 p-6 bg-gray-50">
        <Outlet />
      </main>
    </div>
  );
};
