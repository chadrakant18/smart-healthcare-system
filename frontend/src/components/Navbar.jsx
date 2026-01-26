import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-teal-500 text-white px-8 py-4 flex justify-between items-center shadow-lg">
      <h1 className="text-2xl font-bold tracking-wide">
        🏥 Smart Healthcare
      </h1>

      <div className="space-x-6 text-lg">
        <Link to="/" className="hover:underline">Login</Link>
        <Link to="/register" className="hover:underline">Register</Link>
      </div>
    </nav>
  );
}
