import { createContext, useState, ReactNode, useEffect} from 'react'
import Login from '../components/Login';



interface ClientContextData{
    isRegisterActive: boolean;
    listClients: Client[];
    openCheckOut: () => void;
    closeCheckOut: () => void;
    activeRegister: () => void;
    addClientToList: (client: Client) => void;
}

interface ClientProviderProps {
    children: ReactNode; //aceita qualquer coisa
}

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

export const ClientContext = createContext({} as ClientContextData)


export function ClientProvider({ children } : ClientProviderProps){
    const [isCheckOutOpen, setIsCheckOutOpen] = useState(false);
    const [isRegisterActive, setIsRegisterActive] = useState(false);

    const [listClients, setListClients] = useState<Client[]>([])
   


    function addClientToList(client: Client){
        setListClients([...listClients, client])
    }

    useEffect(() => {
        console.log(listClients)
        localStorage.setItem("clients", JSON.stringify(listClients));
    }, [listClients])


    function activeRegister(){
        setIsRegisterActive(!isRegisterActive)
    }

    function openCheckOut(){
        setIsCheckOutOpen(true);
    }

    function closeCheckOut(){
        setIsRegisterActive(false)
        setIsCheckOutOpen(false)
    }

    return(
        <ClientContext.Provider value={{
            isRegisterActive,
            listClients,
            openCheckOut,
            closeCheckOut,
            activeRegister,
            addClientToList
        }}>
            { isCheckOutOpen && <Login/>}
            {children}
        </ClientContext.Provider>
    );
}