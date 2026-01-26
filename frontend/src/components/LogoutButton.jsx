import { useNavigate } from "react-router-dom";

export default function LogoutButton(){
    const navigate=useNavigate();

    const handleLogout=()=>{
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("role");

        navigate("/");
    };
    return(
        <button
        onClick={handleLogout}
        className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
        >Logout</button>
    );
}