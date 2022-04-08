import { useState } from "react";
import api from "../../services/api";
import { useForm } from "react-hook-form";

import { BtnAtt } from "../../stylesGlobal";

import { InputPesq, DivPesque, DivP, DivB } from "./style";

import { Rotate } from "react-awesome-reveal";
import CardCompany from "../CardCompany/injex";
// import { Token } from "../../providers/TokenProvider";
// import { useHistory } from "react-router-dom";

const GetOneCompany = () => {
  const [companie, setCompanie] = useState([]);

  const { register, handleSubmit } = useForm({});

  const getCompany = (data) => {
    api
      .get(
        `/users?${data.name ? "name_like=" + data.name : ""}&${
          data.city ? "city=" + data.city : ""
        }&type=pj`
      )

      .then((res) => {
        setCompanie(res.data);
      })
      .catch((e) => console.log(e));
  };

  return (
    <div>
      <div style={{ textAlign: "center", padding: "10px" }}>
        <h2>Pesquisar uma Empresa:</h2>
      </div>
      <form onSubmit={handleSubmit(getCompany)}>
        <div>
          <DivPesque>
            <DivP>
              <InputPesq
                placeholder="Nome da Empresa"
                {...register("name")}
              ></InputPesq>
            </DivP>
            <DivP>
              <InputPesq {...register("city")} placeholder="Cidade" />
            </DivP>
          </DivPesque>
          <DivB>
            <BtnAtt type="submit">Pesquisar</BtnAtt>
          </DivB>
        </div>
      </form>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {companie.map((comp, i) => (
          <div key={i}>
            <Rotate direction="bottom-left" cascade="true">
              <CardCompany devs={comp} />
            </Rotate>
          </div>
        ))}
      </div>
    </div>
  );
};
export default GetOneCompany;
