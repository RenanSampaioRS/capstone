import api from "../../services/api";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { User } from "../../providers/UserProvider";

import { Button, Input } from "../../stylesGlobal";
import { Boxes, Content } from "./style";

const Login = ({ notifyLog }) => {
  const { setId, loggedUser } = User();

  const history = useHistory();

  const handleData = (dados) => {
    api
      .post("/login", dados)
      .then(
        (response) =>
          notifyLog() &&
          setTimeout(() => {
            localStorage.clear();
            localStorage.setItem(
              "token",
              JSON.stringify(response.data.accessToken)
            );
            setId(jwt_decode(localStorage.getItem("token")).sub);
            if (loggedUser.type === "pf") {
              history.push("/users/dev");
            } else {
              history.push("/users/comp");
            }
          }, 3000)
      )
      .catch(() => {
        setError("password", { message: "Conta não existente" });
      });
  };

  const schema = yup.object().shape({
    email: yup.string().email("E-MAIL inválido").required("Campo obrigatório"),
    password: yup.string().required("Campo obrigatório"),
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
    <div>
      <Boxes>
        <span></span>
        <Content>
          <form onSubmit={handleSubmit(handleData)}>
            <div>
              <Input
                className="email"
                {...register("email")}
                placeholder="E-mail"
                error={!!errors.email}
              />
              <p style={{ color: "red" }}>{errors.email?.message}</p>
            </div>
            <div>
              <Input
                type="password"
                className="password"
                {...register("password")}
                placeholder="Senha"
                error={!!errors.password}
              />
            </div>
            <p style={{ color: "red" }}>{errors.password?.message}</p>
            <Button type="submit">Login </Button>
          </form>
        </Content>
      </Boxes>
    </div>
  );
};

export default Login;
