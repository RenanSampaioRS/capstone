import { Modal } from "@material-ui/core";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import api from "../../services/api";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { User } from "../../providers/UserProvider";
import { DivPrincipal, DivChecked, Btn } from "./style";
import { InputProfile } from "../../stylesGlobal";

const VacanciesListEdit = (props) => {
  const { id } = User();

  const [token] = useState(() => {
    const localToken = localStorage.getItem("token") || "";
    if (!localToken) {
      return "";
    }
    return JSON.parse(localToken);
  });
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const schema = yup.object().shape({
    nome: yup.string().required("Campo obrigatório"),
    descricao: yup.string(),
    presencial: yup.boolean(),
    beneficios: yup.string(),
    local: yup.string(),
    reactjs: yup.boolean(),
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
    data: yup.string(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const handleData = (dados) => {
    api
      .patch(
        `/vacancies/${props.dados.id}`,
        {
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
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        if (response.status === 200) {
          props.notifyUpVacancies();
          api
            .get(`/vacancies?idUser=${id}`)
            .then((response) => {
              props.setLista(response.data);
            })
            .catch((e) => console.log(e));
        }
        setTimeout(() => {
          handleClose();
        }, 2000);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      <button onClick={handleOpen}>Editar vaga</button>
      <Modal open={open} onClose={handleClose}>
        <DivPrincipal>
          <form onSubmit={handleSubmit(handleData)}>
            <div>
              <InputProfile
                type="text"
                defaultValue={props.dados.nome}
                placeholder="nome"
                {...register("nome")}
              />
            </div>
            <div>
              <InputProfile
                type="text"
                defaultValue={props.dados.descricao}
                placeholder="descricao"
                {...register("descricao")}
              />
            </div>
            <div>
              <input
                {...register("presencial")}
                type="checkbox"
                name="presencial"
                defaultChecked={props.dados.presencial}
              />
              <label for="Presencial">Presencial</label>
              <p style={{ color: "red" }}>{errors.presencial?.message}</p>
            </div>

            <div>
              <InputProfile
                type="text"
                defaultValue={props.dados.beneficios}
                placeholder="beneficios"
                {...register("beneficios")}
              />
            </div>
            <div>
              <InputProfile
                type="text"
                defaultValue={props.dados.local}
                placeholder="local"
                {...register("local")}
              />
            </div>
            <DivChecked>
              <div>
                <input
                  {...register("reactjs")}
                  type="checkbox"
                  name="reactjs"
                  defaultChecked={props.dados.reactjs}
                />
                <label for="ReactJs">ReactJs</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="reactNative"
                  defaultChecked={props.dados.reactNative}
                  {...register("reactNative")}
                />
                <label for="ReactNative">React Native</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="flutter"
                  defaultChecked={props.dados.flutter}
                  {...register("flutter")}
                />
                <label for="flutter">Flutter</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="python"
                  defaultChecked={props.dados.python}
                  {...register("python")}
                />
                <label for="python">Python</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="javascript"
                  defaultChecked={props.dados.javascript}
                  {...register("javascript")}
                />
                <label for="python">JavaScript</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="sql"
                  defaultChecked={props.dados.sql}
                  {...register("sql")}
                />
                <label for="sql">Sql</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="typescript"
                  defaultChecked={props.dados.typescript}
                  {...register("typescript")}
                />
                <label for="typeScript">TypeScript</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="nodejs"
                  defaultChecked={props.dados.nodejs}
                  {...register("nodejs")}
                />
                <label for="nodejs">NodeJs</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="dart"
                  defaultChecked={props.dados.dart}
                  {...register("dart")}
                />
                <label for="dart">Dart</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="ruby_on_rails"
                  defaultChecked={props.dados.ruby_on_rails}
                  {...register("ruby_on_rails")}
                />
                <label for="ruby_on_rails">Ruby on rails</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="objective_c"
                  defaultChecked={props.dados.objective_c}
                  {...register("objective_c")}
                />
                <label for="objective_c">Objective C</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  onChange={(e) => e.target.checked}
                  name="go"
                  defaultChecked={props.dados.go}
                  {...register("go")}
                />
                <label for="go">Go</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="html5"
                  defaultChecked={props.dados.html5}
                  {...register("html5")}
                />
                <label for="html5">Html5</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="bootstrap"
                  defaultChecked={props.dados.bootstrap}
                  {...register("bootstrap")}
                />
                <label for="bootstrap">Bootstrap</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="php"
                  defaultChecked={props.dados.php}
                  {...register("php")}
                />
                <label for="php">Php</label>
              </div>
            </DivChecked>
            <Btn type="submit">Editar</Btn>
          </form>
        </DivPrincipal>
      </Modal>
    </>
  );
};
export default VacanciesListEdit;
