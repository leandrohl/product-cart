
import './styles.css'

import { IoLogoFoursquare } from 'react-icons/io'
import { BiCart } from 'react-icons/bi'

import {Link} from 'react-router-dom'

export default function Menu(){
    return(
        <div className="containerMenu">
            <div className="logo">
                <Link to="/">
                    <IoLogoFoursquare
                        color= 'var(--white)'
                        size = {25}
                    />
                </Link>
            </div>
            <div className="menu">
                <ul>
                    
                   <li>
                        <Link to="/">Produtos</Link>
                    </li>
                   <li>
                       <Link to="/">Pedidos</Link>
                   </li>
                   <li>
                       <Link to="/cart">
                        <BiCart
                        color= 'var(--white)'
                        size = {18}
                        />
                       </Link>
                   </li>
                </ul> 
            </div>
    
        </div>
    )
}