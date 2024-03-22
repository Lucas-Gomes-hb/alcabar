import "./styles.css";

import bar from "../../images/bar1.png";
import cozinha from "../../images/cozinha.png";

import { Card } from "../card";
import { useEffect, useState } from "react";

export const ConhecaEspaco = () => {
  const [cards, setCard] = useState([]);
  const [informations] = useState({
    bar: [
      {
        image: bar,
        title: "Espaço amplo",
        body: "Para acomodar qualquer tipo de festa e evento, assim podendo dar espaço e aconchego aos seus convidados.",
      },
      {
        image: bar,
        title: "Perfeito para seu evento",
        body: "Para acomodar qualquer tipo de festa e evento, assim podendo dar espaço e aconchego aos seus convidados.",
      },
      {
        image: bar,
        title: "Nada melhor que a vista",
        body: "Para acomodar qualquer tipo de festa e evento, assim podendo dar espaço e aconchego aos seus convidados.",
      },
    ],
    salao: [
      {
        image: cozinha,
        title: "Espaço amplo",
        body: "Para acomodar qualquer tipo de festa e evento, assim podendo dar espaço e aconchego aos seus convidados.",
      },
      {
        image: cozinha,
        title: "Perfeito para seu evento",
        body: "Para acomodar qualquer tipo de festa e evento, assim podendo dar espaço e aconchego aos seus convidados.",
      },
      {
        image: cozinha,
        title: "Nada melhor que a vista",
        body: "Para acomodar qualquer tipo de festa e evento, assim podendo dar espaço e aconchego aos seus convidados.",
      },
    ],
    cozinha: [
      {
        image: cozinha,
        title: "Espaço amplo",
        body: "Para acomodar qualquer tipo de festa e evento, assim podendo dar espaço e aconchego aos seus convidados.",
      },
      {
        image: cozinha,
        title: "Perfeito para seu evento",
        body: "Para acomodar qualquer tipo de festa e evento, assim podendo dar espaço e aconchego aos seus convidados.",
      },
      {
        image: cozinha,
        title: "Nada melhor que a vista",
        body: "Para acomodar qualquer tipo de festa e evento, assim podendo dar espaço e aconchego aos seus convidados.",
      },
    ],
    parrilha: [
      {
        image: bar,
        title: "Espaço amplo",
        body: "Para acomodar qualquer tipo de festa e evento, assim podendo dar espaço e aconchego aos seus convidados.",
      },
      {
        image: bar,
        title: "Perfeito para seu evento",
        body: "Para acomodar qualquer tipo de festa e evento, assim podendo dar espaço e aconchego aos seus convidados.",
      },
      {
        image: bar,
        title: "Nada melhor que a vista",
        body: "Para acomodar qualquer tipo de festa e evento, assim podendo dar espaço e aconchego aos seus convidados.",
      },
    ],
  });

  const handleClickMenuOption = (e) => {
    let active = document.querySelector(".active");
    let activeBorder = document.querySelector(".active-border ");

    if (active != null) active.classList = [];
    if (activeBorder != null) activeBorder.classList = [];

    if (e.target.parentElement.className !== "options") {
      e.target.parentElement.classList = ["active"];
      e.target.classList = ["active-border"];
    }
    if (e.target.parentElement.className === "options") {
      e.target.classList = ["active"];
      e.target.children[0].classList = ["active-border"];
    }

    handleShowPhotos(e.target.id);
  };

  const handleMouseEnterButton = (e) => {
    if (e.target.parentElement.className === "active") return;
    if (e.target.className === "active") return;
    e.target.children[0].classList = ["anime-border"];
  };

  const handleMouseOutButton = (e) => {
    let animeTeste = document.querySelector(".anime-border");

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
          body={card.body}
          title={card.title}
          image={card.image}
        />
      ))
    );
  };

  useEffect(() => {
    let inteiro = 0;
    setCard(
      informations.salao.map((e) => (
        <Card
          key={(inteiro += 1)}
          body={e.body}
          title={e.title}
          image={e.image}
        />
      ))
    );
  }, [informations]);

  return (
    <div className="conheca-espaco">
      <div className="options">
        <button
          id="salao"
          className="active"
          onClick={handleClickMenuOption}
          onMouseEnter={handleMouseEnterButton}
          onMouseOut={handleMouseOutButton}
        >
          Salão
          <div id="salao" className="active-border"></div>
        </button>
        <button
          id="bar"
          onClick={handleClickMenuOption}
          onMouseEnter={handleMouseEnterButton}
          onMouseOut={handleMouseOutButton}
        >
          Bar
          <div id="bar"></div>
        </button>
        <button
          id="cozinha"
          onClick={handleClickMenuOption}
          onMouseEnter={handleMouseEnterButton}
          onMouseOut={handleMouseOutButton}
        >
          Cozinha
          <div id="cozinha"></div>
        </button>
        <button
          id="parrilha"
          onClick={handleClickMenuOption}
          onMouseEnter={handleMouseEnterButton}
          onMouseOut={handleMouseOutButton}
        >
          Parrilha
          <div id="parrilha"></div>
        </button>
      </div>
      <div className="show" id="show-photos">
        {cards}
      </div>
    </div>
  );
};
