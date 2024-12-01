import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../redux/operations";
import { selectUser } from "../redux/selectors";
import './UserNav.css'

export function UserNav() {
    const dispatch = useDispatch();
    const { name } = useSelector(selectUser)
    const handleLoggOut = () => {
        dispatch(logOut());
    }
    return (
        <div className="user-nav-bar">
            <p>Witaj, <span className="user-name-span">{name}</span></p>
            <button className="log-out-button" onClick={handleLoggOut}>Logout</button>
        </div>
    );
}