import { Navigate, Outlet } from "react-router-dom";
import { useAuthStatus } from "../CustomHook/useAuthStatus";
const PrivateRoute = () => {
  const [loggedIn, checkingStatus] = useAuthStatus();
  if (checkingStatus) {
    return <h1 className="text-2xl font-bold mx-auto">Loading...</h1>
  }
  return loggedIn ? <Outlet /> : <Navigate to='/log-in' />
}

export default PrivateRoute;
