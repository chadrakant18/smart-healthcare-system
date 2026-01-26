// Import Logout button component
import LogoutButton from "../components/LogoutButton";

export default function DoctorDashboard() {
  return (
    <div className="p-10 bg-blue-50 min-h-screen">

      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-blue-700">
          Doctor Dashboard
        </h1>

        <LogoutButton />
      </div>

      <div className="grid grid-cols-3 gap-6">
        <Card title="👨‍⚕️ View Patients" />
        <Card title="🧾 Upload Reports" />
        <Card title="🔔 Notifications" />
      </div>
    </div>
  );
}

function Card({ title }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-xl">
      {title}
    </div>
  );
}
