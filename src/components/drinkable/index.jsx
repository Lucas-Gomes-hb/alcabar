import "./styles.css";

import cerveja from "../../images/pilsen.jpg";
import drink from "../../images/weiss.jpg";

import { Card } from "../card";
import { Informacao } from "../informacao";
import { useEffect, useState } from "react";

export const Drinkable = () => {
  const [cards, setCard] = useState([]);
  const [informations] = useState({
    cervejas: [
      {
        image: cerveja,
        title: "Pilsen",
        body: "Cerveja mais tradicional, mas não deixa de ter nosso toque especial.",
      },
      {
        image: cerveja,
        title: "Pilsen",
        body: "Cerveja mais tradicional, mas não deixa de ter nosso toque especial.",
      },
      {
        image: cerveja,
        title: "Pilsen",
        body: "Cerveja mais tradicional, mas não deixa de ter nosso toque especial.",
      },
      {
        image: cerveja,
        title: "Pilsen",
        body: "Cerveja mais tradicional, mas não deixa de ter nosso toque especial.",
      },
      {
        image: cerveja,
        title: "Pilsen",
        body: "Cerveja mais tradicional, mas não deixa de ter nosso toque especial.",
      },
      {
        image: cerveja,
        title: "Pilsen",
        body: "Cerveja mais tradicional, mas não deixa de ter nosso toque especial.",
      },
    ],
    drinks: [
      {
        image: drink,
        title: "Drink",
        body: "Nada como um drink gelado para tomar enquanto aproveita sua festa.",
      },
      {
        image: drink,
        title: "Drink",
        body: "Nada como um drink gelado para tomar enquanto aproveita sua festa.",
      },
      {
        image: drink,
        title: "Drink",
        body: "Nada como um drink gelado para tomar enquanto aproveita sua festa.",
      },
      {
        image: drink,
        title: "Drink",
        body: "Nada como um drink gelado para tomar enquanto aproveita sua festa.",
      },
      {
        image: drink,
        title: "Drink",
        body: "Nada como um drink gelado para tomar enquanto aproveita sua festa.",
      },
      {
        image: drink,
        title: "Drink",
        body: "Nada como um drink gelado para tomar enquanto aproveita sua festa.",
      },
    ],
  });

  const handleClickMenuOption = (e) => {
    let activeDrink = document.querySelector(".activeDrink");
    let activeBorder = document.querySelector(".activeDrink-border ");

    if (activeDrink != null) activeDrink.classList = [];
    if (activeBorder != null) activeBorder.classList = [];

    if (e.target.parentElement.className !== "options") {
      e.target.parentElement.classList = ["activeDrink"];
      e.target.classList = ["activeDrink-border"];
    }
    if (e.target.parentElement.className === "options") {
      e.target.classList = ["activeDrink"];
      e.target.children[0].classList = ["activeDrink-border"];
    }

    handleShowPhotos(e.target.id);
  };

  const handleMouseEnterButton = (e) => {
    if (e.target.parentElement.className === "activeDrink") return;
    if (e.target.className === "activeDrink") return;
    e.target.children[0].classList = ["animeDrink-border"];
  };

  const handleMouseOutButton = (e) => {
    let animeTeste = document.querySelector(".animeDrink-border");

    if (animeTeste != null) {
      animeTeste.classList = [];
    }
  };

  const handleShowPhotos = (id) => {
    let inteiro = 0;
    setCard(
      informations[id].map((card) => (
        <Card
          key={(inteiro += 1)}
          title={card.title}
          body={card.body}
          image={card.image}
          bodyStyle={"bodyOn"}
          hasModal={true}
        />
      ))
    );
  };

  useEffect(() => {
    let inteiro = 0;
    setCard(
      informations["cervejas"].map((card) => (
        <Card
          key={(inteiro += 1)}
          title={card.title}
          body={card.body}
          image={card.image}
          bodyStyle={"bodyOn"}
          hasModal={true}
        />
      ))
    );
  }, [informations]);

  return (
    <>
      <div className="drinkable">
        <Informacao
          title={"Saboreie nossas Cervejas e Drinks"}
          subTitle={"Tome o melhor"}
          text={
            "Todo mundo tem um gosto diferente mesmo que não saiba e temos certeza que nossa variedade de cervejas vai te impressionar. Assim como nossos drinks irão explodir seu paladar."
          }
        />

        <div className="drinkable-choices">
          <div className="options">
            <button
              id="cervejas"
              className="activeDrink"
              onClick={handleClickMenuOption}
              onMouseEnter={handleMouseEnterButton}
              onMouseOut={handleMouseOutButton}
            >
              Cervejas
              <div id="cervejas" className="activeDrink-border"></div>
            </button>
            <button
              id="drinks"
              onClick={handleClickMenuOption}
              onMouseEnter={handleMouseEnterButton}
              onMouseOut={handleMouseOutButton}
            >
              Drinks
              <div id="drinks"></div>
            </button>
          </div>
          <div className="show" id="show-photos">
            {cards}
          </div>
        </div>
      </div>
    </>
  );
};
