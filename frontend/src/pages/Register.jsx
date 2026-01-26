export default function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <div className="bg-white p-8 rounded-xl shadow-xl w-96">
        <h2 className="text-3xl font-bold text-center text-green-600 mb-6">
          Register
        </h2>

        <input
          placeholder="Full Name"
          className="w-full mb-4 px-4 py-2 border rounded"
        />

        <input
          placeholder="Email"
          className="w-full mb-4 px-4 py-2 border rounded"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 px-4 py-2 border rounded"
        />

        <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition">
          Create Account
        </button>
      </div>
    </div>
  );
}
