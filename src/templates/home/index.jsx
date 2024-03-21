import { NavBar } from "../../components/navbar";
import "./styles.css";

export const Home = () => {
  return (
    <>
      <NavBar />
      <div className="main-container">
        <h2>Eventos</h2>
        <h1>Alcabar para seus eventos</h1>
        <p>
          Alcabar é um bar e restaurante localizado em Porto Alegre. Temos um
          ótimo local para abraçar suas festas e confraternizações.
        </p>
      </div>
    </>
  );
};
