import { useNavigate } from "react-router-dom";

export default function PatientLogin() {
  const navigate = useNavigate();

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

        {/* Email */}
        <label className="block text-gray-600 mb-1">Email</label>
        <input
          type="email"
          placeholder="patient@example.com"
          className="w-full mb-4 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Password */}
        <label className="block text-gray-600 mb-1">Password</label>
        <input
          type="password"
          placeholder="••••••••"
          className="w-full mb-6 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Login Button */}
       <button
  onClick={() => {
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("role", "patient");
    navigate("/patient");
  }}
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
