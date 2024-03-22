import { ConhecaInformacao } from "../conheca-informacao";
import { ConhecaEspaco } from "../conheca-espaco";
import "./styles.css";

export const ConhecaACasa = () => {
  return (
    <div id="conheca-a-casa" className="conheca-container">
      <ConhecaInformacao />
      <ConhecaEspaco />
    </div>
  );
};
