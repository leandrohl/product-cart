
import './styles.css'

import { MdClose } from 'react-icons/md'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

interface Product{
    id: number;
    name: string;
    color: string;
    price: number;
    qtde: number;
    size: number;
}

export default function Cart(){

    const {cart, priceTotal, incrementProduct, decrementProduct, clearCart, deleteProduct} = useContext(CartContext)


    return(
        <div className="container">
                {
                    cart.length > 0 
                    ? 
                    <div className="containerCart">
                        <div className="title">
                            <h1>Carrinho de Compras</h1>
                        </div>
                        {
                        cart.map((product:Product) => {
                            return(
                                <div className="productInfo" key={product.id}>
                                    <div></div>
                                    <div>
                                        <div className="name">
                                            <h1>{product.name}</h1>
                                            <MdClose
                                                color= 'var(--gray-dark)'
                                                size = {25}
                                                onClick={() => deleteProduct(product)}
                                            />
                                        </div>
                                        <div className="option">
                                            <span>Cor <strong>{product.color}</strong></span>
                                        </div>
                                        <div className="option">
                                            <span>Tamanho <strong>{product.size}</strong></span>
                                        </div>
                                        <div className="option">
                                            <span>Qtde <strong>{product.qtde}</strong> </span>
                                            <div>
                                                <button type="button" onClick={() => decrementProduct(product)}>-</button>
                                                <button type="button" onClick={() => incrementProduct(product)}>+</button>
                                            </div>
                                        </div>
                                        <div className="total">
                                            <span>Sub-total: {(product.price * product.qtde).toFixed(2)}</span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                        }
                            <div className="finish">
                                <button onClick={clearCart}>Limpar carrinho</button>
                                <strong>Total: {priceTotal} </strong>
                                <button>Finalizar Pedido</button>
                            </div>  
                        </div>
                        
                    : 
                    <h1>O carrinho está vazio</h1>
                }

        </div>
    )
}