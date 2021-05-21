import {products} from '../../products'

import './styles.css'

import {Link} from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

export default function Products(){

    const {cart, priceTotal, clearCart} = useContext(CartContext)
    
    console.log(cart)
    return(
        <main className="container">
            <div className="title">
                <h1>Produtos</h1>
            </div>
            <div className="containerProducts">
                {
                    products.map((product) => {
                        return(
                            <Link to={`/product/${product.id}`}  key={product.id}>
                                <div className="product">
                                    <div className="productImagem">
                                        <img src={product.thumbnail} alt={product.name}/>
                                    </div>
                                    <h2>{product.name}</h2>
                                    <span>R$ {product.price}</span>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
            
        </main>
    )
}