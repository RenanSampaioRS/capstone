const CardVagas = ({ item }) => {
  return (
    <div>
      <h1>{item.nome}</h1>
      <p>
        <span>Descrição</span>: {item.descricao}
      </p>
    </div>
  );
};

export default CardVagas;
