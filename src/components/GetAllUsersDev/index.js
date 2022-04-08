import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Token } from "../../providers/TokenProvider";
import api from "../../services/api";

const GetAllDev = () => {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    api
      .get(`/users?type=pf`)
      .then((res) => {
        setDados(res.data);
      })
      .catch((e) => console.log(e));
  }, []);
 
  return (
    <>
      <h2>Todos os Devs:</h2>
      {dados && dados.map((item, i) => <div key={i}>{item.name}</div>)}
    </>
  );
};

export default GetAllDev;
