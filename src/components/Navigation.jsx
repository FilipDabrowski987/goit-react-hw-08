import { Link } from "react-router-dom";
import { UserNav } from "./UserNav";
import { AuthNav } from "./AuthNav";

const isLoggedIn = true;

export function Navigation () {
    return (
        <nav>
            <Link to="/">Home</Link>
            {isLoggedIn && <Link to="/contacts">Contacts</Link>}
            {isLoggedIn ? <UserNav/> : <AuthNav/>}
        </nav>
    ) 
}