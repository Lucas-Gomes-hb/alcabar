import { FoodCard } from "../food-card";
import "./styles.css";

import batata from "../../images/batata.jpg";

export const Cardapio = () => {
  const cards = [
    <FoodCard
      key={0}
      title={"Batata Frita"}
      text={"Aqui vai a descrição"}
      cover={batata}
    />,
    <FoodCard
      key={1}
      title={"Batata Frita"}
      text={"Aqui vai a descrição"}
      cover={batata}
    />,
    <FoodCard
      key={3}
      title={"Batata Frita"}
      text={"Aqui vai a descrição"}
      cover={batata}
    />,
    <FoodCard
      key={4}
      title={"Batata Frita"}
      text={"Aqui vai a descrição"}
      cover={batata}
    />,
    <FoodCard
      key={5}
      title={"Batata Frita"}
      text={"Aqui vai a descrição"}
      cover={batata}
    />,
    <FoodCard
      key={6}
      title={"Batata Frita"}
      text={"Aqui vai a descrição"}
      cover={batata}
    />,
  ];

  return (
    <div className="foods">
      <div className="cardapio-background">
        <div className="round"></div>
        <div className="cardapio-intro">
          <h3>O que tem para comer?</h3>
          <h2>Veja os mais pedidos do nosso cardapio!</h2>
        </div>
        <div className="cardapio">
          {window.screen.width > 480 ? cards : cards.slice(2, 5)}
        </div>
        <div className="round-up"></div>
      </div>
    </div>
  );
};
