import { ConhecaInformacao } from "../conheca-informacao";
import "./styles.css";

export const ConhecaACasa = () => {
  const handleClickMenuOption = (e) => {
    let active = document.querySelector(".active");
    let activeBorder = document.querySelector(".active-border ");

    if (active != null) active.classList = [];
    if (activeBorder != null) activeBorder.classList = [];

    e.target.classList = ["active"];
    e.target.children[0].classList = ["active-border"];
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

  return (
    <div id="conheca-a-casa" className="conheca-container">
      <ConhecaInformacao />
      <div className="conheca-espaco">
        <div className="options">
          <button
            className="active"
            onClick={handleClickMenuOption}
            onMouseEnter={handleMouseEnterButton}
            onMouseOut={handleMouseOutButton}
          >
            Salão
            <div className="active-border"></div>
          </button>
          <button
            onClick={handleClickMenuOption}
            onMouseEnter={handleMouseEnterButton}
            onMouseOut={handleMouseOutButton}
          >
            Bar
            <div></div>
          </button>
          <button
            onClick={handleClickMenuOption}
            onMouseEnter={handleMouseEnterButton}
            onMouseOut={handleMouseOutButton}
          >
            Cozinha
            <div></div>
          </button>
          <button
            onClick={handleClickMenuOption}
            onMouseEnter={handleMouseEnterButton}
            onMouseOut={handleMouseOutButton}
          >
            Parrilha
            <div></div>
          </button>
          <button
            onClick={handleClickMenuOption}
            onMouseEnter={handleMouseEnterButton}
            onMouseOut={handleMouseOutButton}
          >
            Prêmios
            <div></div>
          </button>
        </div>
      </div>
    </div>
  );
};
