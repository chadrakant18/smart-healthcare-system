import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-xl w-96">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Login
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 px-4 py-2 border rounded"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 px-4 py-2 border rounded"
        />

        <button
          onClick={() => navigate("/patient")}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Login as Patient
        </button>

        <button
          onClick={() => navigate("/doctor")}
          className="w-full mt-3 bg-teal-600 text-white py-2 rounded hover:bg-teal-700 transition"
        >
          Login as Doctor
        </button>
      </div>
    </div>
  );
}
