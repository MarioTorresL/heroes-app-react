import { Outlet } from "react-router-dom";
import {AuthProvider} from "./auth/components/AuthProvider";
import { NavBar } from "./ui";

export const HeroesApp = () => {
  return (
    <>
      <AuthProvider>
        <NavBar />
        <div className="container">
          <Outlet />
        </div>
      </AuthProvider>
    </>
  );
};
