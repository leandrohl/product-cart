import { ChangeEvent, FormEvent, useContext, useState } from 'react'
import { ClientContext } from '../../contexts/ClientContext'

import { MdClose } from 'react-icons/md'

import './styles.css'
import { CartContext } from '../../contexts/CartContext'


interface Product{
    id: number;
    name: string;
    color: string;
    price: number;
    qtde: number;
    size: number;
}

interface Client{
    name: string;
    cpf: string;
    email: string;
    address: string;
    cellphone: string;
    password: string;
    products: Product[];
    priceTotal: number;
}

export default function Register(){
    const { addClientToList, closeRegister, openLogin} = useContext(ClientContext)
    const {cart, clearCart, priceTotal} = useContext(CartContext)

    const [formData, setFormData] = useState<Client>({
		name: '',
        cpf: '000.000.000-00',
        email: '',
        address: '',
        cellphone: '(99)99999-9999',
        password: '',
        products: cart,
        priceTotal: priceTotal
	})


    function handleInputChange(event: ChangeEvent<HTMLInputElement>){
		const {name, value} = event.target;
		
		setFormData({ ...formData, [name]: value});
	}


    function handleSubmit(event: FormEvent ){
        event.preventDefault();

        
        addClientToList(formData)
        clearCart()

        closeRegister()
        // history.push("/")
    }

        

    return(
        <div className="overlayy">
            <div className="containerCheckout">
            <form className='formRegister' onSubmit={handleSubmit}>
                <h1>Identificação</h1>
                    <div className='registerInputs'>
                        <input type="email" name="email" placeholder="*e-mail" required onChange={handleInputChange}></input>
                        <input type="text" name="cpf"  placeholder="*cpf" required  onChange={handleInputChange}></input>
                        <input type="text" name="name"  placeholder="*nome" required  onChange={handleInputChange}></input>
                        <input type="text" name="cellphone"  placeholder="*telefone" required  onChange={handleInputChange}></input>
                        <input type="text" name="address"  placeholder="*endereço" required  onChange={handleInputChange}></input>
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
                        <button type="button" onClick={() => {
                            closeRegister()
                            openLogin()
                        }}>
                            Quero fazer login
                        </button>
                    </div>
            </form>
                <button 
                type="button"
                className="close"
                onClick={closeRegister}
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