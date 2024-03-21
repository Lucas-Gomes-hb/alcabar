import "./styles.css";

export const NavBarButton = ({ title }) => {
  return (
    <div className="menu-button">
      <a href="..">{title}</a>
      <div></div>
    </div>
  );
};
