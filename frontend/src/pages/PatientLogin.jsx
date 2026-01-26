import { useNavigate } from "react-router-dom";

export default function PatientLogin() {

  // Hook used to navigate programmatically
  const navigate = useNavigate();

  // ---------------- LOGIN HANDLER ----------------
  // This function runs when Login button is clicked
  const handleLogin = async () => {
    try {
      // Send POST request to backend login API
      const response = await fetch(
        "http://localhost:5000/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ role: "patient" })
        }
      );

      const data = await response.json();

      if (data.success) {
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("role", data.role);

        // Redirect to patient dashboard
        navigate("/patient");
      }
    } catch (error) {
      // If backend is down or request fails
      console.error("Login failed", error);
    }
  };

  // ---------------- JSX UI ----------------
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-2xl w-[420px] p-10">
        
        {/* Header */}
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-2">
          Patient Login
        </h1>
        <p className="text-center text-gray-500 mb-8">
          Access your health records and services
        </p>

        {/* Email input (UI only for now) */}
        <label className="block text-gray-600 mb-1">Email</label>
        <input
          type="email"
          placeholder="patient@example.com"
          className="w-full mb-4 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Password input (UI only for now) */}
        <label className="block text-gray-600 mb-1">Password</label>
        <input
          type="password"
          placeholder="••••••••"
          className="w-full mb-6 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Login Button */}
        <button
          onClick={handleLogin}
          className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Login
        </button>

        {/* Footer */}
        <p className="text-sm text-center text-gray-500 mt-6">
          New patient? Contact hospital administration
        </p>
      </div>
    </div>
  );
}
