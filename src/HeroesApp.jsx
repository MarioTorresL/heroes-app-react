import { Outlet } from "react-router-dom";
import { AuthProvider } from "./auth/context/AuthProvider";
import { PrivateRoute } from "./router/PrivateRoute";
import { NavBar } from "./ui";

export const HeroesApp = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <PrivateRoute>
          <Outlet />
        </PrivateRoute>
      </div>
    </>
  );
};
