import { useNavigate } from "react-router-dom";

export default function DoctorLogin() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-600 to-emerald-600 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-2xl w-[440px] p-10">
        
        {/* Header */}
        <h1 className="text-3xl font-bold text-center text-teal-700 mb-2">
          Doctor Login
        </h1>
        <p className="text-center text-gray-500 mb-8">
          Authorized medical professionals only
        </p>

        {/* Email */}
        <label className="block text-gray-600 mb-1">
          Doctor Email
        </label>
        <input
          type="email"
          placeholder="doctor@hospital.com"
          className="w-full mb-4 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
        />

        {/* License ID */}
        <label className="block text-gray-600 mb-1">
          Medical License ID
        </label>
        <input
          type="text"
          placeholder="MED-XXXX-XXXX"
          className="w-full mb-4 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
        />

        {/* Password */}
        <label className="block text-gray-600 mb-1">
          Password
        </label>
        <input
          type="password"
          placeholder="••••••••"
          className="w-full mb-6 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
        />

        {/* Login Button */}
        <button
  onClick={() => {
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("role", "doctor");
    navigate("/doctor");
  }}
  className="w-full py-3 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition"
>
  Login as Doctor
</button>


        {/* Footer */}
        <p className="text-sm text-center text-gray-500 mt-6">
          Unauthorized access is strictly prohibited
        </p>
      </div>
    </div>
  );
}
