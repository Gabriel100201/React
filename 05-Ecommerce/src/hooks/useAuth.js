import { useContext, useState } from "react"
import users from "../mocks/users.json"
import { LoginContext } from "../context/login"
import { useNavigate } from "react-router-dom"

export const useAuth = () => {
    const navigate = useNavigate()
    const { isLogged, setLogged, setUnLogged } = useContext(LoginContext)
    const [loginError, setLoginError] = useState(null)

    const tryAuth = ({ mail, password }) => {
        const user = users.users.find((user) => user.mail === mail);
        if (user && user.password === password) {
            setLoginError(null)
            setLogged();
            navigate("/")
        } else {
            const error = user ? "No se encontró el usuario" : "Contraseña incorrecta";
            setLoginError(error)
            setUnLogged();
        }
    }

    return {
        isLogged,
        tryAuth,
        loginError
    }
}