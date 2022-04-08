import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { User } from "../../providers/UserProvider";
import api from "../../services/api";
import { useState, useEffect } from "react";
import VacanciesList from "../VacanciesList";
import { Vac } from "../../providers/VacancieProvider";

import { InputProfile, BtnAtt } from "../../stylesGlobal";
import { DivChecked, DivCampos, DivBotao } from "./style";

const Vacancies = ({ notifyCreateVacancies, notifyUpVacancies }) => {
  const [lista, setLista] = useState();

  const { vacCountClick, setVacCountClick } = Vac();

  const [token] = useState(() => {
    const localToken = localStorage.getItem("token") || "";
    if (!localToken) {
      return "";
    }
    return JSON.parse(localToken);
  });

  const { id } = User();

  useEffect(() => {
    api
      .get(`/vacancies?idUser=${id}`)
      .then((response) => {
        setLista(response.data);
      })
      .catch((e) => console.log(e));
  }, [id, vacCountClick]);

  const handleData = (dados) => {
    if (dados.presencial === "true") {
      dados.presencial = true;
    }
    if (dados.presencial === "false") {
      dados.presencial = false;
    }
    api
      .post(
        "/vacancies",
        {
          idUser: id,
          nome: dados.nome,
          descricao: dados.descricao,
          presencial: dados.presencial,
          beneficios: dados.beneficios,
          local: dados.local,
          data: dados.data,
          reactjs: dados.reactjs,
          reactNative: dados.reactNative,
          flutter: dados.flutter,
          python: dados.python,
          javascript: dados.javascript,
          sql: dados.sql,
          typescript: dados.typescript,
          nodejs: dados.nodejs,
          dart: dados.dart,
          ruby_on_rails: dados.ruby_on_rails,
          objective_c: dados.objective_c,
          go: dados.go,
          html5: dados.html5,
          bootstrap: dados.bootstrap,
          php: dados.php,
          cad: [],
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        notifyCreateVacancies();
        setVacCountClick(vacCountClick + 1);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const schema = yup.object().shape({
    nome: yup.string().required("Campo obrigatório"),
    descricao: yup.string().required("Campo obrigatório"),
    beneficios: yup.string().required("Campo obrigatório"),
    local: yup.string().required("Campo obrigatório"),
    reactNative: yup.boolean(),
    flutter: yup.boolean(),
    python: yup.boolean(),
    javascript: yup.boolean(),
    sql: yup.boolean(),
    typescript: yup.boolean(),
    nodejs: yup.boolean(),
    dart: yup.boolean(),
    ruby_on_rails: yup.boolean(),
    objective_c: yup.boolean(),
    go: yup.boolean(),
    html5: yup.boolean(),
    bootstrap: yup.boolean(),
    php: yup.boolean(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function deleta(numero) {
    api
      .delete(`/vacancies/${numero}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        setVacCountClick(vacCountClick + 1);
      })
      .catch((e) => console.log(e));
  }

  const convertDate = () => {
    let newDate = new Date();
    return `${newDate.getDate()}/${
      newDate.getMonth() + 1
    }/${newDate.getFullYear()} ${newDate.getHours()}h:${newDate.getMinutes()}min`;
  };

  return (
    <>
      <form onSubmit={handleSubmit(handleData)}>
        <DivCampos>
          <div>
            <InputProfile
              type="text"
              placeholder="nome"
              {...register("nome")}
            />
            <p style={{ color: "red" }}>{errors.nome?.message}</p>
          </div>
          <div>
            <InputProfile
              type="text"
              placeholder="descricao"
              {...register("descricao")}
            />
            <p style={{ color: "red" }}>{errors.descricao?.message}</p>
          </div>
          <div>
            <span>É presencial?</span>
            <input
              {...register("presencial")}
              type="radio"
              value={true}
              required="required"
            />
            <label>Sim</label>
            <input {...register("presencial")} type="radio" value={false} />
            <label>Não</label>
          </div>

          <div>
            <InputProfile
              type="text"
              placeholder="beneficios"
              {...register("beneficios")}
            />
            <p style={{ color: "red" }}>{errors.beneficios?.message}</p>
          </div>

          <div>
            <InputProfile
              type="text"
              placeholder="local"
              {...register("local")}
            />
            <p style={{ color: "red" }}>{errors.local?.message}</p>
          </div>
          <div>
            <InputProfile
              type="hidden"
              value={convertDate()}
              placeholder="data"
              {...register("data")}
            />
          </div>
        </DivCampos>
        <DivChecked>
          <div>
            <input
              type="checkbox"
              name="reactjs"
              value="true"
              {...register("reactjs")}
            />
            <label for="ReactJs">ReactJs</label>
          </div>

          <div>
            <input
              type="checkbox"
              name="reactNative"
              value="true"
              {...register("reactNative")}
            />
            <label for="ReactNative">React Native</label>
          </div>

          <div>
            <input
              type="checkbox"
              name="flutter"
              value={true}
              {...register("flutter")}
            />
            <label for="flutter">Flutter</label>
          </div>

          <div>
            <input
              type="checkbox"
              name="python"
              value={true}
              {...register("python")}
            />
            <label for="python">Python</label>
          </div>

          <div>
            <input
              type="checkbox"
              name="javascript"
              value="true"
              {...register("javascript")}
            />
            <label for="javascript">JavaScript</label>
          </div>

          <div>
            <input
              type="checkbox"
              name="sql"
              value="true"
              {...register("sql")}
            />
            <label for="sql">SQL</label>
          </div>

          <div>
            <input
              type="checkbox"
              name="typescript"
              value="true"
              {...register("typescript")}
            />
            <label for="typescript">Type scriṕt</label>
          </div>

          <div>
            <input
              type="checkbox"
              name="nodejs"
              value="true"
              {...register("nodejs")}
            />
            <label for="nodejs">NodeJs</label>
          </div>

          <div>
            <input
              type="checkbox"
              name="dart"
              value="true"
              {...register("dart")}
            />
            <label for="dart">Dart</label>
          </div>

          <div>
            <input
              type="checkbox"
              name="ruby_on_rails"
              value="true"
              {...register("ruby_on_rails")}
            />
            <label for="ruby_on_rails">Ruby on rails</label>
          </div>

          <div>
            <input
              type="checkbox"
              name="objective_c"
              value="true"
              {...register("objective_c")}
            />
            <label for="objective_c">Objective C</label>
          </div>

          <div>
            <input type="checkbox" name="go" value="true" {...register("go")} />
            <label for="go">Go</label>
          </div>

          <div>
            <input
              type="checkbox"
              name="html5"
              value="true"
              {...register("html5")}
            />
            <label for="html5">Html5</label>
          </div>

          <div>
            <input
              type="checkbox"
              name="bootstrap"
              value="true"
              {...register("bootstrap")}
            />
            <label for="bootstrap">Bootstrap</label>
          </div>

          <div>
            <input
              type="checkbox"
              name="php"
              value="true"
              {...register("php")}
            />
            <label for="php">Php</label>
          </div>
        </DivChecked>

        <DivBotao>
          <BtnAtt type="submit">Anunciar vaga</BtnAtt>
        </DivBotao>
      </form>

      <VacanciesList
        lista={lista}
        setLista={setLista}
        deleta={deleta}
        notifyUpVacancies={notifyUpVacancies}
      />
    </>
  );
};

export default Vacancies;
