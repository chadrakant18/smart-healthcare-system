import { useNavigate } from "react-router-dom";

export default function RoleSelect() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-teal-500 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-2xl p-10 w-[500px]">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">
          Smart Healthcare System
        </h1>

        <p className="text-center text-gray-500 mb-10">
          Select your role to continue
        </p>

        <div className="grid grid-cols-2 gap-6">
          {/* Patient */}
          <div
            onClick={() => navigate("/login/patient")}
            className="cursor-pointer border rounded-xl p-6 text-center hover:shadow-lg hover:border-blue-500 transition"
          >
            <div className="text-4xl mb-3">👤</div>
            <h2 className="text-xl font-semibold text-blue-600">
              Patient
            </h2>
            <p className="text-sm text-gray-500 mt-2">
              Access appointments, reports & AI health tools
            </p>
          </div>

          {/* Doctor */}
          <div
            onClick={() => navigate("/login/doctor")}
            className="cursor-pointer border rounded-xl p-6 text-center hover:shadow-lg hover:border-teal-500 transition"
          >
            <div className="text-4xl mb-3">🩺</div>
            <h2 className="text-xl font-semibold text-teal-600">
              Doctor
            </h2>
            <p className="text-sm text-gray-500 mt-2">
              Manage patients, reports & consultations
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
