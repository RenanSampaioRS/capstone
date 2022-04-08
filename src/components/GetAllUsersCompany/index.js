import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Token } from "../../providers/TokenProvider";
import api from "../../services/api";

const GetAllComp = () => {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    api
      .get(`/users?type=pj`)
      .then((res) => {
        setDados(res.data);
      })
      .catch((e) => console.log(e));
  }, []); 

  return (
    <>
      <h2>Todas as Empresas</h2>
      {dados && dados.map((item, i) => <div key={i}>{item.name}</div>)}
    </>
  );
};

export default GetAllComp;
