import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsLoggedIn } from "../redux/selectors";

export function PrivateRoute({ element, redirectPath }) {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    return isLoggedIn ? element : <Navigate to={redirectPath} />;
}