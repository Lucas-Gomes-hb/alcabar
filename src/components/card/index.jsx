import "./styles.css";

export const Card = ({ title, body, image }) => {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
};
