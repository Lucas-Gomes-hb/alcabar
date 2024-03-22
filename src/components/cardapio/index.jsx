import "./styles.css";
export const Cardapio = () => {
  return (
    <div className="foods">
      <div className="cardapio-background">
        <div className="round"></div>
        <div className="cardapio-intro">
          <h3>O que tem para comer?</h3>
          <h2>Veja os mais pedidos do nosso cardapio!</h2>
        </div>
        <div className="cardapio">
          <div className="food-card">
            <div className="food-cover">
              <h2>Title</h2>
              <p>aqui vai um pequena descrição do produto</p>
            </div>
          </div>
          <div className="food-card">
            <div className="food-cover">
              <h2>Title</h2>
              <p>aqui vai um pequena descrição do produto</p>
            </div>
          </div>
          <div className="food-card">
            <div className="food-cover">
              <h2>Title</h2>
              <p>aqui vai um pequena descrição do produto</p>
            </div>
          </div>
          <div className="food-card">
            <div className="food-cover">
              <h2>Title</h2>
              <p>aqui vai um pequena descrição do produto</p>
            </div>
          </div>
          <div className="food-card">
            <div className="food-cover">
              <h2>Title</h2>
              <p>aqui vai um pequena descrição do produto</p>
            </div>
          </div>
          <div className="food-card">
            <div className="food-cover">
              <h2>Title</h2>
              <p>aqui vai um pequena descrição do produto</p>
            </div>
          </div>
        </div>
        <div className="round-up"></div>
      </div>
    </div>
  );
};
