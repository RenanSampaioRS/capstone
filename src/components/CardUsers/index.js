import { Modal } from "@material-ui/core";
import { useState } from "react";

import { DivPai } from "./style";
import { BtnAtt } from "../../stylesGlobal";
import PerfilDev from "../PerfilDev";

const CardUsers = ({ user }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = (e) => {
    setOpen(true);
  };
  const handleClose = (e) => {
    setOpen(false);
  };

  return (
    <DivPai>
      <div>
        <div>
          <img
            src="https://st.depositphotos.com/1779253/5140/v/600/depositphotos_51405259-stock-illustration-male-avatar-profile-picture-use.jpg"
            alt="avatar Profile"
          />
        </div>
        <h2>{user.name}</h2>
      </div>

      <BtnAtt onClick={handleOpen}>Exibir Pefil</BtnAtt>
      <Modal open={open} onClose={handleClose}>
        <PerfilDev dados={user} />
      </Modal>
    </DivPai>
  );
};

export default CardUsers;
