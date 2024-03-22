import "./styles.css";
export const FoodCard = ({ title, text, cover }) => {
  return (
    <div
      className="food-card"
      style={{
        backgroundImage: `url(${cover})`,
      }}
    >
      <div className="food-cover">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};
