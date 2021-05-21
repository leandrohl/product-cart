import { ChangeEvent, FormEvent, useContext, useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'

import {CartContext} from '../../contexts/CartContext'

import {products} from '../../products'

import './styles.css'

interface Product {
    id: number;
    name: string;
    description: string;
    thumbnail: string;
    brand: string;
    color: string[];
    gender: string;
    category: string;
    price: number;
    amount: number;
    size: number[];
}


export default function ProductItem(){

    const {addCart} = useContext(CartContext)
    
    const {id} = useParams<{id : string}>()

    const [product, setProduct] = useState<Product>({
        id: 1,
        name: '',
        description: '',
        thumbnail: '',
        brand: '',
        color: [],
        gender: '',
        category: '',
        price: 0.0,
        amount: 0,
        size: []
    })

    const [color, setColor] = useState<string>('')
    const [size, setSize] = useState<number>(0)
    const [qtde, setqtde] = useState<number>(0)

    let history = useHistory()

    useEffect(() => {
        let item = products.filter(product => product.id === parseInt(id))[0];
        setColor(item.color[0])
        setSize(item.size[0])
        setProduct(item)
    },[id])

    function handleColorChange(event: ChangeEvent<HTMLSelectElement>) {
        const valor = event.target.value
        setColor(valor)
    }

    function handleSizeChange(event:ChangeEvent<HTMLSelectElement>) {
        const valor = parseInt(event.target.value)
        setSize(valor)
    }

    function handleAmountChange(event: ChangeEvent<HTMLInputElement>) {
        const valor = parseInt(event.target.value)
        setqtde(valor)
    }

    function handleSubmit(event: FormEvent){
        event.preventDefault();
        const item = {
            id: product?.id,
            name: product?.name,
            color,
            price: product?.price,
            thumbnail: product?.thumbnail,
            qtde,
            size,
        }

        addCart(item)
        history.push("/cart")
    }


    return(
        <div className="containerProduct">
            <div className="productImg">
                <img src={product?.thumbnail} alt={product?.name}/>
            </div>
            <div className="productSpecification">
                <h1>{product?.name}</h1>
                <span>Marca: {product?.brand}</span>
                <span>Categoria: {product?.category}</span>
                <span>Genêro: {product?.gender}</span>
                <form className="productChoose" onSubmit={handleSubmit}>
                    <div>
                        <label>Cor:</label>
                        <select name="color" required onChange={handleColorChange}>
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
                        <label>Tamanho:</label>
                        <select name="size" required onChange={handleSizeChange}>
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
                        <label>Quantidade: </label>
                        <input type="number" name="amount"  max={product?.amount} min={1} onChange={handleAmountChange} required></input>
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