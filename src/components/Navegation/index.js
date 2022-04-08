import { Link } from "react-router-dom";
import { User } from "../../providers/UserProvider";
import { Div } from "./style";

const Navegation = () => {
  const { loggedUser } = User();
  const { setId } = User();

  const logoutUser = () => {
    localStorage.removeItem("token");
    setId(false);
  };

  return (
    <>
      {localStorage.getItem("token") && (
        <Div>
          <button>
            <Link to="/home">Principal</Link>
          </button>
          <button>
            {loggedUser.type === "pf" ? (
              <Link to="/users/dev">Usuário</Link>
            ) : (
              <Link to="/users/comp">Empresa</Link>
            )}
          </button>
          <button>
            <Link to="/pesquisa">Pesquisa</Link>
          </button>
          <button onClick={logoutUser}>
            <Link to="/">Sair</Link>
          </button>
        </Div>
      )}
    </>
  );
};

export default Navegation;
