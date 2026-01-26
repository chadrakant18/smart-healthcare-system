import { Children } from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({children,role}){
    const isLogedIn=localStorage.getItem("isLoggedIn");
    const userRole=localStorage.getItem("role");

    if(!isLogedIn){
        return <Navigate to="/" replace/>
    }
    if(role&&userRole!=role){
        return <Navigate y="/" replace/>
    }
    return Children;
}