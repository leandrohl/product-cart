import { createContext, useState, ReactNode} from 'react'

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


export function CartProvider({ children, ...rest } : CartProviderProps){
    const [cart, setCart] = useState<Product[]>([])

    function addCart(product: Product){
        const alreadyExists = cart.filter(item => item.id === product.id);

        if (alreadyExists.length > 0){
            setCart(
                cart.map(item=> {
                    if (item.id === product.id){
                        item.qtde += product.qtde;
                    }
                    return product;
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
                return product;
            }
        ))
    }

    function decrementProduct(product: Product){
        setCart(
            cart.map(item => {
                if (item.id === product.id && item.qtde > 1){
                    item.qtde -= 1;
                }
                return product;
            }
        ))
    }

    function deleteProduct(product: Product){
        setCart(
            cart.filter(item => item.id !== product.id)
        )
    }

    return(
        <CartContext.Provider value={{
            cart,
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