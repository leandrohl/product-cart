import { useContext } from 'react'
import { MdClose } from 'react-icons/md'

import { ClientContext } from '../../contexts/ClientContext'

import Register from '../Register'
import Login from '../Login'

import './styles.css'

export default function Checkout() {

    const {closeCheckOut, isRegisterActive} = useContext(ClientContext)

    return(
        <div className="overlay">
            <div className="containerCheckout">
                {
                    isRegisterActive
                    ?
                    <Register/>
                    :
                    <Login/>
                }
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