import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthStatus } from "../hooks/useAuthStatus";
import Spinner from "./Spinner";

const PrivateRoute = ({children}) => {
  const {loggedIn, loading} = useAuthStatus()

  if (loading) {
    return <Spinner/>
  }

  //Outlet je child od ovog vanjskog route u App.js
//   <Route path="/profile" element={<PrivateRoute />}>
//     <Route path="/profile" element={<Profile />} />
//   </Route>;
//   return loggedIn ? <Outlet /> : <Navigate to="/sign-in" />;
  return loggedIn ? children : <Navigate to="/sign-in" />;
};

export default PrivateRoute;
