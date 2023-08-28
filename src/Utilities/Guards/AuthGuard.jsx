import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { PublicRoutes } from "../../Models";

export const AuthGuard = () => {
    const userState = useSelector((state) => state.user);
    return userState.propietario ? <Outlet /> : <Navigate replace to={PublicRoutes.LOGIN} />;
}