import { ConhecaEspaco } from "../conheca-espaco";
import { Informacao } from "../informacao";
import "./styles.css";

export const ConhecaACasa = () => {
  return (
    <div id="conheca-a-casa" className="conheca-container">
      <Informacao
        title={"Bem-vindo(a) ao Alcabar"}
        subTitle={"Olá"}
        text={
          "Alcabar é um dos primeiros bares a ser feito na própria fabrica onde é produzida nossa cerveja, foi feito para ter um estilo industrial leve combinado com uma decoração moderna, isso tudo com cozinha e um ótimo espaço para shows e eventos."
        }
      />
      <ConhecaEspaco />
    </div>
  );
};
