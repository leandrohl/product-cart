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

    const { checkLogin, closeLogin, openRegister,  addRequestToClient} = useContext(ClientContext)
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

        if(checkLogin(formData)){
            addRequestToClient(formData)
            clearCart()
            closeLogin()
        } else {
            alert('Não há um cadastro com esse email/senha')
        }

        // addClientToList(formData)
        

        


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
                        <button type="button" onClick={() => {
                            closeLogin()
                            openRegister()
                        }}>
                            Quero me cadastrar
                        </button>
                    </div>
                </form>
                <button 
                type="button"
                className="close"
                onClick={closeLogin}
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