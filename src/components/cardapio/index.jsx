import { FoodCard } from "../food-card";
import "./styles.css";

import batata from "../../images/batata.jpg";

export const Cardapio = () => {
  return (
    <div className="foods">
      <div className="cardapio-background">
        <div className="round"></div>
        <div className="cardapio-intro">
          <h3>O que tem para comer?</h3>
          <h2>Veja os mais pedidos do nosso cardapio!</h2>
        </div>
        <div className="cardapio">
          <FoodCard
            title={"Batata Frita"}
            text={"Aqui vai a descrição"}
            cover={batata}
          />
          <FoodCard
            title={"Batata Frita"}
            text={"Aqui vai a descrição"}
            cover={batata}
          />
          <FoodCard
            title={"Batata Frita"}
            text={"Aqui vai a descrição"}
            cover={batata}
          />
          <FoodCard
            title={"Batata Frita"}
            text={"Aqui vai a descrição"}
            cover={batata}
          />
          <FoodCard
            title={"Batata Frita"}
            text={"Aqui vai a descrição"}
            cover={batata}
          />
          <FoodCard
            title={"Batata Frita"}
            text={"Aqui vai a descrição"}
            cover={batata}
          />
        </div>
        <div className="round-up"></div>
      </div>
    </div>
  );
};
