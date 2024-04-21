import { createContext } from "react";

export const CardContext = createContext({

})

export default function CardContextProvider({ children }) {
    return (
        <CardContext.Provider>
            {children}
        </CardContext.Provider>
    )
}