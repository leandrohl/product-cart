import { ChangeEvent, FormEvent, useContext, useState } from 'react'
import { ClientContext } from '../../contexts/ClientContext'

import { MdClose } from 'react-icons/md'

import './styles.css'

interface DataClient{
    name: string;
    cpf: string;
    email: string;
    cellphone: string;
    password: string;
}

export default function Register(){
    const { activeRegister, addClientToList, closeCheckOut} = useContext(ClientContext)

    const [formData, setFormData] = useState<DataClient>({
		name: '',
        cpf: '000.000.000-00',
        email: '',
        cellphone: '(99)99999-9999',
        password: ''
	})


    function handleInputChange(event: ChangeEvent<HTMLInputElement>){
		const {name, value} = event.target;
		
		setFormData({ ...formData, [name]: value});
	}


    function handleSubmit(event: FormEvent){
        event.preventDefault();

        const client = formData

        // addClientToList(client)
        closeCheckOut()
    }

        

    return(
        <div className="overlay">
            <div className="containerCheckout">
            <form className='formRegister' onSubmit={handleSubmit}>
                <h1>Identificação</h1>
                    <div className='registerInputs'>
                        <input type="email" name="email" placeholder="*e-mail" required onChange={handleInputChange}></input>
                        <input type="text" name="cpf"  placeholder="*cpf" required  onChange={handleInputChange}></input>
                        <input type="text" name="name"  placeholder="*nome" required  onChange={handleInputChange}></input>
                        <input type="text" name="cellphone"  placeholder="*telefone" required  onChange={handleInputChange}></input>
                        <input type="password" name="password"  placeholder="*senha" required onChange={handleInputChange} ></input>
                    </div>
                    <div className='registerButtons'>
                        <button 
                        type="submit"
                        id="loadAll"
                        >
                            Cadastrar
                        </button>
                        <span>ou</span>
                        <button type="button" onClick={activeRegister}>
                            Quero fazer login
                        </button>
                    </div>
            </form>
                <button 
                type="button"
                className="close"
                onClick={closeCheckOut}
                >
                    <MdClose
                        color= 'var(--gray-dark)'
                        size = {25}
                    />
                </button>
            </div>
        </div>
            
        
    )
}