

import './styles.css'

export default function Product(){
    return(
        <div className="containerProduct">
            <div className="productImg">
                hufdhgu
            </div>
            <div className="productSpecification">
                <h1>Tênis Olympikus Attract Se 815</h1>
                <span>Marca: Olympikus</span>
                <span>Categoria: Esporte</span>
                <span>Genêro: Masculino</span>
                <div className="productChoose">
                    <div>
                        <span>Cor:</span>
                        <select>
                            <option>Branco</option>
                            <option>Preto</option>
                            <option>Azul</option>
                        </select>
                    </div>

                    <div>
                        <span>Tamanho:</span>
                        <select>
                            <option>40</option>
                            <option>41</option>
                            <option>42</option>
                        </select>
                    </div>
                    
                    <div>
                        <span>Quantidade: </span>
                        <input type="number"></input>
                    </div>

                    
                </div>
                    
                <strong>Valor total: R$ 99.99</strong>

                <div>
                    <button type="button">
                        Adicionar ao carrinho
                    </button> 
                </div>
                
            </div>
        </div>
    )
}