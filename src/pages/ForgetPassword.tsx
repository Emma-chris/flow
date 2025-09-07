import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthCard from "../components/AuthCard";
import toast from "react-hot-toast";
import { LoadingSpinner } from "../components/LoadingSpinner";
// import LoadingSpinner from "../components/LoadingSpinner";

export const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter your email");
      return;
    }

    setTimeout(() => {
      setLoading(false);
      toast.success("Password reset link sent to your email 📩");
      // simulate clicking the link
      setTimeout(() => {
        navigate("/reset-password");
      }, 1000);
    }, 1500);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600">
      <AuthCard title="Reset Password">
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Enter your registered email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition flex items-center justify-center gap-2 disabled:opacity-70"
          >
            {loading ? <LoadingSpinner /> : "Send Reset Link"}
          </button>
        </form>
        <p className="text-sm text-center mt-4">
          Remember your password?{" "}
          <Link to="/" className="text-indigo-600 hover:underline">
            Login
          </Link>
        </p>
      </AuthCard>
    </div>
  );
};
