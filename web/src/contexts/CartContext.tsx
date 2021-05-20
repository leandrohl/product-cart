import { createContext, useState, ReactNode, useEffect} from 'react'


interface Product{
    id: number;
    name: string;
    color: string;
    price: number;
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
                    if (item.id === product.id){
                        item.qtde += product.qtde;
                    }
                    return item;
                }
            ))
        } else {
            setCart([...cart, product])
        }
    }

    function clearCart(){
        setCart([])
    }

    function incrementProduct(product: Product){
        setCart(
            cart.map(item => {
                if (item.id === product.id){
                    item.qtde += 1;
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
                }
                return item;
            }
        ))
    }

    function deleteProduct(product: Product){
        setCart(
            cart.filter(item => item.id !== product.id)
        )
    }

    useEffect(() => {
        cart.map(item => {
            setPriceTotal(priceTotal + (item.price * item.qtde))
            return item
        })
    },[cart])


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