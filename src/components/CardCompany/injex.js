import { Modal } from "@material-ui/core";
import {useState} from "react";
import ModalCompanay from "../ModalCompanay";
import{ DivPai} from './style';
import {BtnAtt} from '../../stylesGlobal'

const CardCompany = ({devs}) =>{
    const [open, setOpen] = useState(false);

    const handleOpen = (e) => {
        setOpen(true);
      };
      const handleClose = (e) => {
        setOpen(false);
      };
 
    return(
        <DivPai>
             <div >
                <div>
                    <img  src="https://st.depositphotos.com/1779253/5140/v/600/depositphotos_51405259-stock-illustration-male-avatar-profile-picture-use.jpg" alt="avatar Profile"/>
                </div>
                <h2>{devs.name}</h2>
            </div>
            <BtnAtt onClick={handleOpen}>Perfil Empresa</BtnAtt>
            <Modal open={open} onClose={handleClose}>
                <ModalCompanay user={devs}/>                
            </Modal>
        </DivPai>
    )
}
export default CardCompany;