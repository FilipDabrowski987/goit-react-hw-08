import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../redux/operations";
import { selectUser } from "../redux/selectors";

export function UserNav() {
    const dispatch = useDispatch();
    const { name } = useSelector(selectUser)
    const handleLoggOut = () => {
        dispatch(logOut());
    }
    return (
        <div>
            <p>Witaj, {name}</p>
            <button onClick={handleLoggOut}>Logout</button>
        </div>
    );
}