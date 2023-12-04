import { createContext, useEffect, useState } from "react";

export const LoginContext = createContext()

export const LoginProvider = ({ children }) => {
    const [isLogged, setIsLoged] = useState(JSON.parse(localStorage.getItem("isLogged")) || false);

    useEffect(() => {
        const storedIsLogged = localStorage.getItem("isLogged");
        if (storedIsLogged) {
            setIsLoged(JSON.parse(storedIsLogged));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("isLogged", JSON.stringify(isLogged));
    }, [isLogged]);

    const setLogged = () => {
        setIsLoged(true)
    }
    const setUnLogged = () => {
        setIsLoged(false)
    }

    return (
        <LoginContext.Provider value={{ isLogged, setLogged, setUnLogged }}>
            {children}
        </LoginContext.Provider>
    )
}