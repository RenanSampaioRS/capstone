import { useHistory } from "react-router-dom";
import AlteraHead from "../../components/AlterHead";
import UpProfileComp from "../../components/UpProfileComp";
import Vacancies from "../../components/Vacancies";
import { User } from "../../providers/UserProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { DivComp, DivAvatar, DivProfile } from "../../stylesGlobal";

const PageProfileComp = () => {
  const { loggedUser } = User();

  const history = useHistory();
  if (loggedUser.type === "pf") {
    history.push("/users/dev");
  }

  const notifyUpProfComp = () => toast("Atualizado com sucesso!");

  const notifyCreateVacancies = () => toast("Vaga anunciada com sucesso!");

  const notifyUpVacancies = () => toast("Vaga editada com sucesso!");

  return (
    <>
      <AlteraHead />
      <DivProfile>
        <DivAvatar>
          <img src="" alt=""></img>
        </DivAvatar>
        <DivComp className="divCOmp">
          <UpProfileComp notifyUpProfComp={notifyUpProfComp} />
        </DivComp>
      </DivProfile>
      <div
        style={{
          border: "1px solid white",
          width: "99%",
          height: "auto",
          margin: "30px auto",
          textAlign: "center",
        }}
      >
        <h1> Anuncia Vagas</h1>
        <Vacancies
          notifyCreateVacancies={notifyCreateVacancies}
          notifyUpVacancies={notifyUpVacancies}
        />
      </div>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};
export default PageProfileComp;
