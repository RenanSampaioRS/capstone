import { useState } from "react";
import { User } from "../../providers/UserProvider";
import { Mybutton } from "./styles";
import api from "../../services/api";
import { Vac } from "../../providers/VacancieProvider";
import { BtnAtt, DivCheckeBox } from "../../stylesGlobal";
import { InputPesq, DivP, DivB, DivPesque } from "../GetOneDev/style";
import { DivPrincipal } from "../VacanciesList/style";

const GetVacanciesComp = () => {
  const { id } = User();
  const [token] = useState(() => {
    const localToken = localStorage.getItem("token") || "";
    if (!localToken) {
      return "";
    }
    return JSON.parse(localToken);
  });
  const [vacancies, setVacancies] = useState([]);
  const [users] = useState([]);
  const { vacCountClick, setVacCountClick } = Vac();
  // meu codigo

  const handleData = (e) => {
    setVacancies([]);
    e.preventDefault();
    api
      .get(
        `/vacancies?${
          e.target.busca.value ? "&nome_like=" + e.target.busca.value : ""
        }${
          e.target.descr.value ? "&descricao_like=" + e.target.descr.value : ""
        }${e.target.presencial.checked ? "&presencial=true" : ""}${
          e.target.reactjs.checked ? "&reactjs=true" : ""
        }${e.target.reactNative.checked ? "&reactNative=true" : ""}${
          e.target.flutter.checked ? "&flutter=true" : ""
        }${e.target.python.checked ? "&python=true" : ""}${
          e.target.javascript.checked ? "&javascript=true" : ""
        }${e.target.sql.checked ? "&sql=true" : ""}${
          e.target.typescript.checked ? "&typescript=true" : ""
        }${e.target.nodejs.checked ? "&nodejs=true" : ""}${
          e.target.dart.checked ? "&dart=true" : ""
        }${e.target.ruby_on_rails.checked ? "&ruby_on_rails=true" : ""}${
          e.target.objective_c.checked ? "&objective_c=true" : ""
        }${e.target.go.checked ? "&go=true" : ""}${
          e.target.html5.checked ? "&html5=true" : ""
        }${e.target.bootstrap.checked ? "&bootstrap=true" : ""}${
          e.target.php.checked ? "&php=true" : ""
        }`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        setVacancies(res.data);
      })
      .catch((e) => console.log(e));
  };

  // fim meu codigo
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
      .then((res) => setVacCountClick(vacCountClick + 1))
      .catch((e) => console.log(e));
  };

  const unSubscribe = (vac_id, array) => {
    array?.splice(array.indexOf(id), 1);
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
      .then((res) => setVacCountClick(vacCountClick + 1))
      .catch((e) => console.log(e));
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Pesquisar Vagas</h1>
      <form onSubmit={(e) => handleData(e)}>
        <DivPesque>
          <DivP>
            <InputPesq
              name="busca"
              type="text"
              placeholder="Nome da vaga"
            ></InputPesq>
          </DivP>
          <DivP>
            <InputPesq
              name="descr"
              type="text"
              placeholder="Descrição"
            ></InputPesq>
          </DivP>
        </DivPesque>
        <DivCheckeBox>
          <div>
            <input type="checkbox" name="presencial"></input>
            <label>Presencial</label>
          </div>
          <div>
            <input type="checkbox" name="reactjs"></input>
            <label>Reactjs</label>
          </div>
          <div>
            <input type="checkbox" name="reactNative"></input>
            <label>React Native</label>
          </div>
          <div>
            <input type="checkbox" name="flutter"></input>
            <label>Flutter</label>
          </div>
          <div>
            <input input type="checkbox" name="python"></input>
            <label>Python</label>
          </div>
          <div>
            <input type="checkbox" name="javascript"></input>
            <label>Javascript</label>
          </div>
          <div>
            <input type="checkbox" name="sql"></input>
            <label>Sql</label>
          </div>
          <div>
            <input type="checkbox" name="typescript"></input>
            <label>Typescript</label>
          </div>
          <div>
            <input type="checkbox" name="nodejs"></input>
            <label>Nodejs</label>
          </div>
          <div>
            <input type="checkbox" name="dart"></input>
            <label>dart</label>
          </div>
          <div>
            <input type="checkbox" name="ruby_on_rails"></input>
            <label>Ruby on rails</label>
          </div>
          <div>
            <input type="checkbox" name="objective_c"></input>
            <label>Objective c</label>
          </div>
          <div>
            <input type="checkbox" name="go"></input>
            <label>Go</label>
          </div>
          <div>
            <input type="checkbox" name="html5"></input>
            <label>Html5</label>
          </div>
          <div>
            <input type="checkbox" name="bootstrap"></input>
            <label>Bootstrap</label>
          </div>
          <div>
            <input type="checkbox" name="php"></input>
            <label>Php</label>
          </div>
        </DivCheckeBox>
        <DivB>
          <BtnAtt type="submit">Procurar</BtnAtt>
        </DivB>
      </form>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {vacancies &&
          vacancies.map((vac) => (
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
      <br></br>
      <br></br>
      <br></br>

      <div>
        {users &&
          users.map((item) => (
            <>
              <div>
                <h1>{item.name}</h1>
                <h2>{item.id}</h2>
              </div>
            </>
          ))}
      </div>
    </>
  );
};

export default GetVacanciesComp;
