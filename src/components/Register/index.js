import api from "../../services/api";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Input, Seletor } from "../../stylesGlobal";
import { Boxes, Content } from "./styled";
import { LogReg } from "../../providers/LogRegProvider";
import React from "react";

const Register = ({ notifyReg }) => {
  const { setStatus } = LogReg();

  const handleMessage = () => {
    setTimeout(() => {
      setStatus(false);
    }, 2000);
  };

  const handleData = (dados) => {
    if (dados.type === "pf") {
      api
        .post("/register", {
          name: dados.name,
          password: dados.password,
          email: dados.email,
          type: dados.type,
          city: "",
          have_job: "",
          avaliable_job: "",
          quarter: "",
          social_medias: "",
          cellPhone: "",
          description: "",
          is_coach: "",
        })
        .then((response) => {
          if (response.status === 201) {
            notifyReg();
            handleMessage();
          }
        })
        .catch(() => {
          setError("type", { message: "Email já existente" });
        });
    } else if (dados.type === "pj") {
      api
        .post("/register", {
          name: dados.name,
          password: dados.password,
          email: dados.email,
          type: dados.type,
          city: "",
          social_medias: "",
          description: "",
        })
        .then((response) => {
          if (response.status === 201) {
            notifyReg();
            handleMessage();
          }
        })
        .catch(() => {
          setError("type", { message: "Email já existente" });
        });
    }
  };

  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    email: yup.string().email("E-MAIL inválido").required("Campo obrigatório"),
    password: yup
      .string()
      .min(8, "Mínimo de 8 dígitos")
      .matches(
        /^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Senha deve conter ao menos uma letra maiúscula, uma minúscula, um número e um caracter especial!"
      )
      .required("Campo obrigatório"),
    type: yup.string().required("Campo obrigatório"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <>
      <Boxes>
        <span></span>
        <Content>
          <form onSubmit={handleSubmit(handleData)}>
            <div>
              <Input type="text" placeholder="Nome" {...register("name")} />
              <p style={{ color: "red" }}>{errors.name?.message}</p>
            </div>
            <div>
              <Input type="text" placeholder="E-mail" {...register("email")} />
              <p style={{ color: "red" }}>{errors.email?.message}</p>
            </div>
            <div>
              <Input
                type="password"
                name="password"
                placeholder="Senha"
                {...register("password")}
              />
              <p style={{ color: "red" }}>{errors.password?.message}</p>
            </div>
            <div>
              <label>Tipo de Pessoa</label>
              <Seletor {...register("type")}>
                <option value="pf">Dev</option>
                <option value="pj">Empresa</option>
              </Seletor>
              <p style={{ color: "red" }}>{errors.type?.message}</p>
              <p></p>
            </div>
            <Button type="submit">cadastro</Button>
          </form>
        </Content>
      </Boxes>
    </>
  );
};

export default Register;
