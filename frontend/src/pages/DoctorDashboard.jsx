export default function DoctorDashboard() {
  return (
    <div className="p-10 bg-blue-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-blue-700">
        Doctor Dashboard
      </h1>

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
