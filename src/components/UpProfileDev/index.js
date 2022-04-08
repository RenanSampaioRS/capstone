import { useForm } from "react-hook-form";
import { useState } from "react";
import api from "../../services/api";
import { User } from "../../providers/UserProvider";
import { useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "react-toastify/dist/ReactToastify.css";

import {
  InputProfile,
  BtnAtt,
  DivCheckeBox,
  DivOption,
} from "../../stylesGlobal";
import { useHistory } from "react-router-dom";

const UpProfileDev = ({ notifyUpProfDev }) => {
  const { id, loggedUser } = User();

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

  const [nameInput, setNameInput] = useState("");

  const [cityInput, setCityInput] = useState("");

  const [have_jobInput, setHave_jobInput] = useState("");

  const [avaliable_jobInput, setAvaliable_jobInput] = useState("");

  const [quarterInput, setQuarterInput] = useState("");

  const [social_mediasInput, setSocial_mediasInput] = useState("");

  const [cellPhoneInput, setCellPhoneInput] = useState("");

  // const [softSkillsInput, setSoftSkillsInput] = useState("");

  const [descriptionInput, setDescriptionInput] = useState("");

  const [is_coachInput, setIs_coachInput] = useState("");

  // começa putaria

  const schema = yup.object().shape({
    nome: yup.string(),
    city: yup.string(),
    is_coach: yup.boolean().nullable(),
    quarter: yup.string().nullable(),
    social_medias: yup.string(),
    cellPhone: yup.string(),
    description: yup.string(),
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
    avaliable_job: yup.boolean().nullable(),
    have_job: yup.boolean().nullable(),
  });

  const [reactjsInput, setReactjsInput] = useState(false);
  const [reactNativeInput, setReactNativeInput] = useState(false);
  const [flutterInput, setFlutterInput] = useState(false);
  const [pythonInput, setPythonInput] = useState(false);
  const [javascriptInput, setJavascriptInput] = useState(false);
  const [sqlInput, setSqlInput] = useState(false);
  const [typescriptInput, setTypeScriptInput] = useState(false);
  const [nodejsInput, setNodeJsInput] = useState(false);
  const [dartInput, setDartInput] = useState(false);
  const [ruby_on_railsInput, setRuby_on_railsInput] = useState(false);
  const [objective_cInput, setObjective_cInput] = useState(false);
  const [goInput, setGoInput] = useState(false);
  const [html5Input, setHtml5Input] = useState(false);
  const [bootstrapInput, setBootstrapInput] = useState(false);
  const [phpInput, setPhpInput] = useState(false);

  // termina putaria

  useEffect(() => {
    setNameInput(loggedUser.name);
    setCityInput(loggedUser.city);
    setHave_jobInput(loggedUser.have_job);
    setAvaliable_jobInput(loggedUser.avaliable_job);
    setQuarterInput(loggedUser.quarter);
    setSocial_mediasInput(loggedUser.social_medias);
    setCellPhoneInput(loggedUser.cellPhone);
    // setSoftSkillsInput(loggedUser.softSkills);
    // cameça putaria

    setReactjsInput(loggedUser.reactjs);
    setReactNativeInput(loggedUser.reactNative);
    setFlutterInput(loggedUser.flutter);
    setPythonInput(loggedUser.python);
    setJavascriptInput(loggedUser.javascript);
    setSqlInput(loggedUser.sql);
    setTypeScriptInput(loggedUser.typescript);
    setNodeJsInput(loggedUser.nodejs);
    setDartInput(loggedUser.dart);
    setRuby_on_railsInput(loggedUser.ruby_on_rails);
    setObjective_cInput(loggedUser.objective_c);
    setGoInput(loggedUser.go);
    setHtml5Input(loggedUser.html5);
    setBootstrapInput(loggedUser.bootstrap);
    setPhpInput(loggedUser.php);

    // termina putaria
    setDescriptionInput(loggedUser.description);
    setIs_coachInput(loggedUser.is_coach);
  }, [
    loggedUser.avaliable_job,
    loggedUser.cellPhone,
    loggedUser.city,
    loggedUser.description,
    loggedUser.have_job,
    loggedUser.is_coach,
    loggedUser.name,
    loggedUser.quarter,
    loggedUser.social_medias,
    // loggedUser.softSkills,
    loggedUser.reactjs,
    loggedUser.flutter,
    loggedUser.python,
    loggedUser.javascript,
    loggedUser.sql,
    loggedUser.typescript,
    loggedUser.nodejs,
    loggedUser.dart,
    loggedUser.ruby_on_rails,
    loggedUser.objective_c,
    loggedUser.go,
    loggedUser.html5,
    loggedUser.bootstrap,
    loggedUser.php,
    loggedUser.reactNative,
  ]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleUpdate = (data) => {
    api
      .patch(
        `/users/${id}`,
        {
          name: nameInput,
          city: cityInput,
          have_job: have_jobInput,
          avaliable_job: avaliable_jobInput,
          quarter: quarterInput,
          social_medias: social_mediasInput,
          cellPhone: cellPhoneInput,
          description: descriptionInput,
          is_coach: is_coachInput,
          reactjs: reactjsInput,
          reactNative: reactNativeInput,
          flutter: flutterInput,
          python: pythonInput,
          javascript: javascriptInput,
          sql: sqlInput,
          typescript: typescriptInput,
          nodejs: nodejsInput,
          dart: dartInput,
          ruby_on_rails: ruby_on_railsInput,
          objective_c: objective_cInput,
          go: goInput,
          html5: html5Input,
          bootstrap: bootstrapInput,
          php: phpInput,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        notifyUpProfDev();
      })
      .catch((e) => console.log(e));
  };

  return (
    <>
      <h2>Atualizar Perfil Dev</h2>
      <form onSubmit={handleSubmit(handleUpdate)}>
        <div>
          <InputProfile
            {...register("name")}
            placeholder="Nome"
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
          />
        </div>
        <div>
          <InputProfile
            {...register("city")}
            placeholder="Cidade"
            value={cityInput}
            onChange={(e) => setCityInput(e.target.value)}
          />
        </div>
        <div>
          <span>Quarter</span>
          <input
            {...register("quarter")}
            type="radio"
            value={quarterInput}
            onChange={() => setQuarterInput("q1")}
            checked={quarterInput === "q1"}
            required="required"
          />
          <label>Q1</label>
          <input
            {...register("quarter")}
            type="radio"
            value={quarterInput}
            onChange={() => setQuarterInput("q2")}
            checked={quarterInput === "q2"}
          />
          <label>Q2</label>
          <input
            {...register("quarter")}
            type="radio"
            value={quarterInput}
            onChange={() => setQuarterInput("q3")}
            checked={quarterInput === "q3"}
          />
          <label>Q3</label>
          <input
            {...register("quarter")}
            type="radio"
            value={quarterInput}
            onChange={() => setQuarterInput("q4")}
            checked={quarterInput === "q4"}
          />
          <label>Q4</label>
          <p style={{ color: "red" }}>{errors.quarter?.message}</p>
        </div>

        <div>
          <InputProfile
            {...register("social_medias")}
            placeholder="Redes Sociais"
            value={social_mediasInput}
            onChange={(e) => setSocial_mediasInput(e.target.value)}
          />
        </div>
        <div>
          <InputProfile
            {...register("cellPhone")}
            placeholder="Celular"
            value={cellPhoneInput}
            onChange={(e) => setCellPhoneInput(e.target.value)}
          />
        </div>
        {/* <div>
          <InputProfile
            {...register("softSkills")}
            placeholder="SoftSkills"
            value={softSkillsInput}
            onChange={(e) => setSoftSkillsInput(e.target.value)}
          />
        </div> */}

        <div>
          <InputProfile
            {...register("description")}
            placeholder="Descrição"
            value={descriptionInput}
            onChange={(e) => setDescriptionInput(e.target.value)}
          />
        </div>
        <DivCheckeBox>
          <div>
            <input
              {...register("reactjs")}
              type="checkbox"
              checked={reactjsInput === true && <>checked</>}
              value="true"
              onChange={(e) => setReactjsInput(e.target.checked)}
            />

            <label for="ReactJs">ReactJs</label>
          </div>
          <div>
            <input
              {...register("reactNative")}
              type="checkbox"
              checked={reactNativeInput === true && <>checked</>}
              value="true"
              onChange={(e) => setReactNativeInput(e.target.checked)}
            />
            <label for="ReactJs">React Native</label>
          </div>
          <div>
            <input
              {...register("flutter")}
              type="checkbox"
              checked={flutterInput === true && <>checked</>}
              value="true"
              onChange={(e) => setFlutterInput(e.target.checked)}
            />
            <label for="flutter">Flutter</label>
          </div>
          <div>
            <input
              {...register("python")}
              type="checkbox"
              checked={pythonInput === true && <>checked</>}
              value="true"
              onChange={(e) => setPythonInput(e.target.checked)}
            />
            <label for="python">Python</label>
          </div>
          <div>
            <input
              {...register("javascript")}
              type="checkbox"
              checked={javascriptInput === true && <>checked</>}
              value="true"
              onChange={(e) => setJavascriptInput(e.target.checked)}
            />
            <label for="javascript">JavaScript</label>
          </div>
          <div>
            <input
              {...register("sql")}
              type="checkbox"
              checked={sqlInput === true && <>checked</>}
              value="true"
              onChange={(e) => setSqlInput(e.target.checked)}
            />
            <label for="sql">SQL</label>
          </div>
          <div>
            <input
              {...register("typescript")}
              type="checkbox"
              checked={typescriptInput === true && <>checked</>}
              value="true"
              onChange={(e) => setTypeScriptInput(e.target.checked)}
            />
            <label for="typeScript">Typescriṕt</label>
          </div>
          <div>
            <input
              {...register("nodejs")}
              type="checkbox"
              checked={nodejsInput === true && <>checked</>}
              value="true"
              onChange={(e) => setNodeJsInput(e.target.checked)}
            />
            <label for="nodejs">NodeJs</label>
          </div>
          <div>
            <input
              {...register("dart")}
              type="checkbox"
              checked={dartInput === true && <>checked</>}
              value="true"
              onChange={(e) => setDartInput(e.target.checked)}
            />
            <label for="dart">Dart</label>
          </div>
          <div>
            <input
              {...register("ruby_on_rails")}
              type="checkbox"
              checked={ruby_on_railsInput === true && <>checked</>}
              value="true"
              onChange={(e) => setRuby_on_railsInput(e.target.checked)}
            />
            <label for="ruby_on_rails">Ruby on rails</label>
          </div>
          <div>
            <input
              {...register("objective_c")}
              type="checkbox"
              checked={objective_cInput === true && <>checked</>}
              value="true"
              onChange={(e) => setObjective_cInput(e.target.checked)}
            />
            <label for="objective_c">Objective c</label>
          </div>
          <div>
            <input
              {...register("go")}
              type="checkbox"
              checked={goInput === true && <>checked</>}
              value="true"
              onChange={(e) => setGoInput(e.target.checked)}
            />
            <label for="go">Go</label>
          </div>
          <div>
            <input
              {...register("html5")}
              type="checkbox"
              checked={html5Input === true && <>checked</>}
              value="true"
              onChange={(e) => setHtml5Input(e.target.checked)}
            />
            <label for="html5">Html5</label>
          </div>
          <div>
            <input
              {...register("bootstrap")}
              type="checkbox"
              checked={bootstrapInput === true && <>checked</>}
              value="true"
              onChange={(e) => setBootstrapInput(e.target.checked)}
            />
            <label for="bootstrap">Bootstrap</label>
          </div>
          <div>
            <input
              {...register("php")}
              type="checkbox"
              checked={phpInput === true && <>checked</>}
              value="true"
              onChange={(e) => setPhpInput(e.target.checked)}
            />
            <label for="php">Php</label>
          </div>
        </DivCheckeBox>
        <DivOption>
          <div>
            <span>Você é coach?</span>
            <input
              {...register("is_coach")}
              type="radio"
              value={is_coachInput}
              onChange={() => setIs_coachInput(true)}
              checked={is_coachInput === true}
              required="required"
            />
            <label>Sou coach</label>
            <input
              {...register("is_coach")}
              type="radio"
              value={is_coachInput}
              onChange={() => setIs_coachInput(false)}
              checked={is_coachInput === false}
            />
            <label>Não sou coach</label>
            <p style={{ color: "red" }}>{errors.is_coach?.message}</p>
          </div>
          <div>
            <span>Você possui emprego?</span>
            <input
              {...register("have_job")}
              type="radio"
              value={have_jobInput}
              onChange={() => setHave_jobInput(true)}
              checked={have_jobInput === true}
              required="required"
            />
            <label>Empregado</label>
            <input
              {...register("have_job")}
              type="radio"
              value={have_jobInput}
              onChange={() => setHave_jobInput(false)}
              checked={have_jobInput === false}
            />
            <label>Desempregado</label>
            <p style={{ color: "red" }}>{errors.have_job?.message}</p>
          </div>

          <div>
            <span>Você está disponível para trabalhar?</span>
            <input
              {...register("avaliable_job")}
              type="radio"
              value={avaliable_jobInput}
              onChange={() => setAvaliable_jobInput(true)}
              checked={avaliable_jobInput === true}
              required="required"
            />
            <label>Disponível</label>
            <input
              {...register("avaliable_job")}
              type="radio"
              value={avaliable_jobInput}
              onChange={() => setAvaliable_jobInput(false)}
              checked={avaliable_jobInput === false}
            />
            <label>Não Disponível</label>
            <p style={{ color: "red" }}>{errors.avaliable_job?.message}</p>
          </div>
        </DivOption>
        <div>
          <BtnAtt type="submit">Atualizar</BtnAtt>
        </div>
      </form>
    </>
  );
};

export default UpProfileDev;
