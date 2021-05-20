import { useContext } from 'react'
import { MdClose } from 'react-icons/md'
import { ClientContext } from '../../contexts/ClientContext'

import './styles.css'

export default function Register(){
    const {closeCheckOut, isRegisterActive, activeRegister} = useContext(ClientContext)

    function handleSubmit(){
        const client = {
            
        }
    }

    return(
            <form className='formRegister'>
                <h1>Identificação</h1>
                    <div className='registerInputs'>
                        <input type="email" name="email" placeholder="*e-mail" required ></input>
                        <input type="number" name="cpf"  placeholder="*cpf" required ></input>
                        <input type="text" name="name"  placeholder="*nome" required ></input>
                        <input type="number" name="cellphone"  placeholder="*telefone" required ></input>
                        <input type="password" name="password"  placeholder="*senha" required ></input>
                    </div>
                    <div className='registerButtons'>
                        <button 
                        type="submit"
                        onClick={handleSubmit}
                        >
                            Cadastrar
                        </button>
                        <span>ou</span>
                        <button type="submit" onClick={activeRegister}>
                            Quero fazer login
                        </button>
                    </div>
            </form>
        
    )
}