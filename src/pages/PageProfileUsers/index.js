import { useHistory } from "react-router-dom";
import AlteraHead from "../../components/AlterHead";
import UpProfileDev from "../../components/UpProfileDev";
import { User } from "../../providers/UserProvider";
import { DivComp, DivAvatar, DivProfile } from "../../stylesGlobal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PageProfileUsers = () => {
  const history = useHistory();

  const { loggedUser } = User();

  if (loggedUser.type === "pj") {
    history.push("/users/comp");
  }

  const notifyUpProfDev = () => toast("Atualizado com sucesso!");

  return (
    <div>
      <AlteraHead />
      <DivProfile>
        <DivAvatar>
          <img src="" alt=""></img>
        </DivAvatar>
        <DivComp>
          <UpProfileDev notifyUpProfDev={notifyUpProfDev} />
        </DivComp>
      </DivProfile>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};
export default PageProfileUsers;
