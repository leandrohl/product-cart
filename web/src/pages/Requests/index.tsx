
import {useContext} from 'react'

import { ClientContext } from '../../contexts/ClientContext'
import './styles.css'


interface Product{
    id: number;
    name: string;
    color: string;
    price: number;
    qtde: number;
    size: number;
}

interface Client{
    email: string;
    password: string;
    products: Product[];
    priceTotal: number;
}


export default function Requests(){


    const data = localStorage.getItem('clients')
    let clients

    if (data !== null)
        clients = JSON.parse(data)
    
    console.log(clients)
    return(
        <div className="containerRequests">
            {
                clients.length > 0
                ?
                clients.map((client: Client, index: number) => {
                    return(
                        <>
                            <div className="title" key="index">
                                <h1>Seus pedidos</h1>
                            </div>
                            <div className="containerClient">
                                <h2>Cliente</h2>
                                <strong>E-mail: {client.email}</strong>
                                <strong>Senha: {client.password}</strong>
                            </div>
                            <div className="containerItems">
                                <h2>Produtos</h2>
                                {
                                    client.products.map((product: Product) => {
                                        return(
                                            <div className="productInfor" key={product.id}>
                                                <span>Nome: <strong> {product.name} </strong></span>
                                                <span>Quantidade: <strong> {product.qtde} </strong></span>
                                                <span>Cor: <strong> {product.color} </strong></span>
                                                <span>Tamanho: <strong> {product.size} </strong></span>
                                                <span>Preço: <strong> R$ {(product.price * product.qtde).toFixed(2)} </strong></span>
                                            </div>
                                        )
                                    })
                                }
                                <strong>Valor Total: {client.priceTotal.toFixed(2)}</strong>
                            </div>
                        </>
                    )
                })
                    
                :
                <h1>Não há pedidos ainda</h1>
            }
            
        </div>
    )
}