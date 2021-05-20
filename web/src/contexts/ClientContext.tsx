import { createContext, useState, ReactNode, useEffect} from 'react'
import Checkout from '../components/Checkout';


interface ClientContextData{
    isRegisterActive: boolean;
    openCheckOut: () => void;
    closeCheckOut: () => void;
    activeRegister: () => void;
}

interface ClientProviderProps {
    children: ReactNode; //aceita qualquer coisa
}

export const ClientContext = createContext({} as ClientContextData)


export function ClientProvider({ children } : ClientProviderProps){
    const [isCheckOutOpen, setIsCheckOutOpen] = useState(false);
    const [isRegisterActive, setIsRegisterActive] = useState(false);

    function activeRegister(){
        setIsRegisterActive(!isRegisterActive)
    }

    function openCheckOut(){
        setIsCheckOutOpen(true);
    }

    function closeCheckOut(){
        setIsCheckOutOpen(false)
    }

    return(
        <ClientContext.Provider value={{
            isRegisterActive,
            openCheckOut,
            closeCheckOut,
            activeRegister
        }}>
            {children}
            { isCheckOutOpen && <Checkout/>}
        </ClientContext.Provider>
    );
}