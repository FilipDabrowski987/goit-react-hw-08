import { Link } from "react-router-dom";

export function Navigation () {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
        </nav>
    ) 
}