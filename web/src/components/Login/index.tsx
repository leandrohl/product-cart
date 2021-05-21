import { ChangeEvent, FormEvent, useContext, useState, } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { ClientContext } from '../../contexts/ClientContext'
import { useHistory } from 'react-router-dom'
import { MdClose } from 'react-icons/md'


import './styles.css'

interface Client{
    email: string;
    password: string;
    products: Product[];
    priceTotal: number;
}

interface Product{
    id: number;
    name: string;
    color: string;
    price: number;
    thumbnail: string;
    qtde: number;
    size: number;
}

  
export default function Login() {

    const {activeRegister, addClientToList, closeCheckOut} = useContext(ClientContext)
    const {cart, clearCart, priceTotal} = useContext(CartContext)

    
    const [formData, setFormData] = useState<Client>({
        email: '',
        password: '',
        products: cart,
        priceTotal,
    })


    function handleInputChange(event: ChangeEvent<HTMLInputElement>){
		const {name, value} = event.target;

		
		setFormData({ ...formData, [name]: value});
	}

    function handleSubmit(event: FormEvent ){
        event.preventDefault();

        
        addClientToList(formData)
        clearCart()

        closeCheckOut()


        // history.push("/")
    }

    return(
        <div className="overlay">
            <div className="containerCheckout">
                <form className='formLogin' onSubmit={handleSubmit} >
                    <h1>Identificação</h1>
                        
                    <div className='formInputs'>
                        <input type="email" name="email"  placeholder="e-mail" onChange={handleInputChange} required />
                        <input type="text" name="password" placeholder="senha" onChange={handleInputChange} required/>
                    </div>
                    <div className='formButtons'>
                        <button type="submit">
                            Entrar
                        </button>
                        <span>ou</span>
                        <button type="button" onClick={activeRegister}>
                            Quero me cadastrar
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