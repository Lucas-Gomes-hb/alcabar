import "./styles.css";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <div className="round-up-black"></div>
      <footer>
        <div className="dias">
          <h2>Venha nos visitar</h2>
          <p>Quarta a Sexta: 18:00 - 00:00</p>
          <p>Sábado: 18:00 - 00:00</p>
          <p>Domingo: 18:00 - 00:00</p>
        </div>
        <div className="contato">
          <h2>Entre em contato</h2>
          <p>EMAIL</p>
          <a
            href="https://www.instagram.com/alcabar4distrito/"
            target="_blank"
            rel="noreferrer"
          >
            @alcabar4distrito
          </a>
          <a
            href="https://www.instagram.com/alcabar4distrito/"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
        </div>
        <div className="endereco">
          <h2>Nosso endereço</h2>
          <p>Tv. São José, 515 - Navegantes, Porto Alegre - RS, 90240-200</p>
          <a
            href="https://www.google.com/maps/place/Cervejaria+Alcapone+-+Alcabar/@-29.9967502,-51.2029556,17z/data=!3m1!4b1!4m6!3m5!1s0x951979f4ac82d1e3:0xd62a9af38dc41c31!8m2!3d-29.9967502!4d-51.2003807!16s%2Fg%2F11cs5r_wqp?entry=ttu"
            target="_blank"
            rel="noreferrer"
          >
            Veja no mapa!
          </a>
        </div>
      </footer>
      <div className="copyright">
        © {year} Alcabar, feito por{"\xa0"}
        <a
          href="https://www.linkedin.com/in/lucas-gomes-3a7564189"
          target="_blank"
          rel="noreferrer"
        >
          Lucas Gomes
        </a>
      </div>
    </>
  );
};
