import { createContext, useEffect, useState } from "react";

export const LoginContext = createContext()

export const LoginProvider = ({ children }) => {
    const [isLogged, setIsLoged] = useState(JSON.parse(localStorage.getItem("isLogged")) || false);
    const [infoLoged, setInfoLoged] = useState(JSON.parse(localStorage.getItem("infoLoged")) || { name: null, email: null })

    useEffect(() => {
        const storedIsLogged = localStorage.getItem("isLogged");
        const storedInfoLoged = localStorage.getItem("infoLoged");
        if (storedIsLogged && storedInfoLoged) {
            setIsLoged(JSON.parse(storedIsLogged));
            setInfoLoged(JSON.parse(storedInfoLoged))
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("isLogged", JSON.stringify(isLogged));
        localStorage.setItem("infoLoged", JSON.stringify(infoLoged));
    }, [isLogged]);

    const setLogged = ({ mail, password }) => {
        setIsLoged(true)
        setInfoLoged({ mail, password })
    }
    const setUnLogged = () => {
        localStorage.removeItem("isLogged");
        localStorage.removeItem("infoLogged");

        setIsLoged(false);
        setInfoLoged({ name: null, email: null });
    }

    return (
        <LoginContext.Provider value={{ isLogged, setLogged, setUnLogged, infoLoged }}>
            {children}
        </LoginContext.Provider>
    )
}