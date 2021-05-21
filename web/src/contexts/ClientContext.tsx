import { createContext, useState, ReactNode} from 'react'
import Checkout from '../components/Checkout';



interface ClientContextData{
    isRegisterActive: boolean;
    openCheckOut: () => void;
    closeCheckOut: () => void;
    activeRegister: () => void;
    addClientToList: (client: Client) => void;
}

interface ClientProviderProps {
    children: ReactNode; //aceita qualquer coisa
}

interface Client{
    name: string;
    cpf: string;
    email: string;
    cellphone: string;
    password: string;
}

export const ClientContext = createContext({} as ClientContextData)


export function ClientProvider({ children } : ClientProviderProps){
    const [isCheckOutOpen, setIsCheckOutOpen] = useState(false);
    const [isRegisterActive, setIsRegisterActive] = useState(false);

    const [listClients, setListClients] = useState<Client[]>([])
   


    function addClientToList(client: Client){
        
        const alreadyExists = listClients.filter(user => client.cpf === user.cpf);

        if (alreadyExists.length > 0){
            return;
        } else {
            setListClients([...listClients, client])
        }
    }


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
            openCheckOut,
            closeCheckOut,
            activeRegister,
            addClientToList
        }}>
            {children}
            { isCheckOutOpen && <Checkout/>}
        </ClientContext.Provider>
    );
}