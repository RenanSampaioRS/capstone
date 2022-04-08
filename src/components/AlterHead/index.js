import Navegation from "../Navegation";
import NavegationMob from '../NavegationMob';


const AlteraHead = () =>{
    return(
        <div>
             {window.screen.width >= 600 ? <Navegation/> : <NavegationMob/>}
        </div>
    )
}
 
export default AlteraHead;