import { Navigate } from "react-router-dom";

export function PrivateRoute({ element, redirectPath }) {
    const isLoggedIn = true;
    return isLoggedIn ? element : <Navigate to={redirectPath} />;
}