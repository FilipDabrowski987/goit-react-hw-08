import { Navigate } from "react-router-dom";

export function RestrictedRoute({ element, redirectPath }) {
    const isLoggedIn = true;
    return isLoggedIn ? <Navigate to={redirectPath} /> : element;
}