import { Rotate } from "react-awesome-reveal";
import CardVagas from "../CardVagas/index.js";
import VacanciesListEdit from "./edit.js";

import { DivVaga } from "./style";

const VacanciesList = (props) => {
  return (
    <div>
      <h1 style={{ margin: "10px", padding: "20px" }}>Vagas Cadastradas</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {props.lista &&
          props.lista.map((item, i) => (
            <div key={i}>
              <Rotate>
                <DivVaga>
                  <CardVagas item={item} />
                  <button onClick={() => props.deleta(item.id)}> Delete</button>
                  <VacanciesListEdit
                    dados={item}
                    setLista={props.setLista}
                    notifyUpVacancies={props.notifyUpVacancies}
                  />
                </DivVaga>
              </Rotate>
            </div>
          ))}
      </div>
    </div>
  );
};

export default VacanciesList;
