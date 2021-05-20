import {products} from '../../products'

import './styles.css'

import {Link} from 'react-router-dom'

export default function Products(){

    
    return(
        <main className="container">
            <div className="title">
                <h1>Produtos</h1>
            </div>
            <div className="containerProducts">
                {
                    products.map((product) => {
                        return(
                            <Link to={`/product`}>
                                <div className="product" key={product.id}>
                                    <div></div>
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