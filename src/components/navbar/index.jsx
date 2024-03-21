import "./styles.css";
import logo from "../../images/logo_written_white.png";
import logoBlack from "../../images/logo_written.png";

import { NavBarButton } from "../navbar-button";
import { useState, useEffect } from "react";

export const NavBar = () => {
  const [navBg, setNavBg] = useState(true);

  const changeNavBg = () => {
    window.scrollY >= 80 ? setNavBg(false) : setNavBg(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavBg);
    return () => {
      window.removeEventListener("scroll", changeNavBg);
    };
  }, []);

  return (
    <>
      <nav className={navBg ? "nav-transparent" : "nav-white"}>
        <img
          src={navBg ? logo : logoBlack}
          alt="Logo"
          className={navBg ? "logo" : "logo-black"}
        />
        <div className="menu">
          <NavBarButton title={"Eventos"} change={navBg} />
        </div>
      </nav>
      <div className="margin15"></div>
    </>
  );
};
