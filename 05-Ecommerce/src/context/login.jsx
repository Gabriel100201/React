import { createContext, useContext, useEffect, useState } from "react";

export const LoginContext = createContext()

export const LoginProvider = ({ children }) => {
    const [isLogged, setIsLoged] = useState(false);

    const setLogged = () => {
        setIsLoged(true)
    }
    const setUnLogged = () => {
        setIsLoged(false)
    }
    useEffect(() => {
        console.log(isLogged)
    }, [isLogged])
    return (
        <LoginContext.Provider value={{ isLogged, setLogged, setUnLogged }}>
            {children}
        </LoginContext.Provider>
    )
}