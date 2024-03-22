import "./styles.css";

export const Informacao = ({ subTitle, title, text }) => {
  return (
    <div className="informacao">
      <h3>{subTitle}</h3>
      <h2>{title}</h2>
      <div className="lupulo"></div>
      <p>{text}</p>
    </div>
  );
};
