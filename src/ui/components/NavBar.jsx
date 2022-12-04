import { Link, NavLink, redirect, useNavigate } from "react-router-dom";

export const NavBar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login", {
      replace: true,
    });
  };

  return (
    <>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark p-2">
        <Link className="navbar-brand" to={`/`}>
          Asociaciones
        </Link>

        <div className="navbar-collapse">
          <div className="navbar-nav">
            <NavLink
              className={({ isActive }) =>
                `nav-link nav-item ${isActive ? "active" : ""}`
              }
              to={`marvel`}
            >
              Marvel
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `nav-link nav-item ${isActive ? "active" : ""}`
              }
              to={`dc`}
            >
              DC
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `nav-link nav-item ${isActive ? "active" : ""}`
              }
              to={`search`}
            >
              Search
            </NavLink>
          </div>
        </div>

        <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
          <ul className="navbar-nav ml-auto">
            <span className="nav-item nav-link text-warning">Mario</span>

            <button
              className="nav-item nav-link btn btn-outline-warning"
              onClick={handleLogout}
            >
              Logout
            </button>
          </ul>
        </div>
      </nav>
    </>
  );
};
