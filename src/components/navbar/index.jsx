import "./styles.css";
import logo from "../../images/logo_written_white.png";

import { NavBarButton } from "../navbar-button";

export const NavBar = () => {
  return (
    <nav>
      <img src={logo} alt="Logo" className="logo" />
      <div className="menu">
        <NavBarButton title={"Eventos"} />
      </div>
    </nav>
  );
};
