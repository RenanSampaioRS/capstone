import AlteraHead from "../../components/AlterHead";
import { User } from "../../providers/UserProvider";
import { useEffect, useState } from "react";
import api from "../../services/api";
import PerfilDev from "../../components/PerfilDev";
import { Div } from "./style";
import { Modal } from "@material-ui/core";
import { BtnAtt } from "../../stylesGlobal";
import { useHistory } from "react-router-dom";
const PageHome = () => {
  const { id } = User();
  const [vagas, setVagas] = useState([]);
  const [candi, setCandi] = useState([]);
  useEffect(() => {
    carrega();
  }, []);
  // INICIO NAO FUÇAR... CODIGO DOS DEUSES
  const carrega = () => {
    api
      .get(`/vacancies?idUser=${id}`)
      .then((res) => {
        setVagas(res.data);
        console.log(res);
        let arr = [];
        res.data.map((pesq_id) =>
          pesq_id.cad.map((add) => arr.push("&id=" + add))
        );
        arr = Array.from(new Set(arr));
        arr = arr.join("");
        if (arr) {
          api.get(`/users/?${arr}`).then((response) => {
            setCandi(response.data);
          });
        }
      })
      .catch((e) => console.log(e));
  };

  // FIM NAO FUÇAR... CODIGO DOS DEUSES
  const [open, setOpen] = useState(false);
  const handleOpen = (e) => {
    setOpen(true);
  };
  const handleClose = (e) => {
    setOpen(false);
  };
  const [perfil, setPerfil] = useState([]);
  const abreDiv = (e) => {
    setPerfil(e);
  };

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
  return (
    <>
      <AlteraHead />
      <div>
        <h1 style={{ textAlign: "center", margin: "5px auto" }}>
          Voce tem: {vagas.length} Anunciada
        </h1>
        <div style={{ display: "flex", flexWrap: "wrap", height: "auto" }}>
          {vagas &&
            vagas.map((dados) => (
              <Div>
                <h1>Nome: {dados.nome}</h1>
                {dados.cad.length === 0 ? (
                  <h3>Essa vaga não tem candidato</h3>
                ) : dados.cad.length === 1 ? (
                  <h3>Essa vaga tem um candidato</h3>
                ) : (
                  <h3>Essa vaga tem {dados.cad.length} candidatos</h3>
                )}
                <br />

                <div style={{ border: "1px double white" }}>
                  {dados.cad &&
                    dados.cad.map((candidatos, i) => (
                      <div>
                        <h2>Candidato</h2>
                        <br />
                        <h3>
                          Nome: {""}
                          {
                            candi.find(
                              (element) => element.id === Number(candidatos)
                            )?.name
                          }
                        </h3>
                        <BtnAtt
                          onClick={() => {
                            handleOpen();
                            abreDiv(
                              candi.find(
                                (element) => element.id === Number(candidatos)
                              )
                            );
                          }}
                        >
                          Perfil
                        </BtnAtt>
                        <Modal
                          style={{ opacity: "1.0" }}
                          open={open}
                          onClose={handleClose}
                        >
                          <PerfilDev dados={perfil} />
                        </Modal>
                      </div>
                    ))}
                </div>
              </Div>
            ))}
        </div>
      </div>
    </>
  );
};
export default PageHome;
