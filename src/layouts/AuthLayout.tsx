import { Outlet } from "react-router-dom";

export const AuthLayout = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-purple-500">
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-lg">
        <Outlet /> {/* This will render child routes */}
      </div>
    </div>
  );
};
