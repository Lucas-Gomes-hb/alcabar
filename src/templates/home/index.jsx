import "./styles.css";

import { MainContainer } from "../../components/main-container";
import { NavBar } from "../../components/navbar";
import { ConhecaACasa } from "../../components/conheca";
import { Cardapio } from "../../components/cardapio";

export const Home = () => {
  return (
    <>
      <NavBar />
      <MainContainer />
      <ConhecaACasa />
      <Cardapio />
    </>
  );
};
