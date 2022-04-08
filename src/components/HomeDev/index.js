import { User } from "../../providers/UserProvider";
import { useEffect, useState } from "react";
import api from "../../services/api";
import { DivPrincipal } from "./style";
import { Mybutton } from "./style";
import { useHistory } from "react-router-dom";

const PageHomeDev = () => {
  const { id } = User();
  const [count, setCount] = useState(0);
  const [vagas, setVagas] = useState();
  const [token] = useState(() => {
    const localToken = localStorage.getItem("token") || "";
    if (!localToken) {
      return "";
    }
    return JSON.parse(localToken);
  });
  const history = useHistory();

  if (!token) {
    history.push("/");
  }

  useEffect(() => {
    carrega();
  }, [count, id]);

  const carrega = () => {
    api
      .get(`/vacancies/?cad_like=${id}`)
      .then((res) => {
        setVagas(res.data);
      })
      .catch((e) => console.log(e));
  };
  const subscribe = (vac_id, array_de_vagas) => {
    var id1 = parseInt(id);
    array_de_vagas?.push(id1);
    api
      .patch(
        `/vacancies/${vac_id}`,
        { cad: array_de_vagas },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => setCount(count + 1));
  };
  const unSubscribe = (vac_id, array) => {
    array?.splice(array.indexOf(parseInt(id)), 1);
    api
      .patch(
        `/vacancies/${vac_id}`,
        { cad: array },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => setCount(count + 1));
  };
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Vagas Inscritas</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {vagas &&
          vagas.map((vac) => (
            <DivPrincipal>
              <h1>Vaga: {vac.nome}</h1>
              <h4>{vac.data}</h4>
              <h4 style={{ display: "inline" }}>Modalidade: </h4>
              <span>{vac.presencial ? "Presencial" : "Remota"}</span>
              <p>
                <h4 style={{ display: "inline" }}>
                  Descrição: {vac.descricao}
                </h4>
              </p>
              {!vac.cad?.find((vac) => vac === parseInt(id)) ? (
                <Mybutton
                  onClick={(e) => {
                    subscribe(vac.id, vac.cad);
                  }}
                >
                  Inscreve-se
                </Mybutton>
              ) : (
                <Mybutton onClick={() => unSubscribe(vac.id, vac.cad)}>
                  Desinscreve-se
                </Mybutton>
              )}
            </DivPrincipal>
          ))}
      </div>
    </>
  );
};
export default PageHomeDev;
