import { Link } from "react-router-dom";
import './Navigation.css'

export function AuthNav() {
    return (
        <div>
            <div className="nav-bar"><Link to="/register">Register</Link></div>
            <div className="nav-bar"><Link to="/login">Login</Link></div>
        </div>
    );
}