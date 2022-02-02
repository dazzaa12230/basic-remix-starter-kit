import { createContext } from 'react'

interface ClientStyleContextData {
    reset: () => void
}

const ClientStyleContext = createContext<ClientStyleContextData>({
    reset: () => {},
})

export default ClientStyleContext
