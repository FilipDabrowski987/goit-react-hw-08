import { useDispatch } from "react-redux";
import { logOut } from "../redux/operations";

export function UserNav() {
    const dispatch = useDispatch();
    const handleLoggOut = () => {
        dispatch(logOut());
    }
    return (
        <div>
            <p>Welcome, nazwa użytkownika</p>
            <button onClick={handleLoggOut}>Logout</button>
        </div>
    );
}