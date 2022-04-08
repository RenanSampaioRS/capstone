import IMGbootstrap from "../../img/icones/bootstrap.png";
import IMGc from "../../img/icones/c.png";
import IMGdart from "../../img/icones/dart.png";
import IMGflutter from "../../img/icones/flutter.png";
import IMGpython from "../../img/icones/python.png";
import IMGphp from "../../img/icones/php.png";
import IMGsql from "../../img/icones/sql.png";
import IMGtypescript from "../../img/icones/typescript.png";
import IMGruby_on_rails from "../../img/icones/rubyonrails.png";
import IMGnodejs from "../../img/icones/nodejs.png";
import IMGhtml5 from "../../img/icones/html5.png";
import IMGgo from "../../img/icones/go.png";
import IMGreactjs from "../../img/icones/reactjs.png";
import IMGreact_native from "../../img/icones/reactnative.png";
import IMGjava_script from "../../img/icones/javascript.png";

import { Principa } from "./style";
const PerfilDev = (props) => {
  return (
    <Principa>
      <div>
        <h4 style={{ display: "inline" }}>Nome: </h4>
        {props.dados?.name ? props.dados?.name : "Não informado"}
      </div>
      <div>
        <h4 style={{ display: "inline" }}>E-mail: </h4>
        {props.dados?.email ? props.dados?.email : "Não informado"}
      </div>
      <div>
        <h4 style={{ display: "inline" }}>Descrição:</h4>{" "}
        {props.dados?.description ? props.dados?.description : "Não informado"}
      </div>
      <div>
        <h4 style={{ display: "inline" }}>Quarter:</h4>{" "}
        {props.dados?.quarter ? props.dados?.quarter : "Não informado"}
      </div>
      <div>
        <h4 style={{ display: "inline" }}>Midia: </h4>
        {props.dados?.social_medias
          ? props.dados?.social_medias
          : "Não informado"}
      </div>
      <div>
        <h4 style={{ display: "inline" }}>Celular:</h4>{" "}
        {props.dados?.cellPhone ? props.dados?.cellPhone : "Não informado"}
      </div>
      <div>
        <h4 style={{ display: "inline" }}>Tem emprego:</h4>{" "}
        {props.dados?.have_job
          ? "Sim"
          : "Não" || (!props.dados?.have_job && "Não informado")}
      </div>
      <div>
        <h4 style={{ display: "inline" }}>Coach:</h4>{" "}
        {props.dados?.is_coach
          ? "Sim"
          : "Não" || (!props.dados?.is_coach && "Não informado")}
      </div>
      <div>
        <h4 style={{ display: "inline" }}>Cidade:</h4>{" "}
        {props.dados?.city ? props.dados?.city : "Não informado"}
      </div>
      <div>
        <h4 style={{ display: "inline" }}>Disponel p/ trabalhar:</h4>{" "}
        {props.dados?.avaliable_job
          ? "Sim"
          : "Não" || (!props.dados?.avaliable_job && "Não informado")}
      </div>
      <div className="img">
        <h4 style={{ textAlign: "center" }}>Tecnologias do Dev</h4>{" "}
        {props.dados?.reactjs ? <img src={IMGreactjs} alt="react"></img> : ""}
        {props.dados?.reactNative}
        {props.dados?.reactNative ? (
          <img src={IMGreact_native} alt="react"></img>
        ) : (
          ""
        )}
        {props.dados?.flutter ? <img src={IMGflutter} alt="react"></img> : ""}
        {props.dados?.python ? <img src={IMGpython} alt="react"></img> : ""}
        {props.dados?.javascript ? (
          <img src={IMGjava_script} alt="react"></img>
        ) : (
          ""
        )}
        {props.dados?.sql ? <img src={IMGsql} alt="react"></img> : ""}
        {props.dados?.typescript ? (
          <img src={IMGtypescript} alt="react"></img>
        ) : (
          ""
        )}
        {props.dados?.nodejs ? <img src={IMGnodejs} alt="react"></img> : ""}
        {props.dados?.dart ? <img src={IMGdart} alt="react"></img> : ""}
        {props.dados?.ruby_on_rails ? (
          <img src={IMGruby_on_rails} alt="react"></img>
        ) : (
          ""
        )}
        {props.dados?.objective_c ? <img src={IMGc} alt="react"></img> : ""}
        {props.dados?.go ? <img src={IMGgo} alt="react"></img> : ""}
        {props.dados?.html5 ? <img src={IMGhtml5} alt="react"></img> : ""}
        {props.dados?.bootstrap ? (
          <img src={IMGbootstrap} alt="react"></img>
        ) : (
          ""
        )}
        {props.dados?.php ? <img src={IMGphp} alt="react"></img> : ""}
      </div>
    </Principa>
  );
};

export default PerfilDev;
