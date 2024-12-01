import { Link } from "react-router-dom";
import { UserNav } from "./UserNav";
import { AuthNav } from "./AuthNav";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/selectors";
import './Navigation.css'

export function Navigation() {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <nav>
            <div className="nav-bar"><Link to="/">Home</Link></div>
            {isLoggedIn && <div className="nav-bar"><Link to="/contacts">Contacts</Link></div>}
            {isLoggedIn ? <UserNav /> : <AuthNav />}
        </nav>
    );
}