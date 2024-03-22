import { Informacao } from "../informacao";
import "./styles.css";

export const Drinkable = () => {
  return (
    <div className="drinkable">
      <Informacao
        title={"Saboreie nossas Cervejas e Drinks"}
        subTitle={"Tome o melhor"}
        text={
          "Todo mundo tem um gosto diferente mesmo que não saiba e temos certeza que nossa variedade de cervejas vai te impressionar. Assim como nossos drinks irão explodir seu paladar."
        }
      />
    </div>
  );
};
