import "./styles.css";

import { MainContainer } from "../../components/main-container";
import { NavBar } from "../../components/navbar";

export const Home = () => {
  return (
    <>
      <NavBar />
      <MainContainer />

      <div id="conheca-a-casa" className="conheca-container">
        <div className="conheca-informacao">
          <h3>Olá</h3>
          <h2>Bem-vindo(a) ao Alcabar</h2>
          <div className="lupulo"></div>
          <p>
            Alcabar é um dos primeiros bares a ser feito na própria fabrica onde
            é produzida nossa cerveja, foi feito para ter um estilo industrial
            leve combinado com uma decoração moderna, isso tudo com cozinha e um
            ótimo espaço para shows e eventos.
          </p>
        </div>
        <div className="conheca-espaco">
          <div className="options">
            <button>Salão</button>
            <button>Bar</button>
            <button>Cozinha</button>
            <button>Parrilha</button>
            <button>Prêmios</button>
          </div>
        </div>
      </div>
    </>
  );
};
