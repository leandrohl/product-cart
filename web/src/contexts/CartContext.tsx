import { createContext, useState, ReactNode, useEffect} from 'react'
import ProductItem from '../pages/ProductItem';


interface Product{
    id: number;
    name: string;
    color: string;
    price: number;
    thumbnail: string;
    qtde: number;
    size: number;
}

interface CartContextData{
    cart: Product[];
    priceTotal: number,
    addCart: (product: Product) => void;
    clearCart: () => void;
    incrementProduct: (product: Product) => void;
    decrementProduct: (product: Product) => void;
    deleteProduct: (product: Product) => void;
}

interface CartProviderProps {
    children: ReactNode; //aceita qualquer coisa
}

export const CartContext = createContext({} as CartContextData)


export function CartProvider({ children } : CartProviderProps){
    const [cart, setCart] = useState<Product[]>([])
    const [priceTotal, setPriceTotal] = useState<number>(0.0)

    

    function addCart(product: Product){
        
        const alreadyExists = cart.filter(item => item.id === product.id);

        if (alreadyExists.length > 0){
            setCart(
                cart.map(item => {
                    if (item.id === product.id && item.color === product.color && item.size === product.size){
                        item.qtde += product.qtde
                    }
                    return item;
                }
            ))
        } else {
            setCart([...cart, product])
        }
        setPriceTotal(priceTotal + (product.qtde * product.price))
        
    }


    function clearCart(){
        setPriceTotal(0.0)
        setCart([])
    }

    function incrementProduct(product: Product){
        setCart(
            cart.map(item => {
                if (item.id === product.id){
                    item.qtde += 1;
                    setPriceTotal(priceTotal + product.price)
                }
                return item;
            }
        ))

    }

    function decrementProduct(product: Product){
        setCart(
            cart.map(item => {
                if (item.id === product.id && item.qtde > 1){
                    item.qtde -= 1;
                    setPriceTotal(priceTotal - product.price)
                }
                return item;
            }
        ))
    }

    function deleteProduct(product: Product){
        setCart(
            cart.filter(item => item.id !== product.id)
        )
        setPriceTotal(priceTotal - (product.price * product.qtde))
    }




    return(
        <CartContext.Provider value={{
            cart,
            priceTotal,
            addCart,
            clearCart,
            incrementProduct,
            decrementProduct,
            deleteProduct,
        }}>
            {children}
        </CartContext.Provider>
    );
}