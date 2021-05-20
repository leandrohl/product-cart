import {products} from '../../products'

import './styles.css'

export default function Products(){

    
    return(
        <div className="container">
            <div className="title">
                <h1>Produtos</h1>
            </div>
            <div className="containerProducts">
                {
                    products.map((product) => {
                        return(
                            <div className="product" key={product.id}>
                                <div></div>
                                <h2>{product.name}</h2>
                                <span>R$ {product.price}</span>
                                <div>
                                    <button type="button">
                                        Comprar
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            
        </div>
    )
}