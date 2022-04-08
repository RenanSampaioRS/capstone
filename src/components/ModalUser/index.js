import {DivPai} from '../ModalCompanay/syle'

const ModalUser = ({user}) =>{
    return (
        <DivPai>
            <h3>Dev: {user.name}</h3>
            <p>Desenvolver o perfil</p>
        </DivPai>
    )
}

export default ModalUser 