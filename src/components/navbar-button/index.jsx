import "./styles.css";

export const NavBarButton = ({ title, change }) => {
  return (
    <div className="menu-button">
      <a href=".." className={change ? "menu-color" : "menu-color-black"}>
        {title}
      </a>
      <div className={change ? "menu-bg" : "menu-bg-black"}></div>
    </div>
  );
};
