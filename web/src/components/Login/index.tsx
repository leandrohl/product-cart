import { useContext } from 'react'

import { ClientContext } from '../../contexts/ClientContext'

import './styles.css'

export default function Login() {

    const {activeRegister} = useContext(ClientContext)

    return(
        <form className='formLogin'>
                <h1>Identificação</h1>
                <div className='formInputs'>
                    <input type="cpf" name="cpf" placeholder="e-mail ou CPF" required ></input>
                    <input type="password" name="password"  placeholder="Senha" required ></input>
                </div>
                <div className='formButtons'>
                    <button type="submit">
                        Entrar
                    </button>
                    <span>ou</span>
                    <button type="submit" onClick={activeRegister}>
                        Quero me cadastrar
                    </button>
                </div>
        </form>
        
    )
}