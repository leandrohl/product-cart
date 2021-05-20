import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import {products} from '../../products'

import './styles.css'

type Product = {
    id: number;
    name: string,
    description: string,
    thumbnail: string,
    brand: string,
    color: string[],
    gender: string,
    category: string,
    price: number, 
    amount: number,
    size: number[]
}


export default function ProductItem(){
    
    const {id} = useParams<{id : string}>()

    const [product, setProduct] = useState<Product>()

    useEffect(() => {
        let item = products.filter(product => product.id === parseInt(id))[0];
        setProduct(item)
    },[id])

    return(
        <div className="containerProduct">
            <div className="productImg">
                hufdhgu
            </div>
            <div className="productSpecification">
                <h1>{product?.name}</h1>
                <span>Marca: {product?.brand}</span>
                <span>Categoria: {product?.category}</span>
                <span>Genêro: {product?.gender}</span>
                <form className="productChoose">
                    <div>
                        <span>Cor:</span>
                        <select name="color" required>
                            {
                                product?.color.map((cor, index) => {
                                    return(
                                        <option value={cor} key={index}>{cor}</option>
                                    )
                                })
                            }
                        </select>
                    </div>

                    <div>
                        <span>Tamanho:</span>
                        <select name="size" required>
                            {
                                product?.size.map((size, index) => {
                                    return(
                                        <option value={size} key={index}>{size}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    
                    <div>
                        <span>Quantidade: </span>
                        <input type="number" name="amount" required max={product?.amount}></input>
                    </div>

                    <strong>Total: R$ {product?.price} </strong>

                    <div>
                        <button 
                        type="submit"
                        >
                            Adicionar ao carrinho
                        </button> 
                    </div>
                    
                </form>
                    
            
                
            </div>
        </div>
    )
}