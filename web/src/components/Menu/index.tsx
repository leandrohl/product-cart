
import './styles.css'

import { IoLogoFoursquare } from 'react-icons/io'
import { BiCart } from 'react-icons/bi'

export default function Menu(){
    return(
        <div className="containerMenu">
            <div className="logo">
                <IoLogoFoursquare
                    color= 'var(--white)'
                    size = {25}
                />
            </div>
            <div className="menu">
                <ul>
                   <li>Produtos</li>
                   <li>Pedidos</li>
                   <li>
                    <BiCart
                        color= 'var(--white)'
                        size = {18}
                    />
                   </li>
                </ul> 
            </div>
    
        </div>
    )
}