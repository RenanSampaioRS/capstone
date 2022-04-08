import { useForm } from "react-hook-form";
import api from "../../services/api";
import { useState } from "react";
import { User } from "../../providers/UserProvider";
import { useEffect } from "react";

import { InputProfile, BtnAtt } from "../../stylesGlobal";
import { useHistory } from "react-router-dom";

const UpProfileComp = ({ notifyUpProfComp }) => {
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

  const [social_mediasInput, setSocial_mediasInput] = useState("");

  const [descriptionInput, setDescriptionInput] = useState("");

  useEffect(() => {
    setNameInput(loggedUser.name);
    setCityInput(loggedUser.city);
    setSocial_mediasInput(loggedUser.social_medias);
    setDescriptionInput(loggedUser.description);
  }, [
    loggedUser.city,
    loggedUser.description,
    loggedUser.name,
    loggedUser.social_medias,
  ]);

  const { register, handleSubmit } = useForm({});

  const handleUpdate = (e) => {
    api
      .patch(
        `/users/${id}`,
        {
          name: nameInput,
          city: cityInput,
          social_medias: social_mediasInput,
          description: descriptionInput,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(notifyUpProfComp())
      .catch((e) => console.log(e));
  };

  return (
    <div>
      <h2>Atualizar perfil da Empresa</h2>

      <form onSubmit={handleSubmit(handleUpdate)}>
        <div>
          <InputProfile
            placeholder="Nome"
            {...register("name")}
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
          />
        </div>

        <div>
          <InputProfile
            placeholder="Cidade"
            {...register("city")}
            value={cityInput}
            onChange={(e) => setCityInput(e.target.value)}
          />
        </div>

        <div>
          <InputProfile
            placeholder="Redes Sociais"
            {...register("social_medias")}
            value={social_mediasInput}
            onChange={(e) => setSocial_mediasInput(e.target.value)}
          />
        </div>

        <div>
          <InputProfile
            placeholder="Descrição"
            {...register("description")}
            value={descriptionInput}
            onChange={(e) => setDescriptionInput(e.target.value)}
          />
        </div>
        <BtnAtt type="submit">Atualizar</BtnAtt>
      </form>
    </div>
  );
};

export default UpProfileComp;
