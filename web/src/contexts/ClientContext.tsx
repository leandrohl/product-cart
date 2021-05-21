import { createContext, useState, ReactNode, useEffect} from 'react'
import Login from '../components/Login';
import Register from '../components/Register';



interface ClientContextData{
    listClients: Client[];
    openLogin: () => void;
    closeLogin: () => void;
    openRegister: () => void;
    closeRegister: () => void;
    addClientToList: (client: Client) => void;
    checkClient: (client : Request) => boolean;
    addRequestToClient: (client: Request) => void;
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

interface Request{
    email: string;
    password: string;
    products: Product[];
    priceTotal: number;
}

interface Client{
    name: string;
    cpf: string;
    email: string;
    address: string;
    cellphone: string;
    password: string;
    products: Product[];
    priceTotal: number;
}

export const ClientContext = createContext({} as ClientContextData)


export function ClientProvider({ children } : ClientProviderProps){
    const [isLogin, setIsLogin] = useState(false);
    const [isRegister, setIsRegister] = useState(false);

    const [listClients, setListClients] = useState<Client[]>([])
   
    function checkClient(client : Request){
        const data = localStorage.getItem('clients')
        let clients
        let valid = false;

        if (data !== null)
            clients = JSON.parse(data)

        clients.map((user: Client) => {
            if(user.email === client.email && user.password == client.password){
                valid = true
            } 
            return user
        })

        if(valid) {
            return true
        } else {
            return false
        }
    }

    

    function addRequestToClient(client: Request){
        const alreadyExists = listClients.filter(user => user.email === client.email);

        if (alreadyExists.length > 0){
            setListClients(
                listClients.map(user => {
                    if (user.email === client.email){
                        user.products = client.products
                        user.priceTotal = client.priceTotal
                    }
                    return user;
                }
            ))
        } 
    }

    function addClientToList(client:Client){
        setListClients([...listClients, client])
    }

    useEffect(() => {
        console.log(listClients)
        localStorage.setItem("clients", JSON.stringify(listClients));
    }, [listClients])


    function openLogin(){
        setIsLogin(true);
    }

    function closeLogin(){
        setIsLogin(false)
    }

    function openRegister(){
        setIsRegister(true);
    }

    function closeRegister(){
        setIsRegister(false)
    }

    return(
        <ClientContext.Provider value={{
            listClients,
            addClientToList,
            openLogin,
            closeLogin,
            openRegister,
            closeRegister,
            checkClient,
            addRequestToClient
        }}>
            { isLogin && <Login/>}
            { isRegister && <Register/>}
            {children}
        </ClientContext.Provider>
    );
}