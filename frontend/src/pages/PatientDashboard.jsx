import LogoutButton from "../components/LogoutButton";

export default function PatientDashboard() {
  return (
    <div className="p-10 bg-gray-100 min-h-screen">

      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-green-700">
          Patient Dashboard
        </h1>

        <LogoutButton />
      </div>

      <div className="grid grid-cols-3 gap-6">
        <Card title="📅 Book Appointment" />
        <Card title="📄 Medical Reports" />
        <Card title="💬 AI Symptom Checker" />
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
